var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

//Se definen variables para guardar los colores del array y
//tomar el css para poder armar la grilla
var $paleta = $("#paleta");
var $grillaPixeles = $("#grilla-pixeles");

// Funcion para mostrar en el HTML la paleta de colores
function paletaDeColores(){
  for (var nombreColor of nombreColores) {
    var $nuevoColor = $("<div>", {"class": "color-paleta"});
    $paleta.append($nuevoColor);
    $nuevoColor.css("background-color", nombreColor);
  };
};

// Funcion para mostrar en el HTML la grilla de pixeles
function grilla(){
  for (var i = 0; i < 1749; i++) {
    var $nuevoPixel = $("<div>");
    $grillaPixeles.append($nuevoPixel);
    $nuevoPixel.css("background-color");
  };
};

//Se define variable para indicar color seleccionado
var $indicadorDeColor = $("#indicador-de-color");
var $indicadorDeColorMensaje = $("#indicador-de-color-mensaje");

//Funcion para seleccionar color de la Paleta de colores
$paleta.click(function seleccionarColor(event){
  colorActual = $(event.target).css("background-color");
  cambiarIndicadorDeColor(colorActual);
});

//y mostrar el color seleccionado en el indicador de color
function cambiarIndicadorDeColor(color){
  $indicadorDeColor.css("background-color", color);
  $indicadorDeColorMensaje.text("Pincel: " + color);
};

//funciona para pintar un Pixel
$grillaPixeles.click(function pintarPixel(event){
  colorActual = $indicadorDeColor.css("background-color");
  $(event.target).css("background-color", colorActual);
});

// Variable que se elige con la rueda de color.
var $colorPersonalizado = $("#color-personalizado");

//funciona para tomar color de rueda en el indicadorDeColor
$colorPersonalizado.change(function(){
  colorActual = $colorPersonalizado.val();
  cambiarIndicadorDeColor(colorActual);
});

//Variable que define valor por defecto del mouse
var mouseApretado = false;


//funciones que definen si el mouse esta apretado o no.
function apretarMouse(){
  mouseApretado = true;
};
function soltarMouse(){
  mouseApretado = false;
};

//funcion para pintar con el mouse en movimiento
function pintarEnMovimiento(event){
  if (mouseApretado) {
    pintarPixel(event);
  };
};

//funciones para pintar con el mouse apretado y en movimiento
$grillaPixeles.mousedown(apretarMouse);
$grillaPixeles.mousemove(pintarEnMovimiento);

//funcion para soltar mouse cuando este fuera de la grilla
$(window).mouseup(soltarMouse);


var valorColorPersonalizado = $colorPersonalizado.val();
paletaDeColores ();
grilla ();
