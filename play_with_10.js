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


const myBtn = document.getElementById('myButton');
myBtn.setAttribute('disabled', 'true');
myBtn.setAttribute('class', 'btn btn-primary')
// myBtn.setAttribute('class', 'common-class')

console.log(myBtn.getAttribute('class')
)
myBtn.removeAttribute('disabled')

/* const myLink = document.getElementById('myLink');
console.log(myLink.getAttribute('title')) */