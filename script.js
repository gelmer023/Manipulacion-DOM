
//const h1 = document.querySelector('h1');
const value1 = document.querySelector('#input1');
const value2 = document.querySelector('#input2');
const btn = document.getElementById('btnCalcular')
const resultado1 = document.getElementById('answersId');
const resultado2 = document.querySelector('#answersId2')

function btnCalculo(){
    let answers = parseInt(value1.value) + parseInt(value2.value);
    resultado1.innerText ="El resultado es: " + answers;
    resultado2.value = answers;
    console.log('Se hizo clicl en btn calcular');
}
function insertarText(){
    console.log('Insertaron ' + value1.value);

}

//h1.innerText = "JAJAJAJ XD"

//const img = document.createElement('img');
//img.setAttribute('src', 'https://www.leagueoflegends.com/es-es/champions/caitlyn/');
//console.log(img);
//h1.app
//h1.replaceWith(img);
//h1.append(img)