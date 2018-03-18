import axios from 'axios';
//设置默认的基本路径
axios.defaults.baseURL = "http://localhost:3000";
//统一设置，通过路径获取的数据只返回data数据
axios.interceptors.response.use((res)=>{
  return res.data; // 在这里统一拦截结果 把结果处理成res.data
});
//开始添加接口
//1、获取轮播图数据
export let getSliders = () => {
  //获取这个路径上的数据，包装在getSliders函数中，这个函数在hom组件中调用
  return axios.get('/sliders')
};

//2、获取热门图书
export let getHotBooks = () => {
  //通过这个路径获取热门图书
  return axios.get('/hots')
};

//3、获取所有图书
export let getBooks=()=>{
  return axios.get('/book')
};
//4、删除图书 实际上是写一个删除路径
//将这个路径引入list中传入一个id，然后在后台对应的请求方式delete中将对应id的数据进行过滤删除
export let removeBook=(id)=>{
  //这个id是从图书列表传过来的
  return axios.delete(`/book?id=${id}`)
};

//5、获取某一本书
export let findOneBook = (id)=>{
  return axios.get(`/book?id=${id}`)
};

// 6、修改图书
/**
 * @param id 编号
 * @param data 数据 请求体发送
 * @returns {AxiosPromise<T>}
 */
export let updateBook = (id,data) =>{
  return axios.put(`/book?id=${id}`,data);
};
//7、添加图书
export let addBook = (data)=>{
  return axios.post('/book',data);
};

//8、获取首页的全部
export let getAll = ()=>{
  return axios.all([getSliders(),getHotBooks()])
};

//9、分页(根据偏移量返回对应的数据)
export let pagination = (offset)=>{
  return axios.get(`/page?offset=${offset}`)
}
