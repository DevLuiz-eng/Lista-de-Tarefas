let button = document.querySelector(".button-add-task");
let input = document.querySelector(".input-task");
let task = document.querySelector(".task");
let container = document.querySelector(".container");
let listaDeTarefs = document.querySelector(".list-task");

let minhaListaDEItens = [];

function addItens(item) {
  minhaListaDEItens.push({
    Tarefa: item,
    concluida: false,
  });
}

function MostrarnovaTarefa() {
  let newLi = "";

  minhaListaDEItens.forEach((item, posicao) => {
    newLi =
      newLi +
      ` <li class="task ${item.concluida && "done"}">
                    <img src="/img/verificado.png" onclick="beGreen(${posicao})" alt="">
                    <p>${item.Tarefa}</p>
                    <img src="/img/trash.png" alt="" onclick="deletarItem(${posicao})">
                </li>`;
  });

  listaDeTarefs.innerHTML = newLi;

  localStorage.setItem(
    "Minha Lista De Tarefas",
    JSON.stringify(minhaListaDEItens)
  );
}

function recarregarTela() {
  const tarefasDoLocalStorage = localStorage.getItem("Minha Lista De Tarefas");

  if (tarefasDoLocalStorage) {
    minhaListaDEItens = JSON.parse(tarefasDoLocalStorage);
  }
  MostrarnovaTarefa();
}

function getInputValue() {
  if (input.value == "") {
    alert("Campo vazio! Adicione alguma tarefa!");
    return 0;
  }
  addItens(input.value);
  MostrarnovaTarefa();
  input.value = "";
}

function deletarItem(posicao) {
  minhaListaDEItens.splice(posicao, 1);
  MostrarnovaTarefa();
}

function beGreen(posicao) {
  minhaListaDEItens[posicao].concluida = !minhaListaDEItens[posicao].concluida;

  MostrarnovaTarefa();
}

recarregarTela();
button.addEventListener("click", getInputValue);
