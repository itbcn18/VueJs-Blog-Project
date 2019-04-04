// File para registrar todos los Routes. ||  Importarlo al "main.js" para registrarlo en la instancia del "router"!

// Se deben de importar los "components" que se van a definir en los routes como path
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import singleBlog from './components/singleBlog.vue';

// Exportando un array de objetos de "routes" cada objeto representará un route
export default [  
    { path: '/', component: showBlogs},  // Se indica en el objeto el "path" y el componente al cual pertenece ese path, el componente a abrir
    { path: '/add', component: addBlog},
    { path: '/blog/:id', component: singleBlog}
]