<template>
  <div>
    <Transition>
      <canvas v-if="showMatrix" ref="animeMatrix" class="animeMatrix loading-view"/>
    </Transition>
  </div>
</template>

<script>
import {useMatrixStore} from "@/store/MatrixAnimation";
export default {
  setup(){
    const useStore = useMatrixStore()
    return {useStore}
  },
  name: "MatrixAnimation",
  data(){
    return{
      showMatrix:true,
      intervalStart:'',
      intervalEnd:'',
    }
  },
  mounted() {
    if(this.showMatrix) {
      const matrix = this.$refs.animeMatrix
      const width = matrix.width = innerWidth
      const height = matrix.height = innerHeight
      var ctx = matrix.getContext("2d")
      const totalColumns = Math.floor(width / 20) + 1;
      const rows = Array(totalColumns).fill(0)
      const rowsEnd = Array(totalColumns).fill(innerWidth)

      this.intervalStart=setInterval(this.horizontalMatrixStart, 10, ctx, height, width, rows)
      this.intervalEnd=setInterval(this.horizontalMatrixEnd, 10, ctx, height, width, rowsEnd)
      const animation = () => {
        setTimeout(() => {
          this.stopAnimation()
        }, 700);
      };
      setTimeout(animation, 500);
    }
  },
  methods: {
    horizontalMatrixStart(ctx, height, width, rows) {
      ctx.fillStyle = "#0001";
      ctx.fillRect(0, 0, width, height)
      ctx.fillStyle = "#0f0"
      ctx.font = "15pt monospace"

      rows.forEach((x, index) => {
        const text = String.fromCharCode(Math.random() * 128);
        const y = index * 20;
        ctx.fillText(text, x, y)
        if (x > 100 + Math.random() * 100000) rows[index] = 0
        else rows[index] = x + 20
      })
    },
    horizontalMatrixEnd(ctx, height, width, rows) {
      ctx.fillStyle = "#0001";
      ctx.fillRect(0, 0, width, height)
      ctx.fillStyle = "#0f0"
      ctx.font = "15pt monospace"
      rows.forEach((x, index) => {
        const text = String.fromCharCode(Math.random() * 128);
        const y = index * 20;
        ctx.fillText(text, x, y)
        if (x < 100 + Math.random() * 100) rows[index] = innerWidth
        else rows[index] = x - 20
      })
    },
    stopAnimation(){
      this.showMatrix = false
      clearInterval(this.intervalStart)
      clearInterval(this.intervalEnd)
      this.useStore.showAnimation = false
      this.useStore.animationEnded=true
    }
  },
}
</script>

<style scoped>
.animeMatrix {
  background: #000;
  position: fixed;
  width: 100vw;
  height: 100vh;
  margin: 0;
  top: 0;
  left: 0;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>