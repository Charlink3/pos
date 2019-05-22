// new Vue({
// 	el: '#crud',
// 	created: function(){
// 		this.getKeeps();
// 	},
// 	data: {
// 		keeps: []
// 	},
// 	methods: {
// 		getKeeps: function() {
// 			var urlKeeps = 'tasks';
// 			axios.get(urlKeeps).then(response => {
// 				this.keeps = response.data
// 			});
// 		},
// 		deleteKeep: function(keep){
// 			var urlKeeps = 'tasks/' + keep.id;
// 			axios.delete(urlKeeps).then( res => {
// 				this.getKeeps(); //
// 				toastr.success('Eliminado Correctamente');
// 			});
// 		}
// 	}
// });


// new Vue({
//   el: '#listaclientes',
//   created: function(){
//     this.getClientes();
//   },
//   data: {
//     clientes: [],
//   },
//   methods: {
//     getClientes: function(){
//       var urlClientes = 'clientes';
//       axios.get(urlClientes).then(response =>{
//         this.clientes = response.data
//       });
//     }
//   }
// });


var url = 'http://localhost:8000/';
var urlClientes = url + 'clientes';
var urlProductos = url + 'productos';
new Vue({
  el: '#create_factura',
  created: function(){
    this.getClientes();
  },
  data: {
    clientes: [],
    cli: [{nit: ''}],
    cnit: '',
    cnom: '',
    cdir: '',
    productos: []
  },
  methods:
  {
    getClientes(){
      axios.get(urlClientes).then(response => {
        this.clientes = response.data
      });
    },
    verCliente(index){
      this.cnit = this.clientes[index].nit;
      this.cnom = this.clientes[index].nombre;
      this.cdir = this.clientes[index].direccion;
    },
    getProductos(){
      axios.get(urlProductos).then(response => {
        this.productos = response.data
      })
    }
  }
});

class Post {
  constructor(title, link, author, img) {
    this.title = title;
    this.link = link;
    this.author = author;
    this.img = img;
  }
}

const app = new Vue ({
  el: '#app',
  data: {
    search: '',
    postList : [
      new Post(
        'Vue.js',
        'https://vuejs.org/',
        'Chris',
        'https://vuejs.org//images/logo.png'
      ),
      new Post(
        'React.js',
        'https://facebook.github.io/react/',
        'Tim',
        'https://daynin.github.io/clojurescript-presentation/img/react-logo.png'
      ),
      new Post(
        'Angular.js',
        'https://angularjs.org/',
        'Sam',
        'https://angularjs.org/img/ng-logo.png'
      ),
      new Post(
        'Ember.js',
        'http://emberjs.com/',
        'Rachel',
        'http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200'
      ),
      new Post(
        'Meteor.js',
        'https://www.meteor.com/',
        'Chris',
        'http://hacktivist.in/introduction-to-nodejs-mongodb-meteor/img/meteor.png'
      ),
      new Post(
        'Aurelia',
        'http://aurelia.io/',
        'Tim',
        'https://cdn.auth0.com/blog/aurelia-logo.png'
      ),
      new Post(
        'Node.js',
        'https://nodejs.org/en/',
        'A. A. Ron',
        'https://code-maven.com/img/node.png'
      ),
      new Post(
        'Pusher',
        'https://pusher.com/',
        'Alex',
        'https://avatars1.githubusercontent.com/u/739550?v=3&s=400'
      ),
      new Post(
        'Feathers.js',
        'http://feathersjs.com/',
        'Chuck',
        'https://cdn.worldvectorlogo.com/logos/feathersjs.svg'
      ),
]
  },
  computed: {
    filteredList() {
      return this.postList.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
})
