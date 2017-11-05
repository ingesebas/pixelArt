// No modifiques estas funciones a menos que sepas MUY BIEN lo que estas haciendo!

//definir variable de botón borrar
var $guardar = $("#guardar");

//Funcion borrado animado
$guardar.click(guardarPixelArt);
// Abre una ventana para guardar nuestro arte en un archivo pixel-art.png
function guardarPixelArt() {
  html2canvas($("#grilla-pixeles") , {
    onrendered: function(canvas) {
      theCanvas = canvas;
      canvas.toBlob(function(blob) {
        saveAs(blob, "pixel-art.png");
      });
    }
  });
}

//Defino variables para cada superheroe
var $batman = $("#batman");
var $wonder = $("#wonder");
var $flash = $("#flash");
var $invisible = $("#invisible");

//funciones click para cargar superheroe
$batman.click(function(){
  cargarSuperheroe(batman)
});
$wonder.click(function(){
  cargarSuperheroe(wonder)
});
$flash.click(function(){
  cargarSuperheroe(flash)
});
$invisible.click(function(){
  cargarSuperheroe(invisible)
});

// Carga a un superheroe predefinido
function cargarSuperheroe(superheroe) {
  var $pixeles = $("#grilla-pixeles div");
  for (var i = 0; i < superheroe.length; i++) {
    $pixeles[i].style.backgroundColor = superheroe[i];
  }
}
