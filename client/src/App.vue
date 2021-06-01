<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Code Leap App" />
    <Prime />
    
    
</template>

<script lang="ts">

import HelloWorld from './components/HelloWorld.vue';
import Prime from './components/Prime.vue';


export default ({
    name: 'App',
    components: {
        HelloWorld,
        Prime
    },
   
})
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
