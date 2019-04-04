<template>
    <div>
      <app-header></app-header>
      <router-view></router-view>  <!--  Tag donde se cargarán los componentes cuando se visitan los distintos routes -->
    </div>
</template>

<script>
// Imports de los componentes
import showBlogs from './components/showBlogs.vue';
import header from './components/header.vue';

export default {
    components: {
        'app-header':header
    },
    data () {
        return {
        }
    },
    methods: {
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>