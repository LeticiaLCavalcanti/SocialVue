<template>
  <login-template>


    <span slot="menuesquerdo">
      <img src="https://www.twccomunicacao.com.br/restrito/img/blog/29f464ef386c0c4c08f5e7fc5103d29e.png" class="responsive-img">
    </span>


    <span slot="principal">
       <h2>Login</h2>

    <input type="text" placeholder="Email" value="" />
    <input type="text" placeholder="Senha" value="" />
    <button type="button" class="btn">Entrar</button>

    </span>





  </login-template>
</template>

<script>
  import CardConteudoVue from '@/components/social/CardConteudoVue'
  import CardDetalheVue from '@/components/social/CardDetalheVue'
  import PublicarConteudoVue from '@/components/social/PublicarConteudoVue'
  import LoginTemplate from '@/templates/LoginTemplate'


  export default {
    name: 'Login',
    data () {
      return{

      }
    },
    components:{
      CardConteudoVue,
      CardDetalheVue,
      PublicarConteudoVue,
      LoginTemplate
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
