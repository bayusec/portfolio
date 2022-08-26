<template>
  <div class="mt-10 flex flex-col mx-auto gap-5 place-content-center">
    <div class="text-left mx-[20%] text-2xl text-white">
      Experiencia:
    </div>
    <div class="border-2 border-transparent rounded-lg bg-black/20 mx-[20%] ">
      <pre class="text-left py-4 text-white text-xl whitespace-pre-wrap mx-4">
➤Cargo: Programador Web.
➤Tiempo: 3 años.
➤Tipo: Fijo.
➤Detalles:

📌Desarrollo de modulos para un sistema custom en PHP, el cual se encargaba de extender las funcionalidades que el sistema ERP de la empresa no poseia.

📌Desarrollo de scripts en python para hacer web scraping y obtener información de los productos de la competencia.

📌Desarrollo de un programa para traspasar ventas de un e-commerce hacia un sistema ERP.
</pre>
    </div>

    <div class="text-left mx-[20%] text-2xl text-white">
      Proyectos:
    </div>
    <div v-for="(project,index) of projectsData" :key="index" class="flex flex-col">

      <div class="border-2 py-10 hover:bg-gitsAzul-100/50 duration-300 rounded-xl mx-[20%] text-white cursor-pointer"
           :ref="`${project.alias}_div`"
           @click="showDescription(project.alias)">
        <div :ref="project.alias"
             class="text-center text-lg font-bold">
          {{ project.name }}
        </div>
      </div>


      <div class="text-left hidden descriptions border-x-2 border-b-2 duration-300 rounded-b-xl text-white mx-[20%] p-5
                  bg-gradient-to-t from-gitsAzul-100/10 to-transparent"
           :ref="`${project.alias}_description`" :id="`${project.alias}`">

        <pre class="font-sans whitespace-pre-wrap">{{ project.description }}</pre>

        <div class="mt-4 space-y-5 ">
          <p v-if="project.urls['live']!=''"><a :href="project.urls['live']" target="_blank">
            <img class="inline-block mx-3 rounded-lg" width="25" height="25" src="@/assets/url.png"/>
            {{ project.urls['live'] }}</a></p>
          <p v-if="project.urls['github']!=''"><a :href="project.urls['github']" target="_blank">
            <img class="inline-block mx-3 bg-white rounded-lg" width="25" height="25" src="@/assets/github-mark.png"/>
            {{ project.urls['github'] }}</a></p>
        </div>

        <div v-if="project.tags">
          <span v-for="tag of project.tags"
                class="inline-block rounded-lg mt-5 mx-4 p-2 uppercase hover:bg-black/20">#{{tag}}</span>
        </div>

      </div>

    </div>

  </div>
</template>


<script setup>
import projects from "@/assets/projects.json";

const projectsData = projects
</script>

<script>
export default {
  name: "WorkView",
  methods: {
    showDescription(projectAlias) {
      this.clearDescriptions(projectAlias)
      this.$refs[`${projectAlias}_description`][0].classList.toggle('hidden')
    },
    clearDescriptions(projectAlias) {
      document.querySelectorAll('.descriptions').forEach((e) => {
        if (e.id != projectAlias) e.classList.add('hidden')
      })
    }
  }

}
</script>

<style scoped>

</style>