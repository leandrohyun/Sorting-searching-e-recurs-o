function printArray(myArray) {
  for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
  }
}
//Sorting de Objetos

const estradas = [
    { tipo: "EstradaPequena", custo: 40},
    { tipo: "EstradaMedia", custo: 70},
    { tipo: "EstradaGrande", custo: 80}, 
    { tipo: "Pedagio", custo: 35000}
  ];
  function compararCusto(a, b) {
    if (a.custo > b.custo) {
      return -1;
    }
    if (a.custo < b.custo) {
      return 1;
    }
    return 0;
  } 
  console.log('Do maior para o menor custo', estradas.sort(compararCusto));

  //Ordenamento de String com localCompare

  morador = ['Sophie Wilson', 'Kevin Smith', 'Dongmin Lee', 'Tiffany Young', 'Amanda Jones']; 
  console.log('Moradores', morador.sort((a, b) => a.localeCompare(b)));

  //Método IndexOf e LastIndexOf
  
const serviços = ["Companhia de abastecimento de água", "Companhia de Energia", "Hospital", "Delegacia", "Bombeiros", "Escola","Terminal de Ônibus"];
console.log("Serviços da cidade: ", serviços);

console.log("Hospital:", serviços.indexOf("Hospital"));
console.log("Escola", serviços.indexOf("Escola"));
console.log("Tratamento de Esgoto" , serviços.indexOf("Tratamento de Esgoto"));

serviços.push("Companhia de Energia");
console.log("Serviços da cidade: ", serviços);
console.log("Companhia de Energia", serviços.lastIndexOf("Companhia de Energia"));
console.log('Coleta de Lixo', serviços.lastIndexOf("Coleta de Lixo"));

//Método Find, FindIndex, Includes
// A capacidade de um hospital é de 500 pacientes, sendo assim, a array pacientes armazena diferentes quantidade dos mesmos em hospitais pela cidade.
const pacientes = [89,167,291,501,100,412];

function leitosOcupados(x) {
  return x >= 500 ;
}
printArray(pacientes)
console.log("Número de pacientes (Find): ", pacientes.find(leitosOcupados));
console.log("Posição (FindIndex): ", pacientes.findIndex(leitosOcupados));
console.log("Include - 100", pacientes.includes(100));
console.log("Include - 101", pacientes.includes(101));
