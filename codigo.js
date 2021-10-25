
function sumar()
{
    var total =0;
    var valor1 =parseInt(document.getElementById)("txtvalor1").value;
    var valor2 =parseInt(document.getElementById)("txtvalor2").value;
    total = valor1 + valor2;
    document.getElementById("textresuelto").value=total; 
}
var numero=1;

function adelantar ()
{
    numero ++;
    if(numero>6)
    numero=1;
    var foto = document.getElementById("foto")
    foto.src="imagenes/foto" + numero + ".jpg";
}

function retroceder ()
{
    numero --;
    if(numero<1)
    numero=6;
    var foto = document.getElementById("foto")
    foto.src="imagenes/foto" + numero + ".jpg";


}

const btnCierra = document.querySelector('#btn-cierra');
const imagenes = document.querySelectorAll('#galeria img');
const lightbox = document.querySelector('#contenedor-principal');
const imagenActiva = document.querySelector('#img-activa');
let indiceImagen = 0;


const abreLightbox = (event) => {
  imagenActiva.src = event.target.src;
  lightbox.style.display = 'flex';
  indiceImagen = Array.from(imagenes).indexOf(event.target);
};

imagenes.forEach((imagen) => {
  imagen.addEventListener('click', abreLightbox);
});


btnCierra.addEventListener('click', () => {
  lightbox.style.display = 'none';
});








