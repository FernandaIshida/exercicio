// Função para carregar o arquivo JSON e preencher a tabela
function carregarDados() {
    // Usa a função fetch para buscar o arquivo JSON
    fetch('dados.json')
      .then(response => response.json())  // Converte a resposta para JSON
      .then(data => {
        const tableBody = document.querySelector("tbody");  // Seleciona o corpo da tabela
  
        data.forEach((item, index) => {
          // Cria uma nova linha na tabela
          const row = document.createElement("tr");
  
          // Coluna 1: Checkbox
          const col1 = document.createElement("td");
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.id = `checkbox-${index}`;
          checkbox.name = `checkbox-${index}`;
  
          // Adiciona o checkbox à coluna 1
          col1.appendChild(checkbox);
          row.appendChild(col1);
  
          // Coluna 2: Preenchida com dados do JSON
          const col2 = document.createElement("td");
          col2.textContent = item.col2;
          row.appendChild(col2);
  
          // Coluna 3: Preenchida com dados do JSON
          const col3 = document.createElement("td");
          col3.textContent = item.col3;
          row.appendChild(col3);
  
          // Adiciona a nova linha à tabela
          tableBody.appendChild(row);
        });
      })
      .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
  }

  function deletarSelecionados() {
    // Seleciona todos os checkboxes dentro do corpo da tabela
    const checkboxes = document.querySelectorAll("#mailbox tbody input[type='checkbox']:checked");
  
    // Remove as linhas cujos checkboxes estão marcados
    checkboxes.forEach(checkbox => {
      const row = checkbox.closest("tr");  // Encontra a linha associada ao checkbox
      row.remove();  // Remove a linha
    });
  }
  
  // Chama a função para carregar os dados quando a página é carregada
  window.onload = carregarDados;

  document.getElementById("deleteSelected").addEventListener("click", deletarSelecionados);
  