<template>
    <Transition name="custom-classes-transition"
                enter-active-class="bounce-enter-active">
      <div>
        <div v-if="show" ref="gitsJs2" id="gitsJs2" class="gits" :class="gitsTexto">{{ texto.join('') }}</div>
        <div ref="gitsJs" id="gitsJs" class="gits" :class="gitsTransicion">{{ texto.join('') }}</div>
<!--        <p v-if="show" ref="gitsJs2" id="gitsJs2" class="gits gitsTexto gitsTransicion">{{ texto.join('') }}</p>-->
<!--        <p ref="gitsJs" id="gitsJs" class="gits gitsTexto gitsTransicion" >{{ texto.join('') }}</p>-->
      </div>
    </Transition>
</template>

<script>

export default {
  name: "GitsAnimation",
  props: ['description','classExtra'],
  data() {
    return {
      texto: '',
      intervalStart: '',
      show: false,
      gitsTexto: this.classExtra!=undefined?(this.classExtra.texto==undefined ? '': this.classExtra.texto):'',
      gitsTransicion: this.classExtra!=undefined?(this.classExtra.transicion==undefined ? '': this.classExtra.transicion):'',
    }
  },
  created() {
    this.texto = this.description.split('')
  },
  mounted() {
    this.intervalStart = setInterval(this.randomText, 70)
    const animation = () => {
      this.stopAnimation()
    };
    setTimeout(animation, 700);
  },
  methods: {
    randomText() {
      this.texto = this.texto.map((e) => {
        const randomChar = String.fromCharCode(Math.floor(Math.random() * (57 - 48 + 1)) + 48);
        if (e.trim().length > 0) return randomChar
        else return e
      })
    },
    stopAnimation() {
      clearInterval(this.intervalStart)
      this.$refs.gitsJs.style.display = 'none'
      this.show = true
      this.texto = this.description.split('')
    }
  }
}
</script>

<!--<style scoped>-->
<!--/*.gits {*/-->
<!--/*  background: #000;*/-->
<!--/*  !*width: 50vw;*!*/-->
<!--/*  !*max-width: 50vw;*!*/-->
<!--/*  !*height: 50vh;*!*/-->
<!--/*  color: #0f0;*/-->
<!--/*  margin: auto;*/-->
<!--/*}*/-->

<!--/*.gits2 {*/-->
<!--/*  background: #000;*/-->
<!--/*  !*width: 100vw;*!*/-->
<!--/*  !*max-width: 90vw;*!*/-->
<!--/*  !*height: 50vh;*!*/-->
<!--/*  color: #0f0;*/-->
<!--/*  margin: auto;*/-->
<!--/*}*/-->

<!--.bounce-enter-active {-->
<!--  animation: bounceGits .5s;-->
<!--  color:#0f0-->
<!--}-->

<!--.bounce-leave-active {-->
<!--  animation: bounceGits .5s reverse;-->
<!--  color:#0f0-->
<!--}-->

<!--@keyframes bounceGits {-->
<!--  from,-->
<!--  60%,-->
<!--  75%,-->
<!--  90%,-->
<!--  to {-->
<!--    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);-->
<!--    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);-->
<!--  }-->

<!--  0% {-->
<!--    opacity: 0;-->
<!--    -webkit-transform: translate3d(-150px, 0, 0) scaleX(1);-->
<!--    transform: translate3d(-150px, 0, 0) scaleX(1);-->
<!--  }-->

<!--  60% {-->
<!--    opacity: 1;-->
<!--    -webkit-transform: translate3d(15px, 0, 0) scaleX(1);-->
<!--    transform: translate3d(15px, 0, 0) scaleX(1);-->
<!--  }-->

<!--  75% {-->
<!--    -webkit-transform: translate3d(-10px, 0, 0) scaleX(0.98);-->
<!--    transform: translate3d(-10px, 0, 0) scaleX(0.98);-->
<!--  }-->

<!--  90% {-->
<!--    -webkit-transform: translate3d(5px, 0, 0) scaleX(0.995);-->
<!--    transform: translate3d(5px, 0, 0) scaleX(0.995);-->
<!--  }-->

<!--  to {-->
<!--    -webkit-transform: translate3d(0, 0, 0);-->
<!--    transform: translate3d(0, 0, 0);-->
<!--  }-->
<!--}-->
<!--</style>-->