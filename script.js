let btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
  e.preventDefault();
  validaNome();
  validaSenha();
});
function validaNome() {
  let nome = document.getElementById('nome').value;
  if (nome.length >= 5) {
    nome.style.color = 'green';
    alert('valido')
  } else {
    nome.style.color = 'red';
    alert('invalido')
  }
}
function validaSenha() {
  let senha = document.getElementById('senha').value;
  if (senha.length >= 5) {
    senha.style.background = 'green';
    alert('valido')
  } else {
    senha.style.background = 'red';
    alert('invalido')
  }
}
