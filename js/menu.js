class Producto {
  constructor(nombre, descripcion, precio) {
    this._nombre = nombre;
    this._descripcion = descripcion;
    this._precio = precio;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre){
      this._nombre=nombre;
  }

  get descripcion() {
    return this._descripcion;
  }

  set descripcion(descripcion){
      this._descripcion = descripcion;
  }

  get precio() {
      return this._precio;
  }

  set precio(precio){
      _this.precio = precio;
  }
}

const huevos=[new Producto("Huevos al gusto"," (Jamón, tocino, chorizo, salchicha, o a la mexicana) ",105.00),new Producto("Huevos con verdura"," (Ejotes, chayote, papa o calabacita) ",120.00), new   Producto("Huevos rancheros","",145.00), new Producto("Huevos motuleños","",145.00), new Producto("Machaca de res","",145.00), new Producto("Huevos divorciados","",145.00), new Producto("Omelette quesillo con jamón","",145.00), new Producto("Omelette quesillo con chorizo","",145.00)];
const especialidad=[new Producto("Huevos encamisados","",145.00),new Producto("Huevos azteca"," (Chile, cebolla, y tostadita) ",140.00),new Producto("Huevos a la Oaxaqueña","",140.00),new Producto("Huevos de la Casa"," (Estrellados con mole)",145.00),new Producto("Omelette quesillo con chapulín","",160.00),new Producto("Huevos con camarón, atún o sardina","",160.00)];
const tradicionales=[new Producto("Entomatadas"," (Tasajo, chorizo o cecina enchilada) ",145.00),new Producto("Enfrijoladas"," (Cecina enchilada, chorizo o tasajo) ",145.00),new Producto("Chilaquiles"," (Rojos o verdes con pollo deshebrado, tasajos o huevos estrelados) ",145.00),new Producto("Enmoladas"," (Rellenas de pollo) ",150.00), new Producto("Enchiladas coloradito"," (Tasajo o pollo) ",150.00), new Producto("Enchiladas suizas","",160.00), new Producto("Salsa de Chicharrón","",140.00), new Producto("Bistec ranchero","",160.00)];
const delComal=[new Producto("Memela sencilla"," (Queso o quesillo) ",30.00),new Producto("Memela con carne"," (Tasajo, chorizo o cecina enchilada) ",40.00),new Producto("Memela chapulín con quesillo","",45.00),new Producto("Empanada"," (Tasajo, chorizo, cecina enchilada o amarillo) ",85.00)];
const bebidasCalientes=[new Producto("Café de olla","",35.00),new Producto("Café con lechez","",45.00),new Producto("Cafe de prensa Francesa","",50.00),new Producto("Jarra de café de prensa Francesa"," (1 litro) ",120.00),new Producto("Chocolate de agua","",50.00),new Producto("Chocolate de leche","",50.00),new Producto("Chapurrado","",50.00),new Producto("Té","",35.00), new Producto("Pieza de pan dulce","",15.00),new Producto("Pieza de pan de yema","",18.00)];
const bebidasFrias=[new Producto("Vaso de agua"," (Jamaica, tamarindo, limón o naranja) ",40.00),new Producto("Jugo"," (Naranja, papaya o zanahoria) ",50.00),new Producto("Licuado"," (Plátano, papaya o melón) ",50.00),new Producto("Chocomio","",55.00),new Producto("Chocomio frappe","",60.00)];
const botanas=[new Producto("Ord. Quesillo","",100.00), new Producto("Ord. Chicharrón","",100.00), new Producto("Ord. Chapulín al mojo","",140.00),new Producto("Ensalada de chapulín","",140.00)];
const sopas=[new Producto("Consomé de pollo","",55.00),new Producto("Spaguetti"," (Crema o italiana) chico ",55.00), new Producto("Spaguetti"," (Creama o italiana) grande ",65.00), new Producto("Sopa de frijol","",80.00), new Producto("Sopa Azteca","",80.00), new Producto("Caldo Tlalpeño","",80.00)];
const caldos=[new Producto("Caldo de gallina","",140.00),new Producto("Caldo de camarón","",170.00),new Producto("Sopa de mariscos","",210.00)];
const extras=[new Producto("Ord. Frijol"," (Pasta o de olla) ",35.00),new Producto("Ord. Arroz","",25.00),new Producto("Ord. Guacamole","",75.00)];
const tlayudas=[new Producto("Tlayuda con carne"," (Tasajo, chorizo oaxaqueño o cecina enchilada) ",130.00)];
const conejo=[new Producto("Ord. Conejo al mojo","",180.00), new Producto("Ord. Conejo en adobo","",180.00),new Producto("Ord. Conejo al albañil","",180.00),new Producto("Ord. Conejo al ajillo","",180.00),new Producto("Ord. Conejo en Zihuamonte","",180.00), new Producto("Entero al gusto","",750.00)];
const carnes=[new Producto("Tasajo"," (Asado o encebollado) ",185.00), new Producto("Cecina enchilada","",185.00), new Producto("Pechuga especial de pollo"," (Gratinada: quesillo, chile morrón, cebolla y chapulín) ",200.00), new Producto("Pechuga a la plancha","",160.00),new Producto("Milanesa de pollo","",160.00), new Producto("Milanesa de res","",180.00), new Producto("Arrachera"," (Encebollada, a la planacha o gratinada) ",210.00), new Producto("Filete campestre","",210.00), new Producto("Filete de res en salsa de chapulín","",210.00), new Producto("Fajitas mixtas"," (Res y pollo) ",210.00), new Producto("Puntas de filete de res a la mexicana","",190.00),new Producto("Puntas de filete de res al albañil","",190.00), new Producto("Puntas de filete de res en salsa de chile morita","",190.00), new Producto("Ord. Costilla frita","",180.00), new Producto("Brocheta mar y tierra","",240.00), new Producto("Ord. Ubre","",175.00), new Producto("Ord. Tripa","",175.00)];
const mixtos=[new Producto("Ubre y tasajo","",200.00),new Producto("Tripa y tasajo","",200.00),new Producto("Ubre y tripa","",200.00),new Producto("El Oaxaqueño"," (Tasajo, cecina, enchilada y chorizo) ",210.00)];
const otros=[new Producto("Ensalada de fruta"," (Fruta de temporada) ",55.00),new Producto("Ord. Hot-Cakes"," (2 pzs.) ",80.00)];
const parrillada=[new Producto("Del asador para 2 personas"," (Tasajo, cecina enchilada, chorizo oaxaqueño y costilla frita. Acompañamiento: tlayuda, frijol, quesillo, chapulín y guacamole) ",460.00),new Producto("Del asador"," (Para 3 personas) ",630.00),new Producto("Del asador"," (Para 4 personas) ",820.00)];
const mariscos=[new Producto("Filete de pescado"," (al mojo, al chipotle, al ajillo o empanizado) ",160.00),new Producto("Mojarra frita o al mojo","",195.00), new Producto("Camarones al gusto"," (al mojo, al ajillo, empanizado o a la diabla) ",220.00), new Producto("Camarones en salsa de chapulín","",230.00), new Producto("Pulpo al gusto"," (a la mantequilla, al mojo o al ajillo) ",260.00)];
const moles=[new Producto("Estofado de pollo","",180.00),new Producto("Mole con pollo"," (Negro, de la casa o coloradito) ",180.00), new Producto("Mole con gallina"," (Negro, de la casa o coloradito) ",200.00)];
const aguacates=[new Producto("Aguacate relleno de atún","",145.00),new Producto("Aguacate relleno de chapulín","",165.00), new Producto("Aguacate relleno de camarón","",165.00)];
const peques=[new Producto("Hamburguesa"," (Papas a la francesa o spaguetti) ",100.00),new Producto("Ord. Papas a la francesa","",65.00),new Producto("Ord. Tacos fritos"," (3 piezas) ",85.00)];
const postres=[new Producto("Nieve Oaxaqueña","",65.00), new Producto("Helado","",65.00), new Producto("Plátanos fritos","",55.00), new Producto("Duraznos en almibar","",55.00), new Producto("Banana split","",95.00)];
const aguas=[new Producto("Vaso agua"," (Jamaica, tamarindo, naranja o limon) ",45.00),new Producto("Vaso agua de temporada","",50.00), new Producto("Frappe"," (Jamaica, tamarindo, naranja o limón) ",70.00), new Producto("Jarra de agua chica"," (Jamaica, tamarindo, naranja o limón) ",120.00), new Producto("Jarra de agua grande"," (Jamaica, tamarindo, naranja o limón) ",165.00), new Producto("Jarra de agua chica de temporada","",140.00), new Producto("Jarra de agua grande de temporada","",185.00)];
const embotellados=[new Producto("Refrescos","",40.00), new Producto("Botella de agua"," (600 ml) ",20.00), new Producto("Botella e agua"," (1 litro) ",30.00)];
const clericot=[new Producto("Jarra de clericot","",280.00)];
const cervezas=[new Producto("Corona, victoria o lager","",45.00), new Producto("Negra modelo o modelo especial","",50.00), new Producto("Michelada"," (Corona, victoria o lager) ",60.00), new Producto("Michelada"," (Negra modelo o modelo especial) ",65.00), new Producto("Chelada"," (Corona, victoria o lager) ",60.00), new Producto("Chelada"," (Negra modelo o modelo especial) ",70.00), new Producto("Clamato", " (Corona, victoria, laager, negra modelo o modelo especial) ",75.00)];

//desayunos
var lista = document.getElementById("listaHuevos");
var seccionEspecialidad=document.getElementById("seccionEspecialidad");
var seccionTradicionales=document.getElementById("seccionTradicionales");
var seccionDelComal=document.getElementById("seccionDelComal");

//platillos
var seccionBotanas=document.getElementById("seccionBotanas");
var seccionSopas=document.getElementById("seccionSopas");
var seccionCaldos=document.getElementById("seccionCaldos");
var seccionTlayudas=document.getElementById("seccionTlayudas");
var seccionConejo=document.getElementById("seccionConejo");
var seccionCarnes=document.getElementById("seccionCarnes");
var seccionMixtos=document.getElementById("seccionMixtos");
var seccionParrillada=document.getElementById("seccionParrillada");
var seccionMariscos=document.getElementById("seccionMariscos");
var seccionMoles=document.getElementById("seccionMoles");
var seccionAguacates=document.getElementById("seccionAguacates");
var seccionPeques=document.getElementById("seccionPeques");
var seccionExtras=document.getElementById("seccionExtras");

//bebidas
var seccionBebidasCalientes= document.getElementById("seccionBebidasCalientes");
var seccionBebidasFrias=document.getElementById("seccionBebidasFrias");
var seccionAguas=document.getElementById("seccionAguas");
var seccionEmbotellados=document.getElementById("seccionEmbotellados");
var secccionClericot=document.getElementById("seccionClericot");
var seccionCervezas=document.getElementById("seccionCervezas");

//postres
var seccionPostres=document.getElementById("seccionPostres");

huevos.forEach(function(elemento) {
    //var elementoLista = document.createElement("div");
    var diseñoProducto = '<div class="row"> <div class="col-10">'+ elemento.nombre +elemento.descripcion+'</div> <div class="col-2">'+"$ "+elemento.precio+'</div> </div>';
    lista.insertAdjacentHTML('beforeend', diseñoProducto);
  });

especialidad.forEach(function(elemento){
    var diseñoProducto = '<div class="row"> <div class="col-10">'+ elemento.nombre +elemento.descripcion+'</div> <div class="col-2">'+"$ "+elemento.precio+'</div> </div>';
    seccionEspecialidad.insertAdjacentHTML('beforeend', diseñoProducto);
});

tradicionales.forEach(function(elemento){
    var diseñoProducto = '<div class="row"> <div class="col-10">'+ elemento.nombre +elemento.descripcion+'</div> <div class="col-2">'+"$ "+elemento.precio+'</div> </div>';
    seccionTradicionales.insertAdjacentHTML('beforeend', diseñoProducto);
});

delComal.forEach(function(elemento){
  var diseñoProducto = '<div class="row"> <div class="col-10">'+ elemento.nombre +elemento.descripcion+'</div> <div class="col-2">'+"$ "+elemento.precio+'</div> </div>';
  seccionDelComal.insertAdjacentHTML('beforeend', diseñoProducto);
});

bebidasCalientes.forEach(function(elemento){
  var diseñoProducto = '<div class="row"> <div class="col-10">'+ elemento.nombre +elemento.descripcion+'</div> <div class="col-2">'+"$ "+elemento.precio+'</div> </div>';
  seccionBebidasCalientes.insertAdjacentHTML('beforeend', diseñoProducto);
});


botanas.forEach(function(elemento){
  var diseñoProducto = '<div class="row"> <div class="col-10">'+ elemento.nombre +elemento.descripcion+'</div> <div class="col-2">'+"$ "+elemento.precio+'</div> </div>';
  seccionBotanas.insertAdjacentHTML('beforeend', diseñoProducto);
});

sopas.forEach(function(elemento){
  var diseñoProducto = '<div class="row"> <div class="col-10">'+ elemento.nombre +elemento.descripcion+'</div> <div class="col-2">'+"$ "+elemento.precio+'</div> </div>';
  seccionSopas.insertAdjacentHTML('beforeend', diseñoProducto);
});

caldos.forEach(function(elemento){
  var diseñoProducto = '<div class="row"> <div class="col-10">'+ elemento.nombre +elemento.descripcion+'</div> <div class="col-2">'+"$ "+elemento.precio+'</div> </div>';
  seccionCaldos.insertAdjacentHTML('beforeend', diseñoProducto);
});

tlayudas.forEach(function(elemento){
  var diseñoProducto = '<div class="row"> <div class="col-10">'+ elemento.nombre +elemento.descripcion+'</div> <div class="col-2">'+"$ "+elemento.precio+'</div> </div>';
  seccionTlayudas.insertAdjacentHTML('beforeend', diseñoProducto);
});

conejo.forEach(function(elemento){
  var diseñoProducto = '<div class="row"> <div class="col-10">'+ elemento.nombre +elemento.descripcion+'</div> <div class="col-2">'+"$ "+elemento.precio+'</div> </div>';
  seccionConejo.insertAdjacentHTML('beforeend', diseñoProducto);
});

carnes.forEach(function(elemento){
  var diseñoProducto = '<div class="row"> <div class="col-10">'+ elemento.nombre +elemento.descripcion+'</div> <div class="col-2">'+"$ "+elemento.precio+'</div> </div>';
  seccionCarnes.insertAdjacentHTML('beforeend', diseñoProducto);
});

mixtos.forEach(function(elemento){
  var diseñoProducto = '<div class="row"> <div class="col-10">'+ elemento.nombre +elemento.descripcion+'</div> <div class="col-2">'+"$ "+elemento.precio+'</div> </div>';
  seccionMixtos.insertAdjacentHTML('beforeend', diseñoProducto);
});

parrillada.forEach(function(elemento){
  var diseñoProducto = '<div class="row"> <div class="col-10">'+ elemento.nombre +elemento.descripcion+'</div> <div class="col-2">'+"$ "+elemento.precio+'</div> </div>';
  seccionParrillada.insertAdjacentHTML('beforeend', diseñoProducto);
});

mariscos.forEach(function(elemento){
  var diseñoProducto = '<div class="row"> <div class="col-10">'+ elemento.nombre +elemento.descripcion+'</div> <div class="col-2">'+"$ "+elemento.precio+'</div> </div>';
  seccionMariscos.insertAdjacentHTML('beforeend', diseñoProducto);
});

moles.forEach(function(elemento){
  var diseñoProducto = '<div class="row"> <div class="col-10">'+ elemento.nombre +elemento.descripcion+'</div> <div class="col-2">'+"$ "+elemento.precio+'</div> </div>';
  seccionMoles.insertAdjacentHTML('beforeend', diseñoProducto);
});

aguacates.forEach(function(elemento){
  var diseñoProducto = '<div class="row"> <div class="col-10">'+ elemento.nombre +elemento.descripcion+'</div> <div class="col-2">'+"$ "+elemento.precio+'</div> </div>';
  seccionAguacates.insertAdjacentHTML('beforeend', diseñoProducto);
});

peques.forEach(function(elemento){
  var diseñoProducto = '<div class="row"> <div class="col-10">'+ elemento.nombre +elemento.descripcion+'</div> <div class="col-2">'+"$ "+elemento.precio+'</div> </div>';
  seccionPeques.insertAdjacentHTML('beforeend', diseñoProducto);
});

extras.forEach(function(elemento){
  var diseñoProducto = '<div class="row"> <div class="col-10">'+ elemento.nombre +elemento.descripcion+'</div> <div class="col-2">'+"$ "+elemento.precio+'</div> </div>';
  seccionExtras.insertAdjacentHTML('beforeend', diseñoProducto);
});

bebidasFrias.forEach(function(elemento){
  var diseñoProducto = '<div class="row"> <div class="col-10">'+ elemento.nombre +elemento.descripcion+'</div> <div class="col-2">'+"$ "+elemento.precio+'</div> </div>';
  seccionBebidasFrias.insertAdjacentHTML('beforeend', diseñoProducto);
});

aguas.forEach(function(elemento){
  var diseñoProducto = '<div class="row"> <div class="col-10">'+ elemento.nombre +elemento.descripcion+'</div> <div class="col-2">'+"$ "+elemento.precio+'</div> </div>';
  seccionAguas.insertAdjacentHTML('beforeend', diseñoProducto);
});

embotellados.forEach(function(elemento){
  var diseñoProducto = '<div class="row"> <div class="col-10">'+ elemento.nombre +elemento.descripcion+'</div> <div class="col-2">'+"$ "+elemento.precio+'</div> </div>';
  seccionEmbotellados.insertAdjacentHTML('beforeend', diseñoProducto);
});

clericot.forEach(function(elemento){
  var diseñoProducto = '<div class="row"> <div class="col-10">'+ elemento.nombre +elemento.descripcion+'</div> <div class="col-2">'+"$ "+elemento.precio+'</div> </div>';
  secccionClericot.insertAdjacentHTML('beforeend', diseñoProducto);
});

cervezas.forEach(function(elemento){
  var diseñoProducto = '<div class="row"> <div class="col-10">'+ elemento.nombre +elemento.descripcion+'</div> <div class="col-2">'+"$ "+elemento.precio+'</div> </div>';
  seccionCervezas.insertAdjacentHTML('beforeend', diseñoProducto);
});


postres.forEach(function(elemento){
  var diseñoProducto = '<div class="row"> <div class="col-10">'+ elemento.nombre +elemento.descripcion+'</div> <div class="col-2">'+"$ "+elemento.precio+'</div> </div>';
  seccionPostres.insertAdjacentHTML('beforeend', diseñoProducto);
});

