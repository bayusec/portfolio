<template>
  <div class="max-w-md rounded-xl bg-white mx-auto shadow-lg overflow-hidden">
    <img class="w-100 h-56 mx-auto " :src="urlImg" alt="Exor">
    <div class="px-6 pt-10 text-left">
      <div class="text-3xl font-bold mb-5"></div>
      <span class="mt-15">
          <GitsAnimation2>
              <slot/>
          </GitsAnimation2>
          </span>
    </div>
    <div class="px-5 py-10 text-left">
      <span class="inline-block rounded-lg px-3 hover:bg-green-600">#asd</span>
      <span class="inline-block rounded-lg px-3 hover:bg-green-600">#asdas</span>
      <span class="inline-block rounded-lg px-3 hover:bg-green-600">#asdas</span>
      <span class="inline-block rounded-lg px-3 hover:bg-green-600">#asdas</span>
      <span class="inline-block rounded-lg px-3 hover:bg-green-600">#asdas</span>
    </div>
  </div>
</template>

<script>
import GitsAnimation2 from "@/components/GitsAnimation2";
export default {
  name: "CardArticle",
  props:['urlImg'],
  components: {GitsAnimation2}
}
</script>

<style scoped>

</style>