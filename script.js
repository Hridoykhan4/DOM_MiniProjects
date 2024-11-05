// Important Counter App 
/* const html = document.getElementsByTagName('html')[0];
html.setAttribute('data-theme', 'light')

    const count = document.getElementById('count');

    const counter = document.getElementById('counter')

    const increaseBtn = document.getElementsByClassName('increase-button')[0];
    increaseBtn.addEventListener('click', function(e){
        let currentCount = Number(count.innerText);
        currentCount++;
        count.innerText = currentCount;
        e.stopPropagation()
        
    })
    
    const decreaseBtn = document.getElementsByClassName('decrease-button')[0];
    decreaseBtn.addEventListener('click', function(e){
        let currentCount = Number(count.innerText);
        currentCount--;
        count.innerText = currentCount;
        e.stopPropagation()
        
    })
    document.getElementById('counter').addEventListener('click', function(){

        if(decreaseBtn.getAttribute('disabled') === null){
            increaseBtn.setAttribute('disabled', true);
            decreaseBtn.setAttribute('disabled', true);
            counter.classList.add("bg-red-500");
            counter.classList.add("text-white");
        }
        else{
            increaseBtn.removeAttribute('disabled');
            decreaseBtn.removeAttribute('disabled');
            counter.classList.remove('bg-red-500');
            counter.classList.remove('text-white')
        }
    })
 */


/* let sum = 0;

const plusBtn = document.getElementById('plus-btn')
function clickMe(){
    const firstElement = document.getElementById('count');
    
    sum += 1;

    firstElement.innerText = sum
    if(sum >= 10){
        plusBtn.setAttribute('disabled', true);
    }
    else{
        plusBtn.removeAttribute('disabled', false)
    }
}



document.getElementById('minus-btn').addEventListener('click', function(){
    const minusBtn = document.getElementById('minus-btn')
    const secondElement = document.getElementById('count');
    sum -= 1;

    if(sum <= 0){
        minusBtn.setAttribute('disabled', true)
    }
    secondElement.innerText = sum

    
}) */
  