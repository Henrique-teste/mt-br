let btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
  e.preventDefault();
  validaNome();
  validaSenha();
  cadastrado();
});
function validaNome() {
  let nome = document.getElementById('nome').value;
  if (nome.length >= 5) {
    nome.style.color = 'green';
  } else {
    nome.style.color = 'green';
  }
}
function validaSenha() {
  let senha = document.getElementById('senha').value;
  if (senha.length >= 5) {
    senha.style.color = 'green';
  } else {
    senha.style.color = 'red';
  }
}
