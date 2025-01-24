let btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
  e.preventDefault();
});
function validaNome() {
  let nome = document.getElementById('nome').value;
  if (nome.length >= 5) {
    alert('Seu nome é valido')
  } else {
    alert('invalido')
  }
}
function validaSenha() {
  let senha = document.getElementById('senha').value;
  if (senha.length >= 5) {
        alert('Sua senha é valido')
  } else {
    alert('invalido')
  }
}
validaNome();
validaSenha();
