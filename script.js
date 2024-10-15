// Função para carregar o arquivo JSON e alimentar a tabela
function carregarDados() {
    // Usa a função fetch para buscar o arquivo JSON
    fetch('dados.json')
        .then(response => response.json())  // Converte a resposta para JSON
        .then(data => {
            const tableBody = document.querySelector("tbody");  // Seleciona o corpo da tabela
            //Revisar conteúdo
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
      .catch(error => console.error('Erro ao carregar o arquivo JSON:', error)); // para controle
  }

function deletarSelecionados() {
    // Seleciona todos os checkboxes dentro do corpo da tabela
  const checkboxes = document.querySelectorAll("#mailbox tbody input[type='checkbox']:checked");
    //Deleta linha selecionada
  checkboxes.forEach(checkbox => {
    const row = checkbox.closest("tr");
    row.remove();
  });
}

function escrever() {
  location.href = "envioemail.html";
}



  
// Chama a função para carregar dados quando a página é atualizada
window.onload = carregarDados;

document.getElementById("deleteSelected").addEventListener("click", deletarSelecionados);
  