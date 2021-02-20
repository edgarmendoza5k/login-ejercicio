function validacion(){

var lista = [
'user1', 'user2', 'user3'
];

var pass = [
'pass1', 'pass2', 'pass3'
]

var u = 0;

var lista2 = document.getElementById('txtvalid').value;
var pass2 = document.getElementById('txtvalid2').value;
var datos = false;

for(u = 0; u < lista.length; u++){
	
  if(lista2 == lista[u] && pass2 == pass[u]){
   datos = true; 
  }
  

}
if(datos){
 alert('datos correctos');
  window.open("http://google.com/");
}
else{
 alert('datos incorrectos');
}


}