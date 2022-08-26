<template>
  <div class="container mx-auto justify-center mt-[1vh] lg:mt-[20vh]">
    <div class="flex flex-col lg:flex-row  p-5 rounded justify-center gap-5">
      <div class="flex flex-col basis-1/4 gap-5 mt-10 self-center lg:self-start ">
        <button v-for="(skill,index) of skillData" :key="skill.alias" :ref="skill.alias"
            class="w-40 p-5 border-2 rounded hover:translate-x-5 hover:scale-110 hover:bg-[#2c3e50] text-white hover:text-white duration-300 skillBtn" :class="index==0?'active':''"
                @click="showSkills(skill.alias)">{{skill.name}}
        </button>
      </div>
      <div class="max-w-2xl basis-3/4">
        <div class="grid contentSkills grid-cols-4 gap-10"
            v-for="(skill,index) of skillData" :class="index>0?'hidden':''" :key="'skill_'+skill.alias" :ref="skill.alias+'_content'">
          <CardSkill v-for="alias of skill.skills" :skillImg="alias!=undefined?require('@/assets/'+alias.toLowerCase()+'.svg'):''"></CardSkill>
        </div>
      </div>
    </div>
  </div>

  <Transition>
    <MatrixAnimation v-if="matrixStore.showAnimation"/>
  </Transition>
</template>


<script>
import MatrixAnimation from "@/components/MatrixAnimation";
import {useMatrixStore} from "../store/MatrixAnimation";
import skills from "@/assets/skills.json"
import CardSkill from "@/components/CardSkill";


export default {
  setup(){
    const matrixStore = useMatrixStore()
    return {matrixStore}
  },
  name: "SkillsView",
  components: {CardSkill, MatrixAnimation},
  data(){
    return{
      skillData:skills
    }
  },

  methods:{
    showMatrix(){
      this.matrixStore.showAnimation = true
    },
    showSkills(skill){
      this.clearSkills();
      this.clearBtns();
      if(this.$refs[skill+'_content'][0]!=undefined){
        this.$refs[skill+'_content'][0].classList.remove('hidden');
        this.$refs[skill][0].classList.add('active')
      }
    },
    clearSkills: (e)=>{ document.querySelectorAll('.contentSkills').forEach((e)=>e.classList.add('hidden'))},
    clearBtns: () => document.querySelectorAll('.skillBtn').forEach(e=> e.classList.remove('active'))
  }
}
</script>

<style scoped>
.active{
  background: #2c3e50;
  color:#fafafa;
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