import {defineStore} from "pinia";

export const useMatrixStore = defineStore('matrixStore', {
    state: () => ({
        showAnimation: false,
        animationEnded:false

    }),
})