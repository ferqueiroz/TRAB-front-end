const estudantes = {
    1: {
        nome: "Fernando Queiroz",
        foto: "https://github.com/ferqueiroz/trabalho-front-end/blob/main/imagens/eu.jpeg?raw=true",
        descricao: "Graduando Engenharia de Software na Unicesumar terceiro semestre, atualmente trabalhando na Command Perfect como desenvolvedor.",
        email: "ferqueiroz2205@gmail.com",
        numero: "44 99742-5100",
        github: "github.com/ferqueiroz",
        linkedin: "linkedin.com/in/fernando-queiroz-6023a2304",
        instagram: "instagram.com/_ferqueiroz",
        twitter: "twitter.com/7ferqueiroz",
        projetos: [
            {}
        ]
    },

    2: {
        nome: "Vitor Hugo Assis da Silva",
        foto: "https://github.com/ferqueiroz/trabalho-front-end/blob/main/imagens/vitor.JPEG?raw=true",
        descricao: "Apaixonado por novas tecnologias e pela criação de soluções para melhorar as experiências do usuário.",
        email: "vitorassis997@gmail.com",
        numero: "44 99774-4706",
        github: "github.com/vitorhassis",
        linkedin: "linkedin.com/in/vitor-hugo-assis/",
        instagram: "instagram.com/ass.vitor",
        twitter: "twitter.com/vitorhassiss"
    },

    3: {
        nome: "Estudante 3",
        foto: "https://cdn-icons-png.flaticon.com/512/3106/3106921.png",
        descricao: "Outro estudante exemplo."
    },

    4: {
        nome: "Estudante 4",
        foto: "https://cdn-icons-png.flaticon.com/512/3106/3106921.png",
        descricao: "Outro estudante exemplo."
    },

    5: {
        nome: "Estudante 5",
        foto: "https://cdn-icons-png.flaticon.com/512/3106/3106921.png",
        descricao: "Outro estudante exemplo."
    }
};

const Id = localStorage.getItem("Id");

if (estudantes[Id]) {
    document.getElementById("nome").innerText = estudantes[Id].nome;
    document.getElementById("foto").src = estudantes[Id].foto;
    document.getElementById("descricao").innerText = estudantes[Id].descricao;
    
    document.getElementById("email").innerText = estudantes[Id].email;
    document.getElementById("email").href = `mailto:${estudantes[Id].email}`;

    document.getElementById("numero").innerText = estudantes[Id].numero;
    document.getElementById("numero").href = `tel:${estudantes[Id].numero}`;

    document.getElementById("github").innerText = estudantes[Id].github;
    document.getElementById("github").href = `https://${estudantes[Id].github}`;

    document.getElementById("linkedin").innerText = estudantes[Id].linkedin;
    document.getElementById("linkedin").href = `https://${estudantes[Id].linkedin}`;

    document.getElementById("instagram").innerText = estudantes[Id].instagram;
    document.getElementById("instagram").href = `https://${estudantes[Id].instagram}`;

    document.getElementById("twitter").innerText = estudantes[Id].twitter;
    document.getElementById("twitter").href = `https://${estudantes[Id].twitter}`;
} else {
    document.getElementById("nome").innerText = "Estudante não encontrado!";
}