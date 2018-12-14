<template>
  <site-template>
    <span slot="menuesquerdo">
      <img src="https://www.twccomunicacao.com.br/restrito/img/blog/29f464ef386c0c4c08f5e7fc5103d29e.png" class="responsive-img">
    </span>
    <span slot="principal">
        <h2>Perfil</h2>
          <input type="text" placeholder="Nome" v-model="name" >
          <input type="text" placeholder="Email" v-model="email">
          <input type="password" placeholder="Senha" v-model="password">
          <input type="password" placeholder="Confirme sua senha" v-model="password_confirmation">
          <div class="file-field input-field">
            <div class="btn #e91e63 pink">
              <span>Imagem</span>
              <input type="file" v-on:change="salvaImagem">
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text">
            </div>
          </div>
          <button class="btn #2196f3 blue" v-on:click="perfil()">Atualizar</button>
    </span>
  </site-template>
</template>

<script>

  import SiteTemplate from '@/templates/SiteTemplate'
  import axios from 'axios';


  export default {
    name: 'Perfil',
    data () {
      return{
          usuario:false,
          name:'',
          email:'',
          password:'',
          password_confirmation:'',
          imagem:''
      }
    },
      created(){
          let usuarioAux = sessionStorage.getItem('usuario');
          if(usuarioAux){
              this.usuario = JSON.parse(usuarioAux);
              this.name = this.usuario.name;
              this.email = this.usuario.email;
          }
      },
    components:{
      SiteTemplate
    },
      methods:{
        salvaImagem(e){
          let arquivo = e.target.files || e.dataTransfer.files;
          if(!arquivo.length){
              return;
          }
          let reader = new FileReader();
          reader.onloadend = (e) => {
              this.imagem = e.target.result;
          };
          reader.readAsDataURL(arquivo[0]);
          console.log(this.imagem);
        },
        perfil(){
            axios.put('http://127.0.0.1:8000/api/perfil', {
                name:this.name,
                email:this.email,
                imagem:this.imagem,
                password:this.password,
                password_confirmation:this.password_confirmation
            },{"headers":{"authorization":"Bearer "+this.usuario.token}})
              .then(response => {
                  console.log(response.data);
              /*    if(response.data.token){
                    console.log(response.data);
                  }else{
                    console.log('erros de validação')
                    let erros = '';
                    for (let erro of Object.values(responde.data)) {
                        erros += erro + " ";
                    }
                    alert(erros);
                }*/
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
