document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o recarregamento da página

    const email = form.elements[0].value.trim();
    const senha = form.elements[1].value;

    // Validações básicas

    if (!email || !senha) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    // Valida e-mail

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Digite um e-mail válido!");
      return;
    }

    // Se tudo estiver certo
    alert("Login validado com sucesso!");
    console.log({ email, senha });
  });
});
