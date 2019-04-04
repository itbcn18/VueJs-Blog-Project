<!-- Componente de la Barra de Navegación  -->

<template>
    <nav>
        <ul>
            <li><router-link to="/" exact>Blog</router-link></li>  <!--  Router-link: lo provee Vue-router y es más recomendable que un simple "href" (anchor tag) ya que intercepta el "click-event" y de esa manera no recarga de nuevo las páginas. || to: "el path al que se quiera ir".
            Property "exact" hace que el link se redireccione a la Url es exacta a la especificada acá en el router-link -->
            <li><router-link to="/add" exact>Add New Blog</router-link></li>
        </ul>
    </nav>
</template>


<script>
export default {
    
}
</script>


<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: #eee;  /* lightgrey  */
    color: #444;  /* darkgrey  */
}
</style>
