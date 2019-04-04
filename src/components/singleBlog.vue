<!-- Componente de la estructura de cada post individual  -->

<template>
    <div id="single-blog">
        <h1>{{ blog.title }}</h1>
        <article>{{ blog.content }}</article>
        <p>Author: {{ blog.author }}</p>
        <p>Categories:</p>
        <ul>
            <li v-for="category in blog.categories" :key="category.id">{{ category }}</li>
        </ul>
    </div>
</template>

<script>
// Imports
import searchMixin from '../mixins/searchMixin';

export default {
    data() {
        return {
            id:this.$route.params.id , // Acceder al route parameter, se puede ya que está instalado el "Vue-route"  || Se accede a la propiedad llamada "params" y luego al nombre de ese parámetro, esto tomará el "route parameter" de la URL y la guardará acá, entonces cada vez que se haga el request, sabrá que recurso tomar
            blog:{}
        }
    },
    created(){ 
        this.$http.get('https://vue-js-blog-project-31a52.firebaseio.com/posts/' + this.id + '.json').then(function(data){  // Cuando la acción de tomar la data se haya realizado/finalizado, se ejecutará la function contenida en el promise que devolverá una data, en este caso la contenida dentro del objeto "blog"
            return data.json();  // Retorna un "Promise"
        }).then(function(data){  // Activa otro callback function dentro de la cual obtenemos la data que nos aporta el Get request
            this.blog = data;  // Llena el objeto "blog" con lo que obtiene del GET Request
        });  
    }
}
</script>

<style >
    #single-blog{
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border: 1px dotted #aaa;
}
</style>