const html = document.getElementsByTagName('html')[0];
html.setAttribute('data-theme', 'light');

/* let sum = 1;
function clickMe(){
    const count = document.getElementById('count');
    sum++
    count.innerText = sum;


    document.getElementById('minus-btn').removeAttribute('disabled') 


    if(sum === 10){
        const plusBtn = document.getElementById('plus-btn');
        plusBtn.setAttribute('disabled', true)
    }
}

document.getElementById('minus-btn').addEventListener('click', function(){
    const count = document.getElementById('count');
    sum--;
    count.innerText = sum;

    const plusBtn = document.getElementById('plus-btn');
        plusBtn.removeAttribute('disabled')


    if(sum <= 0){
        document.getElementById('minus-btn').setAttribute('disabled', true) 
    }
    else{
        document.getElementById('minus-btn').removeAttribute('disabled') 

    }
}) */