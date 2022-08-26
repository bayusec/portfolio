<template>
  <div class="container mx-auto mt-20 rounded-xl shadow-lg p-10 border-2 bg-black/40 border-gray-900 shadow-gray-900">
    <div class="flex flex-col lg:flex-row gap-5  lg:justify-between">
      <img width="500" height="600" class="self-center rounded lg:basis-2/4 shadow-lg shadow-gray-900" :src="urlImg" alt="Exor">
      <div class="px-6 lg:basis-2/4">

          <GitsAnimation2 class="text-white font-bold">
              <slot/>
          </GitsAnimation2>
      </div>
    </div>
  </div>
</template>

<script>
import GitsAnimation2 from "@/components/GitsAnimation2";

export default {
  name: "CardArticleHorizontal",
  props: ['urlImg'],
  components: {GitsAnimation2},
}
</script>