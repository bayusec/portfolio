<template>
  <div class="mx-auto w-2/3 h-4/5 mt-[10%]">
    <div class="flex flex-col ">

      <div class="flex flex-col bg-black/20 my-10 text-white  rounded-lg pb-10">

        <div class="self-end">
          <a title="Explicación" href="https://es.wikipedia.org/wiki/Cifrado_de_Trithemius" target="_blank">
            <img alt="Explicación" class="m-3 mx-3 rounded-lg bg-white/20 p-1" width="25" height="25" src="@/assets/question.png"/>
          </a>
        </div>

        <div class="self-center mt-1">
          Email cifrado: {{ codificado }}
          <GitsAnimation2 class="pt-10 text-2xl" v-if="status">
            Email descifrado: {{ email }}
          </GitsAnimation2>
        </div>
      </div>

      <button class="border-2 text-4xl rounded-lg text-white" @click="showEmail">Descifrar</button>
    </div>

  </div>
</template>

<script>
import GitsAnimation2 from "@/components/GitsAnimation2";

export default {
  name: "ContactView",
  components: {GitsAnimation2},
  data() {
    return {
      status: false,
      email: '',
      codificado: 'ECCQCZ@MTIRV.NAZ'
    }
  },
  methods: {
    showEmail() {
      this.email = this.decodeEmail("ECCQCZ@MTIRV.NAZ")
      this.status = true
    },
    decodeEmail(data) {
      //Crear arreglo con todas las letras del abecedario
      const contenedor = Array(26).fill(0)
      const alphabet = contenedor.map((e, i) => {
        return String.fromCharCode(i + 65);
      })

      const encodedText = data.split('');
      let num = 0
      let aux = 0
      const sizeAbc = alphabet.length

      const decoded = encodedText.map((letra, index) => {
        if (letra.trim().length == 0) {
          aux += 1
          return ' '
        }
        let key = alphabet.findIndex(el => el == letra)
        if (key == -1) {
          aux += 1
          return letra
        }

        num = key - index + aux
        if (num < 0) num = sizeAbc - (num * -1);
        if (num > sizeAbc) num = num - sizeAbc;
        if (alphabet[num]) return alphabet[num]

      })
      return decoded.join('').toLowerCase()
    }

  }
}
</script>

<style scoped>

</style>