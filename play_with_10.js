// const container = document.getElementsByClassName('container')[0];
// // console.log(container.childNodes[3])

// const item2 = document.getElementById('item2');
// // console.log(item2.parentElement.children[1]);

// // console.log(item2.nextElementSibling)
// // console.log(item2.previousElementSibling)

// console.log(item2.previousElementSibling);
// console.log(item2.nextSibling.nextSibling);

/* const container = document.querySelector('.container');
console.log(container.innerText); */


/* const myBtn = document.getElementById('myButton');
myBtn.setAttribute('disabled', 'true');
myBtn.setAttribute('class', 'btn btn-primary')
// myBtn.setAttribute('class', 'common-class')

console.log(myBtn.getAttribute('class')
)
myBtn.removeAttribute('disabled') */

/* const myLink = document.getElementById('myLink');
console.log(myLink.getAttribute('title')) */

// append,className,classList,removeChild


/* let container = document.querySelector('.container');
const p = `
 <h1>I am a Millionire</h1>
 <p>Hello</p>
`;

container.innerHTML += p

const h1 = document.createElement('h1');
h1.className = 'common-class'
h1.classList.remove('common-class')
h1.innerText = 'I am h1';
container.appendChild(h1);
container.append('Kala');

const p2 = document.createElement('p');
p2.innerText = 'I am Jalal';
container.appendChild(p2)

container.removeChild(p) */

// Count App
/* let sum = 0;

function clickMe(){
    document.getElementById('minus-btn').removeAttribute('disabled')
    sum++;
    document.getElementById('count').innerText = sum;
    if(sum === 10){
        document.getElementById('plus-btn').setAttribute('disabled', true) 
    }

}

document.getElementById('minus-btn').addEventListener('click', function(){
    
    if(sum > 0){
        sum--;
        document.getElementById('count').innerText = sum;
        if(sum === 0){
            document.getElementById('minus-btn').setAttribute('disabled', true)  
        }
        document.getElementById('plus-btn').removeAttribute('disabled')
    }

    // if (sum > 0) {
    //     sum--;
    //     document.getElementById('count').innerText = sum;
    //     if (sum === 0) {
    //         document.getElementById('minus-btn').setAttribute('disabled', true);
    //     }

    // document.getElementById('plus-btn').removeAttribute('disabled')
    // }
});
 */
