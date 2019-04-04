<!-- Componente en donde se muestra la lista de los blogs que han sido agregados  -->

<template>
    <div id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="Search blogs" />
        <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
            <router-link v-bind:to="'/blog/' + blog.id"><h2>{{ blog.title | to-uppercase }}</h2></router-link>  <!-- Enlazar cada single blog para que abra aparte. se utiliza "data binding" ya que se quiere ejecutar dinámicamente el Id que está guardado en el "blog" -->
            <article>{{ blog.content | snippet }}</article>
        </div>
    </div>
</template>

<script>
// Imports
import searchMixin from '../mixins/searchMixin';

export default {
    data () {
        return {
            blogs: [],
            search: ''
        }
    },
    created() {
        this.$http.get('https://vue-js-blog-project-31a52.firebaseio.com/posts.json').then(function(data){  // URL de la Firebase creada para el proyecto 
           return data.json();  
        }).then(function(data){   // .then= method || Acceso al promise que ejecutará una function cuando el "callback" (get request) se haya completado y pasará la data actualizada que se quiere
            var blogsArray = [];  // Array temporal para almacenar los nuevos blos con un "id"
            for (let key in data){  // Recorrerá el objeto que contiene las "key" (identificador propio para cada objeto) y nos da acceso a ellas que están contenidas en un objeto global 
                data[key].id=key// Acceso a cada objeto individual y tratar de empujar cada object al array temporal
                blogsArray.push(data[key]);  // Empujarlos al array temporal de objetos individuales ahora con una referencia de "id" a tener en el path
               }
               this.blogs=blogsArray;  // Rellenar el objeto "blogs" con la info del array temporal
               //console.log(this.blogs);
        })   
    },
    mixins: [searchMixin]
}
</script>

<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
    border: 1px dotted #aaa;
}
#show-blogs a{
    color: #444;
    text-decoration: none;
}
input[type="text"]{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
}
</style>
