<template>
  <login-template>
    <span slot="menuesquerdo">
      <img src="https://www.twccomunicacao.com.br/restrito/img/blog/29f464ef386c0c4c08f5e7fc5103d29e.png" class="responsive-img">
    </span>
    <span slot="principal">
        <h2>Login</h2>
          <input type="text" placeholder="Email" v-model="email" />
          <input type="password" placeholder="Senha" v-model="password" />
          <button class="btn #2196f3 blue" v-on:click="login()">Entrar</button>
        <router-link  class="btn #e91e63 pink" to="/cadastro">Cadastre-se</router-link>
    </span>
   </login-template>
</template>

<script>
import LoginTemplate from '@/templates/LoginTemplate'
import axios from 'axios';

    export default {
    name: 'Login',
    data () {
        return{
        email:'',
        password:''
        }
    },
    components:{
      LoginTemplate
    },
        methods:{
        login(){
            console.log("ok");
            axios.post('http://127.0.0.1:8000/api/login', {
                email: this.email,
                password: this.password
            })
            .then(response => {
                console.log(response);
                if(response.data.token){
                    //login com sucesso
                    console.log('login com sucesso');
                }else if(response.data.status == false){
                    //login nao existe
                    console.log('login não existe');
                    alert('Login inválido');
                }else{
                    //erros de validacao
                    console.log('erro de validação');
                    let erros = '';
                    for(let erro of Object.values(response.data)){
                        erros += erro + " ";
                    }
                    alert(erros);
                }
            })
                .catch(e => {
                    console.log(e);
                    alert("Erro! Tente novamente mais tarde!");
                })
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
