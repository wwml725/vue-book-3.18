let http = require("http");
let fs = require("fs");
let url = require("url");
let path = require("path");
let sliders = require('./sliders');

//将读取数据封装成一个函数
function read(cb) { //用来读取数据的
  fs.readFile('./book.json','utf8',function (err,data) {
    if(err || data.length === 0){
      cb([]); // 如果有错误 或者文件没长度 就是空数组
    }else{
      //将读取到得数据放入回调函数中
      cb(JSON.parse(data)); // 将读出来的内容转化成对象
    }
  })
}

function write(data,cb) { // 写入内容
  fs.writeFile('./book.json',JSON.stringify(data),cb)
}
let pageSize = 5;


http.createServer(function (req,res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By",' 3.2.1')
  if(req.method=="OPTIONS") return res.end();/*让options请求快速返回*/


  let {pathname,query} = url.parse(req.url,true); // true把query转化成对象

  //下拉加载
  if(pathname === '/page'){
    let offset = parseInt(query.offset) || 0; //拿到当前前端传递的值
    read(function (books) {
      // 每次偏移量 在偏移的基础上增加五条
      let result = books.reverse().slice(offset,offset+pageSize); //数据倒序
      let hasMore = true; //默认有更多
      if(books.length<=offset+pageSize){ // 已经显示的数目 大于了总共条数
        hasMore = false;
        //如果还有不到5张图片呢？
      }
      res.setHeader('Content-Type','application/json;charset=utf8');
      setTimeout(function () {
        res.end(JSON.stringify({hasMore,books:result}));

      },30)
    });
    return;
  }

  if(pathname==="/sliders"){
    res.setHeader("Content-Type","application/json;charset=utf8");
    return res.end(JSON.stringify(sliders))
  }

  if(pathname === '/hots'){
    //读取数据库中的文件，执行回调函数实际上就是将读取的数据传入回调函数
    read(function (books) {
      //将数据倒叙，并且复制前7个
      let hot = books.reverse().slice(0,6);
      res.setHeader('Content-Type','application/json;charset=utf8');
      //将数据转换成对象格式
      //因为对象格式才可以操作
      res.end(JSON.stringify(hot));
    });
    return
  }

  //图书的增删改查
  if(pathname === '/book'){ // 对书的增删改查
    let id = parseInt(query.id); //取出的字符串
    //RESEFUL格式   增删改查
    switch (req.method){  // ?id=1
      case 'GET':
        if(!isNaN(id)){ // 如果有id 就查询一本书
          read(function (books) {
           book =  books.find((item)=>(item.bookId===id));
            if(!book) book={};//如果没有找到则是undefined
            res.setHeader('Content-Type','application/json;charset=utf8');
            res.end(JSON.stringify(book))
          })
        }else{ // 获取所有图书
          read(function (books) {
            res.setHeader('Content-Type','application/json;charset=utf8');
            res.end(JSON.stringify(books.reverse()));
          })
        }
        break;


      case 'POST':
        let str = '';
        req.on('data',chunk=>{
          str+=chunk
        });
        req.on('end', () => {
          let book = JSON.parse(str);
          read(function (books) { // 添加id
            book.bookId = books.length?books[books.length-1].bookId+1:1;
            books.push(book); //将数据放到books中 ，books在内存中
            write(books,function () {
              res.end(JSON.stringify(book));
            });
          });
        });
        break;


      case 'PUT':
        if(id){// 获取了当前要修改的id
          let str = '';
          req.on('data',chunk=>{
            str+=chunk;
          });
          req.on('end',()=>{
            let book = JSON.parse(str);//book要改成什么样子
            read(function (books) {
              books = books.map(item=>{
                if(item.bookId === id){ // 找到id相同的那一本书
                  return book
                }
                return item; // 其他书正常返回即可
              });
              write(books,function () { // 将数据写回json中
                res.end(JSON.stringify(book));
              })
            });
          })
        }
        break;

      case 'DELETE':
        //每一个请求方式都是与axios的请求方式是相对应的
        read(function (books) {
          books = books.filter((item)=>(item.bookId!==id));//此时读取完成之后放在内存中
          // 这个id实际上是从路径上的路径参数
          //将数据放入数据库中
          write(books,function () {
            res.end(JSON.stringify({}))//删除之后返回空对象
            //在此时写res.end()貌似也不影响
          })
        });
        break
    }
    return
  }

  // //登录接口
  // if(pathname==='')



}).listen(3000,function () {
  console.log(3000);
});
