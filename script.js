function login() {
    // Obter os valores dos campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Simular uma verificação no servidor (substituir por sua lógica real)
    document.getElementById('result').innerHTML = 'Aguarde...'; // Mostrar mensagem de carregamento

    // Simular um atraso para simular a requisição ao servidor
    setTimeout(() => {
      if (username === 'admin' && password === 'password123') {
        window.location.href = 'http://lattes.cnpq.br/2335272629572252';
      } else {
        document.getElementById('result').innerHTML = 'Login inválido.';
      }
    }, 1000); // Aguardar 1 segundo
  }
