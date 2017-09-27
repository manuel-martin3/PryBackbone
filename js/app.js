var Libro = Backbone.Model.extend({
  defaults: {
        titulo: null,
        autor: null,
        noPaginas: null,
        popularidad: null,
        numerovisitas: null
  }
});


var libro1 = new Libro({
  'titulo':'Backbone',
  'autor':'Jeremy Ashkenas',
  'noPaginas': 150
});

console.log(libro1);
/*var libro = {

  titulo:'Backbone'
  autor:'Jeremy Ashkenas',
  noPaginas: 150
};

var libro1 = {

  titulo:'Underscore'
  autor:'Jeremy Ashkenas',
  noPaginas: 260
}

var LibroPlantilla = function(obj){
    this.titulo = obj.titulo;
    this.autor = obj.autor;
    this.noPaginas = obj.noPaginas;
};

var libro = new LibroPlantilla({
  titulo:'Underscore',
  autor:'Jeremy Ashkenas',
  noPaginas:260
})
*/
