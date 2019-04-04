import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes' //  Importar el array de routes ya que ha sido externalizado en otro file 

// Use vue packages
Vue.use(VueResource);
Vue.use(VueRouter);

// Filters
// Colocar en mayúsculas todos los títulos de cada Post
Vue.filter('to-uppercase', function(value){
  return value.toUpperCase();
})

// Mostrar una parte del post a modo de presentación
Vue.filter('snippet', function(value){
  return value.slice(0,100) + '...';
});

// Creación de una nueva instancia para registrar el "Router" dentro del cual será pasado como objeto el router cuyos routes están externalizados en otro file: "routes.js"
const router = new VueRouter({  // Este router debe de ser guardado luego en el "Vue instance", para ser utilizado
  routes: Routes,
  mode:'history'  // Definiendo el modo en la instancia, eliminamos el # que aparece por defecto en el path cada vez que se quiere ir a una página
});

//  Vue Instance
new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})