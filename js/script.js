let alimentos = {
  "frutas": [],
  "laticinios": [],
  "congelados": [],
  "doces": [],
  "outros": []
};

function adicionar() {
  document.getElementById("formulario").style.display = "block";
}

function remover() {
  document.getElementById("Remocao-de-item").style.display = "block";
}

function adicionarAlimento() {
  let alimento = document.getElementById("alimento").value;
  let categoria = document.getElementById("categoria").value;
  alimentos[categoria].push(alimento);
  limparFormulario();
  imprimir();
}

function removerAlimento() {
  let alimento = document.getElementById("removerAlimento").value;
  let categoriaEncontrada = false;
  
  for (let categoria in alimentos) {
    let index = alimentos[categoria].indexOf(alimento);
    if (index !== -1) {
      categoriaEncontrada = true;
      alimentos[categoria].splice(index, 1);
      break;
    }
  }

  if (categoriaEncontrada) {
    limparRemocao()
    imprimir();
    document.getElementById("mensagem").innerHTML = "";
  } else {
    document.getElementById("mensagem").innerHTML = "O alimento informado não foi encontrado na lista.";
  }
}


function limparFormulario() {
  document.getElementById("alimento").value = "";
  document.getElementById("categoria").value = "frutas";
  document.getElementById("formulario").style.display = "none";
}

function limparRemocao() {
  document.getElementById("alimento").value = "";
  document.getElementById("Remocao-de-item").style.display = "none";
}

function imprimir() {
  let lista = document.getElementById("lista");
  lista.innerHTML = "";
  for (let categoria in alimentos) {
    if (alimentos[categoria].length > 0) {
      let itens = alimentos[categoria].join(", ");
      lista.innerHTML += `<p><b>${categoria.charAt(0).toUpperCase() + categoria.slice(1)}:</b> ${itens}</p>`;
    }
  }
  let remover = document.getElementById("remover");
  if (lista.innerHTML === "") {
    remover.style.display = "none";
  } else {
    remover.style.display = "block";
  }
}

