  const form = document.getElementById('cadastroSenha');
  const senha = document.getElementById('senha');
  const confirmaSenha = document.getElementById('confirmaSenha');
  const erro = document.getElementById('erro');

  form.addEventListener('submit', function(event) {
    // impede envio do formulário
    event.preventDefault();

    if (senha.value !== confirmaSenha.value) {
      erro.textContent = "As senhas não coincidem!";
      confirmaSenha.style.borderColor = "red";
    } else {
      erro.textContent = "";
      confirmaSenha.style.borderColor = "green";
      erro.style.color = "green";
      alert("Cadastro realizado com sucesso!");

      form.reset();
    }
  });

  
