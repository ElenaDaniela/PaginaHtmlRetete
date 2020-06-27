
window.onload=function(){

var colectie = document.querySelectorAll("li:nth-of-type(2n+1)")
    for( i = 0; i < colectie.length; i++){
        colectie[i].style.color = "pink";
    }
	
// var colectie_lista = document.querySelectorAll("li");
// var olista = document.getElementsByTagName("ol");

// olista.ondblclick = function(){
	// for( i = 0; i < colectie_lista.length/2; i++){
        // var aux = colectie_lista[i].innerText;
		// colectie_lista[i].innerText = colectie_lista[colectie_lista.length-i-1].innerText;
		// colectie_lista[colectie_lista.length-i-1].innerText = aux;
    // }	
// }

/*fortune */
var fort = document.getElementById("buto");
fort.onclick = function(){
	var test=["Nu vei putea traversa niciodata oceanul daca nu esti dispus sa pierzi din vedere tarmul.","Zambetul e pasaportul tau in sufletele altora.","O sa treci toate restantele.","Daca crezi in tine vei ajunge departe.","Totul va fi bine intr-un sfarsit, daca nu e bine, nu e sfarsitul.","O persoana atractiva te va contacta","Vrei ceva bun? Cumpara-ti o oglinda!","Iti poti crea propria fericire.","Cel mai bun rist este sa nu iti asumi unul.","Dragostea poate rezista o viata, asta daca doresti.","in viata nu conteaza destinatia, ci drumul. Dar nu e cazul sa tot mergi in cerc.","Acum e momentul sa incerci ceva nou.","Cineva drag iti va scrie in curand.","O noua calatorie o sa iti umple memoria cu noi momente!","Esti talentat din multe puncte de vedere","Gelozia nu deschide usi, le inchide!","Daca nu citesti acest mesaj, la anul vei fi mai bogat.","Munca e bratara de aur, dar anul asta se poarta argintul.","Nu renunta, mereu cauta un motiv sa continui!","Accepta trecutul fara regrete, traieste prezentul cu incredere, infrunta viitorul fara frica","Daca nu-ti mai place cum arati, schimba oglinda."," Lucrurile bune nu se inghesuie la usa ta, dar daca ai rabdare o sa inceapa sa stea la rand.","Daca esti fericit o sa ai succes."," Daca muncesti, n-ai sa mori. Dar cel mai bine e sa nu-ti asumi acest risc!",]
	index=Math.floor(Math.random()*(24));
	document.getElementById('fortuneDisplay').innerHTML=(test[index]);
};

var cdData = new Date("Jun 7, 2020 19:00:00").getTime();
var update = setInterval(function() {

  var prezent = new Date().getTime();

  var diferenta = cdData - prezent;

  var zile = Math.floor(diferenta / (1000 * 60 * 60 * 24));
  var ore = Math.floor((diferenta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minute = Math.floor((diferenta % (1000 * 60 * 60)) / (1000 * 60));
  var secunde = Math.floor((diferenta % (1000 * 60)) / 1000);

  document.getElementById("count-down").innerHTML = zile + " zile " + ore + " ore "
  + minute + " minute " + secunde + " secunde pana la ziua ta! ";

  if (diferenta < 0) {
    clearInterval(cdData);
    document.getElementById("count-down").innerHTML = "LA MULTI ANI!";
  }
}, 1000);

}

	
function myFunction() 
{
  var x = document.getElementById("myTopnav");
  if (x.className === "navbar") 
  {
    x.className += " responsive";
  } 
   else 
   {
    x.className = "navbar";
   }
}

function setImageVisible() {
    var imagine = document.getElementsByTagName("img");
	for( i = 0; i < imagine.length; i++){
        if(imagine[i].style.visibility == "visible"){
			imagine[i].style.visibility = "hidden";
			document.getElementById('visibility-button').value="Afiseaza imagini";
		}
		else{
			imagine[i].style.visibility = "visible";
			document.getElementById('visibility-button').value="Ascunde imagini";
		}
    }
    
}

function reversedd() {
	var colectie_lista = document.querySelectorAll("li");
	for( i = 0; i < colectie_lista.length/2; i++){
        var aux = colectie_lista[i].innerText;
		colectie_lista[i].innerText = colectie_lista[colectie_lista.length-i-1].innerText;
		colectie_lista[colectie_lista.length-i-1].innerText = aux;
    }	
}





