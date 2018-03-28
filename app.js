var app = new Vue({
    el: '#app',
    data: {
      articulo:'',
      listaCompras: [{ articulo: 'Tomate'},
                     { articulo: 'Lechuga'},
                     { articulo: 'Cebolla'}],
    },
    methods:{
      anadirArticulo: function(nombre){
        if(nombre.trim()){
          this.listaCompras.push({articulo:nombre});
          this.articulo = '';
        } else {
          alert("Agrega lo que necesitas en la lista");
        }  
      },
      borrarArticulo: function(articulo, index){
        if(confirm('Eliminar "' + articulo.articulo + '" de la lista de compras?'))
          this.listaCompras.splice(index, 1);
      }
    } 
  });