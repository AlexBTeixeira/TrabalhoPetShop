// Função para verificar se todos os campos estão preenchidos
function checkFields() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var password = document.getElementById('password').value;
    var passwordConfirmation = document.getElementById('passwordConfirmation').value;

  
    // Habilita o botão se todos os campos estiverem preenchidos

    if (firstName && lastName && email && phoneNumber && password && passwordConfirmation) {
      document.getElementById('submitButton').disabled = false;
    } else {
      document.getElementById('submitButton').disabled = true;
    }

    document.getElementById('firstName').addEventListener('input', checkFields);
    document.getElementById('lastName').addEventListener('input', checkFields);
    document.getElementById('email').addEventListener('input', checkFields);
    document.getElementById('phoneNumber').addEventListener('input', checkFields);
    document.getElementById('password').addEventListener('input', checkFields);
    document.getElementById('passwordConfirmation').addEventListener('input', checkFields);
  
  }
  
  // Adiciona um ouvinte de eventos a cada campo de entrada para verificar as alterações

  // Add the 'async' keyword before the function declaration
  async function validateEmail() {
    var email = document.getElementById('email').value;
    // Verifica se o email é válido
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, insira um endereço de e-mail válido.');
      return;
    }

    return true;
  }
  
  async function validateTelefone() {
    var phoneNumber = document.getElementById('phoneNumber').value;
    // Verifica se o número de telefone é válido
    var phoneRegex = /^\d{11}$/;
        if (!phoneRegex.test(phoneNumber)) {
      alert('Por favor, insira um número de telefone válido.');
      return;
    }

    return true;
  }

   function validateSenha() {

    var password = document.getElementById('password').value;
    var passwordConfirmation = document.getElementById('passwordConfirmation').value;

        // Verifica se as senhas são iguais
        if (password !== passwordConfirmation) {
          alert('As senhas não coincidem.');
          return;
        }
        return true;
  }

var imagens = ["https://alexbteixeira.github.io/TrabalhoPetShop/images/banner.png", "https://alexbteixeira.github.io/TrabalhoPetShop/images/banner.jpg", "https://alexbteixeira.github.io/TrabalhoPetShop/images/imagem5.jpg"];
var indiceAtual = 0;

function mudarImagem() {
  // Incrementa o índice ou reinicia se atingir o final do array
  indiceAtual = (indiceAtual + 1) % imagens.length;
  
  // Obtém o elemento da imagem e aplica a transição da esquerda para a direita
  var imagemElement = document.getElementById("banner");
  imagemElement.style.transform = "translateX(-100%)";

  // Aguarda um curto período para permitir a transição antes de alterar a imagem
  setTimeout(function() {
    imagemElement.src = imagens[indiceAtual];
    // Zera a transformação para a próxima transição
    imagemElement.style.transform = "translateX(0)";
  }, 1000); // 1000 milissegundos = 1 segundo
}

// Chama a função para mudar a imagem a cada 10 segundos
var intervaloImagem = setInterval(mudarImagem, 5000); // 10000 milissegundos = 10 segundos
