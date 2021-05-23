function exibirSinopse(id) {
  if (document.getElementById(id).style.display === "block"){
    document.getElementById(id).style.display = "none";
    document.getElementById("button-"+id).value = "Sinopse"
  }
    
  else{
    document.getElementById(id).style.display = "block";
    document.getElementById("button-"+id).value = "Ocultar"
  }
}

// function validarCampos() {
//   if (document.getElementById('name').value === "")
//     document.getElementById('name').classList.add("classeComErro");
//   if (document.getElementById('email').value === "")
//     document.getElementById('email').classList.add("classeComErro");
//   if (document.getElementById('cpf').value === "")
//     document.getElementById('cpf').classList.add("classeComErro");
// }

function exibirMensagem() {
    // if (document.getElementById('nome').classList.contains("input:invalid") || document.getElementById('email').classList.contains("input:invalid") || document.getElementById('cpf').classList.contains("input:invalid"))
      document.querySelectorAll('input').forEach(x => x.value = '');
    // else
      alert("Sua nota fiscal foi enviada com sucesso!");
}