let btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
  e.preventDefault();
  validaNome();
});
function validaNome() {
  let nome = document.getElementById('nome').value;
  if (nome.length >= 5) {
    alert('valido');
  } else {
    alert('invalido');
  }
}
