const nome = "Carlos";
const idade = "32";
const especialidade = {
    tecnologias: [
        { nome: "C++", especialidade: "Desktop" },
        { nome: "JavaScript", especialidade: "Web/Mobile" }
      ]
}


console.log(`O usuário ${nome} tem ${idade} anos e usa a tecnologia ${especialidade.tecnologias[0].nome} com especialidade em ${especialidade.tecnologias[0].especialidade}`)