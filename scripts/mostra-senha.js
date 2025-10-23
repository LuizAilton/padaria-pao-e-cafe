// Mostrar/ocultar senha
  document.querySelectorAll('.mostrar-senha').forEach(botao => {
    botao.addEventListener('click', () => {
      const idCampo = botao.getAttribute('data-target');
      const campo = document.getElementById(idCampo);

      if (campo.type === 'password') {
        campo.type = 'text';
        botao.textContent = '🔓'; // muda o ícone
      } else {
        campo.type = 'password';
        botao.textContent = '🔒';
      }
    });
  });