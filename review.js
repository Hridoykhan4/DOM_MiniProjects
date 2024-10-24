/* 

let count = 1;     
document.getElementById('submit-btn').addEventListener('click', function(){
    const textArea = document.getElementById('text-area');
    const mainText = textArea.value;
    
    const reviewContainer = document.getElementById('review');
    const p = document.createElement('p');
    p.innerText =  count + '.' + mainText;
    count++
    const reviewChange =  reviewContainer.appendChild(p);
    reviewChange.style.fontWeight = 'bold';
    reviewChange.style.marginTop = '1rem';
    
    textArea.value = ''


}) */