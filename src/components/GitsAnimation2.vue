<template>
  <Transition name="custom-classes-transition"
              enter-active-class="bounce-enter-active">
    <div>
      <div v-show="show" ref="gitsJs" id="gitsJs" class="gits">
        <slot/>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "GitsAnimation2",
  props: ['description','classExtra'],
  data() {
    return {
      textBackup:'',
      texto: '',
      intervalStart: '',
      show: false,
    }
  },
  created() {
    //
  },
  mounted() {
    this.textBackup = this.$refs.gitsJs.innerHTML
    console.log(this.textBackup)
    this.texto = this.$refs.gitsJs.textContent.split('')
    this.$refs.gitsJs.textContent=this.texto
    this.show=true
    this.intervalStart = setInterval(this.randomText, 70)
    const animation = () => {
      this.stopAnimation()
    };
    setTimeout(animation, 700);
  },
  methods: {
    randomText() {
      this.$refs.gitsJs.textContent = this.texto.map((e) => {
        const randomChar = String.fromCharCode(Math.floor(Math.random() * (57 - 48 + 1)) + 48);
        if (e.trim().length > 0) return randomChar
        else return e
      }).join('')
    },
    stopAnimation() {
      clearInterval(this.intervalStart)
      this.show = true
      this.$refs.gitsJs.innerHTML = this.textBackup
    }
  }
}
</script>

<style scoped>
.gits {
}

.gits2 {
  background: #000;
  color: #0f0;
  margin: auto;
}

.bounce-enter-active {
  animation: bounceGits .5s;
  color:#0f0
}

.bounce-leave-active {
  animation: bounceGits .5s reverse;
  color:#0f0
}

@keyframes bounceGits {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(-150px, 0, 0) scaleX(1);
    transform: translate3d(-150px, 0, 0) scaleX(1);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(15px, 0, 0) scaleX(1);
    transform: translate3d(15px, 0, 0) scaleX(1);
  }

  75% {
    -webkit-transform: translate3d(-10px, 0, 0) scaleX(0.98);
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    -webkit-transform: translate3d(5px, 0, 0) scaleX(0.995);
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
</style>