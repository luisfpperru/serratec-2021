function exibirSinopse(id) {
  if (document.getElementById(id).style.display === "block") {
    document.getElementById(id).style.display = "none";
    document.getElementById("button-" + id).value = "Sinopse"
  } else {
    document.getElementById(id).style.display = "block";
    document.getElementById("button-" + id).value = "Ocultar"
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
  
  if (document.querySelectorAll('input:invalid').length == 0){
    document.querySelectorAll('input').forEach(x => x.value = ''); // limpa todos os campos
    alert("Sua nota fiscal foi enviada com sucesso!"); // exibe o alerta
  }

  // if (document.getElementById('name').value !== "" && document.getElementById('email').value !== "" && document.getElementById('cpf').value !== "") {
  //   document.querySelectorAll('input').forEach(x => x.value = ''); // limpa todos os campos
  //   alert("Sua nota fiscal foi enviada com sucesso!"); // exibe o alerta
  // }
}