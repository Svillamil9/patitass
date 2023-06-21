let precioBolsa=12000;
let cantidadBolsa=21;
let comeXdia=0.4;

  plata.oninput = function() {
    variable.innerHTML ="Comida para  " + Math.round(((plata.value*cantidadBolsa)/precioBolsa)/comeXdia) + " dias";
  };


 function myFunction(){
  alert("Es una demostracion no es para usos practicos");
window.open('https://www.mercadopago.com.ar');

};