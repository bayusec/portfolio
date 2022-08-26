<template>
    <Transition name="custom-classes-transition"
                enter-active-class="bounce-enter-active">
      <div>
        <div v-if="show" ref="gitsJs2" id="gitsJs2" class="gits" :class="gitsTexto">{{ texto.join('') }}</div>
        <div ref="gitsJs" id="gitsJs" class="gits" :class="gitsTransicion">{{ texto.join('') }}</div>
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