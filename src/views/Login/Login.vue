<template>
  <div id="login">
    <div class="header">
      登录
    </div>
    <form >
      <input class="username" type="text" v-model.trim="loginData.username" name="username" placeholder="请输入用户名"><br>
      <input class="password" type="password" v-model.trim="loginData.password" name="password" placeholder="请输入密码"><br>
      <div class="radio">
        <label>请选择您的身份：</label>
        <input type="radio"  v-model="loginData.type" name="type" value="admin" >管理员
        <input type="radio"  v-model="loginData.type" name="type" value="user">用户<br>
      </div>
      <input class="login" type="button" value="登陆" @click="doLogin">
    </form>
  </div>
</template>

<script>

  import utils from "../../utils/utils"
  export default {
    name:'login',
    data () {
      return {
        loginData:{
          username:"",
          password:"",
          type: "",
        },

      }
    },
    methods:{
      doLogin(){
        let success=(response)=>{
          alert(response.data.msg);
          /*alert(this.loginData.type);*/
          if(response.data.code === 0 && this.loginData.type === "user"){
            this.$router.push({path:'/usersuccess'})
          }
          if(response.data.code === 0 && this.loginData.type === "admin"){
            this.$router.push({path:'/adminsuccess'})
          }

        }
        utils.axiosMethod({
          method:"POST",
          url:"/user/login",
          data:this.loginData,
          callback:success
        })
      }
    }
  }
</script>

<style>
  /*最大div*/
  #login {
    width: 25%;
    height: 500px;
    background-color: #eee;
    margin: 0px auto;
    margin-top: 50px;
  }
  /*header*/
  .header {
    width: 100%;
    height: 80px;
    color: rgb(85,128,216);
    font-size: 25px;
    text-align: center;
    line-height: 80px;

  }
  /*username*/
  .username {
    width: 94%;
    height: 35px;
    margin-left: 8px;
    margin-top: 10px;
    border-radius: 5px;
  }
  /*password*/
  .password {
    width: 94%;
    height: 35px;
    margin-left: 8px;
    margin-top: 10px;
    border-radius: 5px;
  }
  /*radio*/
  .radio {
    margin-top: 10px ;
    margin-right: 5px;
    float: right;
    font-size: 13px;
  }




  /*登录按钮*/
  .login {
    width: 96%;
    height: 40px;
    background-color: rgb(85,128,216);
    margin-left: 8px;
    margin-top: 30px;
    border-radius: 15px;
    color: white;
    font-size: 20px;
  }

</style>
