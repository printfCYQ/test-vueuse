<script setup>
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'

const target = ref(null)

onClickOutside(target, event => console.log(event))
</script>

<template>
    <div class="w-full h-full bg-red-200 flex items-center justify-center">
        <div class="w-50 h-50 bg-green-400 flex items-center justify-center text-coolgray font-700 text-xl" ref="target">
            Click outside me
        </div>
    </div>
</template>