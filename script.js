///"pirma uzduotis"

var pristatymo_kaina = 10



do {
   skaicius = parseFloat(prompt("Įveskite prekės kainą"))
 }
 while (isNaN(skaicius) || skaicius <= 0);
 var kaina=skaicius;

console.log("prekes kaina:" + kaina.toFixed(2)  +"EUR");


var pristatymas= prompt ("Ar reikalingas pristatymas į namus? (taip/ne)");

if (pristatymas === "taip"){
console.log("Taip, pristatymas reikalingas");

    
do {var miestas = prompt ("Į kurį miestą reiks pristatyti?");}
while (!miestas) ;

console.log ("Prekės kaina :" + kaina + "€");
console.log ("Pristatymas:"+ pristatymo_kaina + "€");
console.log ("Iš viso:" + (kaina + pristatymo_kaina) + "€");
console.log ("Prekę pristatysime į: " + miestas + " per 1-3 dienas.");}


else if (pristatymas === "ne"){
console.log("Ne, pristatymas nereikalingas");
console.log ("be pristatymo Prekės kaina: "+ kaina +"€");
console.log ("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a");
 }

else{
console.log("Pradekite nuo pradziu ir pasirinkite, prasau tinkama atsakyma");
    }


///"antra uzduotis"

 Array 
 

var demografija = [
    {salis: "Kinija", plotas: 9596961, populiacija: "1411750000"},
    {salis: "Indija", plotas: 3287263, populiacija: "1392329000"},
    {salis: "JAV", plotas: 9833517, populiacija: "335375000"},
    {salis: "Indonezija", plotas: 1904569, populiacija: "277749853"},
    {salis: "Pakistanas", plotas: 881913, populiacija: "241499431"},
 ]

 for(var i = 0; i < demografija.length; i++){
    console.log(demografija[i].salis, demografija[i].plotas, demografija[i].populiacija);
}
 for(var i = 0; i < demografija.length; i++){
   console.log ("Salis " + demografija[i].salis + ", joje gyvena - " + demografija[i].populiacija + " gyventoju. Valstybes plotas - " + demografija[i].plotas
    + "km2. Plotas, tenkantis vienam gyventojui - " + ((demografija[i].plotas * 1000000) /  demografija[i].populiacija).toFixed(2)+ "m2");
}


///Nesupratau paskutin4s dalies: Sudėkite sukoduotą skaičiavimą ir spausdinimą į funkcijos ciklą ir jį paleiskite per for loop arba for/of loop nurodydami informaciją iš masyvo.
    