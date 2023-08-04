const submit = document.getElementById('submitbtn');
const first = document.getElementsByClassName('rating');
const second = document.getElementsByClassName('thankyou');
const score = document.getElementById('score');
const btnli = document.querySelectorAll(".listitem");
submit.addEventListener("click",() => { second[0].removeAttribute('id')
first[0].setAttribute('id','remove')});
console.log(score.innerHTML);

btnli.forEach( (button) => {
    button.addEventListener("click",() =>{
        score.innerHTML = button.innerHTML
    })   
    })


