<template>
  <span>
    <header>
      <nav-bar logo="Social" url="/" cor="#ad1457 pink darken-4">
        <slot>
           <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/login">Entrar</a></li>
          </ul>
        </slot>
      </nav-bar>
    </header>
    <main>
      <div  class="container">
        <div  class="row">
            <grid-vue tamanho="4">
              <card-menu-vue>
                <slot name="menuesquerdo" />
              </card-menu-vue>
                <card-menu-vue>
                  <h3>teste</h3>
                </card-menu-vue>
            </grid-vue>
            <grid-vue  tamanho="8">
              <slot name="principal" />
            </grid-vue>
         </div>
      </div>
    </main>

    <footer-vue cor="#ad1457 pink darken-4" logo="Social" descricao="Teste" ano="2018">
        <li><a class="grey-text text-lighten-3" href="#!">Home</a></li>
        <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
        <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
        <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
    </footer-vue>

  </span>
</template>

<script>
  import NavBar from '@/components/layouts/NavBar'
  import FooterVue from '@/components/layouts/FooterVue'
  import GridVue from '@/components/layouts/GridVue'
  import CardMenuVue from '@/components/layouts/CardMenuVue'

  export default {
    name: 'SiteTemplate',
    components:{
      NavBar,
      FooterVue,
      GridVue,
      CardMenuVue
    }
  }
</script>

<style>

</style>
