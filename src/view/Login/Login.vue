<template>
<div id="background">
    <div id="logo">Mysystem</div>
    <div id="login">
        <el-card class="box-card">
        <div id="form">
            <el-input v-model="username" placeholder="请输入内容"></el-input>
            <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
            <el-button type="primary" @click="login">login</el-button>
        </div>
        </el-card>
    </div>
    <div id="clock">
        <div id="time">{{time}}</div>
        <div id="date">{{date}}</div>
    </div>
    <div id="copyright">Copyright © 2022 bilibili. All Rights Reserved.</div>
</div>
</template>

<script>
import axios from 'axios'

  export default {
    name:'Login',
    data(){
        return{
            username:'',
            password:'',
            time:'',
            date:'',
            name:'',
            key:'',
        }
    },
    created(){
        axios.get('./../static/post.json').then(res=>{
            // console.log(res.data)
            this.name=res.data.username;
            this.key=res.data.password;
        },err=>{
          console.log(err)
        })
    },
    mounted(){
        this.$nextTick(()=>{
            setInterval(this.update_clock,1000)
        })       
    },
    methods:{
        update_clock(e){
            let d=new Date();
            let year=d.getFullYear();
            if(year<10){
                year="0"+year
            }
            let month=d.getMonth()+1;
            if(month<10){
                month="0"+month
            }
            let day=d.getDate();
            if(year<10){
                day="0"+day
            }
            let hour=d.getHours();
            if(hour<10){
                hour="0"+hour
            }
            let minute=d.getMinutes();
            if(minute<10){
                minute="0"+minute
            }
            this.time=hour+':' + minute;
            this.date=year+'/'+month +'/'+day;
        },
        login(){
            if(this.username==this.name && this.password==this.key){
                this.$router.push('/home')
            }else{
                alert('登录失败')
            }

        }
    }
  }
</script>
<style lang='' scoped>
#background{ 
    background-color:darkseagreen;
    position:fixed;
    height:100%;
    width:100%;
    top:0;
    left:0;
    text-align:center;
    background-image: linear-gradient(90deg, cyan,purple);/*背景颜色渐变*/
    background-size:400%;
    animation: myfirst 10s infinite;
}
@keyframes myfirst{ 
    0%   {background-position: 0% 50%;}
    50%  {background-position: 100% 50%;}
    100% {background-position: 0% 50%;}
}
#logo{ 
    color:aliceblue;
    font-size:25px;
    font-weight:800;
    text-transform:uppercase;
    position:absolute;
    left:15%;
    top:15%;
}
#login{ 
    position:absolute;
    top:30%;
    left:40%;
}
.el-card{ 
    width:450px;
    height:250px;
    background-color:rgb(255,255,255,.2);
    border-radius:15px;
}
#form{ 
    line-height:75px;
    padding-left:20px;
    padding-right:20px;

}
#clock{ 
    color:aliceblue;
    position:absolute;
    top:70%;
    left:15%;
    text-align:left;
}
#time{ 
    font-size:100px;
}
#date{ 
    font-size:35px;
}
#copyright{
    position:absolute;
    bottom:5%;
    left:40%;
    color:aliceblue;
    font-size:20px;
}
</style>