import axios from 'axios'

export function request(config){
    const instance = axios.create({
        baseURL:'http://localhost:8080/element-manage/src/network',
        timeout:5000
    })

// axios的拦截器
// 请求拦截的作用
instance.interceptors.request.use(config=>{
    return config
},err=>{
    console.log(err)
})

  //响应拦截
  instance.interceptors.response.use(res=>{
    return res.data
  },err=>{
    console.log(err)
  })
//发送真正的请求
return instance(config)
}