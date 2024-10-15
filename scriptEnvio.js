const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sDestinatario = document.querySelector('#m-destinatario')
const sAssunto = document.querySelector('#m-assunto')
const sMsg = document.querySelector('#m-msg')
const btnSalvar = document.querySelector('#btnSalvar')

let itens // variavel de escopo
let id

function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  if (edit) {
    sDestinatario.value = itens[index].destinatario
    sAssunto.value = itens[index].assunto
    sMsg.value = itens[index].msg
    id = index
  } else {
    sDestinatario.value = ''
    sAssunto.value = ''
    sMsg.value = ''
  }
  
}

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.destinatario}</td>
    <td>${item.assunto}</td>
    <td>R$ ${item.msg}</td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  
  if (sDestinatario.value == '' || sAssunto.value == '' || sMsg.value == '') {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].destinatario = sDestinatario.value
    itens[id].assunto = sAssunto.value
    itens[id].msg = sMsg.value
  } else {
    itens.push({'destinatario': sDestinatario.value, 'assunto': sAssunto.value, 'msg': sMsg.value})
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()