// Função para atualizar os totais
    function atualizarTotais() {
      const linhas = document.querySelectorAll("#tabelaCarrinho tbody tr");
      let totalGeral = 0;
      let totalItens = 0;

      linhas.forEach(linha => {
        const qtd = parseInt(linha.querySelector("input[type='number']").value);
        const preco = parseFloat(linha.querySelector("td[data-preco]").dataset.preco);
        const subtotal = qtd * preco;
        linha.querySelector(".subtotal").textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
        totalGeral += subtotal;
        totalItens += qtd;
      });

      document.getElementById("qtdTotal").textContent = totalItens;
      document.getElementById("valorTotal").textContent = `R$ ${totalGeral.toFixed(2).replace('.', ',')}`;
    }

    // Atualiza ao mudar quantidade
    document.querySelectorAll("#tabelaCarrinho input[type='number']").forEach(input => {
      input.addEventListener("change", atualizarTotais);
    });

    // Excluir item
    document.querySelectorAll(".btn-excluir").forEach(botao => {
      botao.addEventListener("click", e => {
        e.target.closest("tr").remove();
        atualizarTotais();
      });
    });

    // Esvaziar carrinho
    document.getElementById("btnLimpar").addEventListener("click", () => {
      document.querySelector("#tabelaCarrinho tbody").innerHTML = "";
      atualizarTotais();
    });