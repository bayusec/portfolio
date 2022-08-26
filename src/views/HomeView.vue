<template>
  <div class="home mt-10">

    <div v-if="matrixStore.animationEnded" class="">
      <CardArticleHorizontal :url-img="require('@/assets/computer.jpg')">
        <h2 class="text-4xl max-h-full">Who am I ?</h2>

          <pre class="text-left mt-5 whitespace-pre-wrap font-semibold font-sans">
Soy Jean P. V. , desarrollador Junior Full-Stack, cuento con 3 años de experiencia en desarrollo web.
Mi enfoque es el Backend, sin embargo en el ultimo tiempo me he metido al mundo del Front-end.
Disponible para trabajo remoto o presencial, actualmente resido en Chile pero estoy abierto a una reubicación en caso de requerirse.

Entre Mis intereses relacionados al mundo del desarrollo destaco:

➤Juegos de Wargames o retos de programación para mejorar la resolución de problemas.

➤Interés por la seguridad informática, el investigar y reportar vulnerabilidades me permite realizar un código más seguro.

➤Scraping, me permite acceder a interminables fuentes de datos.</pre>
      </CardArticleHorizontal>
    </div>
  </div>
</template>

<script>
import descripciones from '../assets/descripciones.json'
import {useMatrixStore} from "@/store/MatrixAnimation";
import GitsAnimation2 from "@/components/GitsAnimation2";
import CardArticleHorizontal from "@/components/CardArticleHorizontal";

export default {
  setup() {
    const matrixStore = useMatrixStore()
    const gitsExtraClass = {"texto": ['gitsHomeTexto', 'rounded'], "transicion": ['gitsHomeTransicion', 'rounded']}
    return {matrixStore, gitsExtraClass}
  },
  name: 'HomeView',
  components: {CardArticleHorizontal, GitsAnimation2},
  data() {
    return {
      texto: descripciones[0].descripcion,
    }
  }
}
</script>

<style scoped>
.homeContent {
  background: #1c3336;
  margin: 100px;
}
</style>