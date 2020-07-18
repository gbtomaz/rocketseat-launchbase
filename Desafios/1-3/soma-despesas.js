const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
];

  function calculaSaldo(receitas, despesas){

    const saldo = receitas - despesas;
    return saldo;
  }

  function somaNumeros(numeros){
    
    let valor = 0 
        for (let p = 0; p < numeros.length; p++) {
           valor = valor += numeros[p]         
        }
        return valor;
  }

  for (let u = 0; u < usuarios.length; u++) {
       const receitas = somaNumeros(usuarios[u].receitas)
       const despesas = somaNumeros(usuarios[u].despesas)
       const saldo = calculaSaldo(receitas, despesas)
       if(saldo > 0){
       console.log(`${usuarios[u].nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
    }else{
       console.log(`${usuarios[u].nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`) 
    }
  }
   