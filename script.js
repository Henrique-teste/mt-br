let btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
  e.preventDefault();
  validaNome();
  validaSenha();
});
function validaNome() {
  let nome = document.getElementById('nome').value;
  if (nome.length >= 5) {
    nome.style.border = 'green';
  } else {
    nome.style.border = 'red';
  }
}
function validaSenha() {
  let senha = document.getElementById('senha').value;
  if (senha.length >= 5) {
    senha.style.background = 'green';
  } else {
    senha.style.background = 'red';
  }
}
