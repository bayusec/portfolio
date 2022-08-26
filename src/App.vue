<template>
  <MatrixAnimation></MatrixAnimation>
  <div v-if="this.matrixStore.animationEnded">
    <div ref="navbar" class="grid gap-2 grid-rows-6 sm:grid-rows-1 sm:grid-cols-6 p-5">
      <div>
        <router-link to="/" class="block border-b border-b-transparent hover:border-b hover:border-b hover:border-b-gitsVerde w-fit outline-none">
          <GitsAnimation2 class="gitsTexto">
            JP
          </GitsAnimation2>
        </router-link>
      </div>

      <div class="sm:hidden grid ">
        <button @click="toogleIfMobile"
                class="w-11 border rounded border-teal-400 hover:text-white hover:border-gitsVerde-300">
          <svg class="fill-current h-10 w-10 p-2" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>

      <div ref="links" class=" row-span-3 sm:row-span-1 sm:col-span-4">
        <div class="grid gap-2 sm:grid-cols-3">
          <router-link
              class="sm:justify-self-end block sm:inline-block hover:border-b hover:border-b hover:border-b-gitsVerde w-fit outline-none"
              to="/skills">
            <GitsAnimation2 class="gitsTexto ">Skills</GitsAnimation2>
          </router-link>
          <router-link class="sm:justify-self-center block lg:inline-block hover:border-b hover:border-b hover:border-b-gitsVerde w-fit outline-none"
                       to="/projects">
            <GitsAnimation2 class="gitsTexto ">Trabajos</GitsAnimation2>
          </router-link>
          <router-link
              class="sm:justify-self-start block lg:inline-block hover:border-b hover:border-b hover:border-b-gitsVerde w-fit outline-none"
              to="/contact">
            <GitsAnimation2 class="gitsTexto ">Contacto</GitsAnimation2>
          </router-link>
        </div>
      </div>


<!--      <div ref="settings" id="btn_settings" class="justify-self-start sm:justify-self-end sm:my-auto">-->
<!--          <GitsAnimation2 class="text-md ">-->
<!--            <router-link to="/" class="border rounded text-white bg-transparent hover:bg-gitsLila hover:border-white hover:text-black p-3 hover:border-transparent">Tools</router-link>-->
<!--          </GitsAnimation2>-->
<!--      </div>-->

    </div>

    <hr class="separator"/>
  </div>


  <router-view v-if="matrixStore.animationEnded"/>
</template>

<script>
import MatrixAnimation from "@/components/MatrixAnimation";
import GitsAnimation from "@/components/GitsAnimation";
import {useMatrixStore} from "@/store/MatrixAnimation";
import GitsAnimation2 from "@/components/GitsAnimation2";

export default {
  setup() {
    const matrixStore = useMatrixStore()
    const gitsExtraClass = {"texto": ['gitsTexto', 'rounded'], "transicion": ['gitsTransicion', 'rounded']}
    return {matrixStore, gitsExtraClass}
  },
  components: {
    GitsAnimation2,
    GitsAnimation,
    MatrixAnimation
  },
  data() {
    return {
      showMobile: false,
      sizeWidth: 0
    }
  },
  mounted() {
    if(this.matrixStore.animationEnded){
      this.toogleIfMobile()
    }
  },
  computed: {},
  methods: {
    toogleIfMobile() {
      if (innerWidth < 640) {
        const links = this.$refs.links
        const navbar = this.$refs.navbar
        const btnSettings = this.$refs.settings

        links.classList.toggle('hidden')
        btnSettings.classList.toggle('hidden')
        if (links.classList.contains('hidden')) {
          navbar.classList.remove('grid-rows-6')
        }
        else {
          this.$refs.navbar.classList.add('grid-rows-6')
        }
      }
    },
    test(menu){
      const links = this.$refs.links
      document.querySelectorAll('.menuLink').forEach(e=> e.classList.remove('active'))
      if(menu=='home') this.$refs[menu].classList.add('active')

    }
  }
}
</script>
<style>
html, body {
  background: #15181f;
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  background: #12121287 !important;
}

/*nav {*/
/*  padding: 30px;*/
/*}*/



nav a.router-link-exact-active {
  color: #42b983;
}

.separator {
  border: 0.5px solid;
  background: #072d40;
  /*box-shadow: 0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3;*/
  box-shadow: -4px 0px 7px 0px rgb(121, 176, 207)

}

</style>

<style scoped>
.router-link-exact-active{
  /*background: #2c3e50;*/
  /*border-radius: 20px;*/
  /*padding: 3px;*/
  border-bottom:0.5px solid #2c3e50;
}
:deep(.gitsTexto), :deep(.gitsTransicion) {
  color: #16988e !important;
  background: transparent !important;
  font-size: 2rem;

}

:deep(.gitsTexto:hover) {
  font-size: 2rem;

}
</style>