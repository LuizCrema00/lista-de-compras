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

function adicionarAlimento() {
  let alimento = document.getElementById("alimento").value;
  let categoria = document.getElementById("categoria").value;
  alimentos[categoria].push(alimento);
  limparFormulario();
  imprimir();
}

function limparFormulario() {
  document.getElementById("alimento").value = "";
  document.getElementById("categoria").value = "frutas";
  document.getElementById("formulario").style.display = "none";
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
}

