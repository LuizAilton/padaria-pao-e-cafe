  const form = document.getElementById('cadastrosenha');
  const senha = document.getElementById('senha');
  const confirmasenha = document.getElementById('confirmasenha');
  const erro = document.getElementById('erro');

  form.addEventListener('submit', function(event) {
    // impede envio do formulário
    event.preventDefault();

    if (senha.value !== confirmasenha.value) {
      erro.textContent = "As senhas não são iguais!";
      erro.style.color = "red";
      confirmasenha.style.borderColor = "red";
    } else {
      erro.textContent = "";
      confirmasenha.style.borderColor = "green";
      erro.style.color = "green";
      alert("Cadastro realizado com sucesso!");

      form.submit();
    }
  });

  
