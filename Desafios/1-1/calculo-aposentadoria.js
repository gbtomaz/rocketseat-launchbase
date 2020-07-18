const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;
const idadeAposentadoria = idade + contribuicao;

if(sexo === "F"){
    if(idadeAposentadoria >= 85){
        console.log(`${nome}, você pode se aposentar!`)
    }else{
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }
}else{
    if(idadeAposentadoria >= 95){
        console.log(`Você do sexo masculino, pode se aposentar!`)
    }else{
        console.log(`Você do sexo masculino, ainda não pode se aposentar!`)
    }
}