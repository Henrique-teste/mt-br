let btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
  e.preventDefault();
  validaNome();
  validaSenha();
});
function validaNome() {
  let nome = document.getElementById('nome').value;
  if (nome.length >= 5) {
    alert('valido');
  } else {
    alert('invalido');
  }
}
function validaSenha() {
  let nome = document.getElementById('nome').value;
  if (nome.length >= 5) {
    alert('valido');
  } else {
    alert('invalido');
  }
}
