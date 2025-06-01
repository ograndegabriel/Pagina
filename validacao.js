 function verificarSenha(){
            let senhaCorreta = "123"; // Senha correta
            let senhaDigitada = document.getElementById("senha").value;
            let mensagem = document.getElementById("mensagem");

            if (senhaDigitada === senhaCorreta) {
                mensagem.style.color = "black"
                mensagem.style.textContent = "correto"
            } else {
                mensagem.style.color = "red";
                mensagem.textContent = "Senha incorreta. Tente novamente.";
            }
        }


function verificarEmail(){
let emailcerto = "gari@gmail.com"||"ana@gmail.com"||"luizasouza@gmail"
let digitGmail = document.getElementById("Gmail").value
let mensa = document.getElementById("mensagem")

if(emailcerto === digitGmail){
    mensagem.style.color = "green"
    mensagem.textContent = "email correto"
}
else{
    mensagem.style.color = "red"
    mensagem.textContent = "infelizmente! este email não foi reconhecido"
}

}