let nome = document.getElementById('nome').value
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')

btn1.addEventListener('click', function(e){
    e.preventDefault
    console.log(nome.value)
})
