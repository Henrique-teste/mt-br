let btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
  e.preventDefault();
  validaNome();
  validaSenha();
});

function validaSenha() {
  let senha = document.getElementById('senha').value;
  if (nome.length >= 5) {
    alert('valido');
  } else {
    alert('invalido');
  }
}
function cadastrado () {
  if((validaNome == true) (validaSenha == true)){
    alert('Você foi cadastrado. Parabéns')
  }else{
    alert('algo deu errado')
  }
}
