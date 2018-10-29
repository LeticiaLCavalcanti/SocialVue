<template>
  <login-template>
    <span slot="menuesquerdo">
      <img src="https://www.twccomunicacao.com.br/restrito/img/blog/29f464ef386c0c4c08f5e7fc5103d29e.png" class="responsive-img">
    </span>
    <span slot="principal">
        <h2>Cadastro</h2>
          <input type="text" placeholder="Nome" value="" />
          <input type="text" placeholder="Email" value="" />
          <input type="password" placeholder="Senha" value="" />
          <input type="password" placeholder="Confirme sua senha" value="" />
          <button class="btn #2196f3 blue">Enviar</button>
          <router-link class="btn #e91e63 pink" to="/login">Já possuo conta</router-link>
    </span>
  </login-template>
</template>

<script>

  import LoginTemplate from '@/templates/LoginTemplate'


  export default {
    name: 'Cadastro',
    data () {
      return{

      }
    },
    components:{
      LoginTemplate
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
