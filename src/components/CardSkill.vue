<template>
  <div class="p-2 rounded-lg transition ease-in-out bg-gradient-to-b from-gitsVerde-200 to-transparent
  hover:bg-gradient-to-t border-gitsVerde-200 hover:border-2 hover:border-gitsVerde-200 duration-300 hover:scale-110  ">
    <img width="220" height="200" :src="skillImg" />
  </div>
</template>

<script>
export default {
  name: "CardSkill",
  props:['skillImg']
}
</script>

<style scoped>

</style>