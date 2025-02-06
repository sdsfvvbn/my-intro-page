// const incrementButton = document.querySelector('#increment');
// let counter = 0;
// const counterEl = document.getElementById('counter');
// incrementButton.addEventListener('click', add_the_count)//按下button之後會發生啥事
// const decrementButtom = document.querySelector('#decrement')
// decrementButtom.addEventListener('click', minus_the_count)
// const ulElememt = document.getElementById('list-items')

// function add_the_count() {
//     counter++;
//     counterEl.innerText = counter;


//     //create element
//     const li = document.createElement('li');
//     const node = document.createTextNode("Sentence" + counter)
//     li.setAttribute('data-counter', counter);//name of attribute, value of attribute
//     if (counter % 2 === 0) {

//         //li.setAttribute('class', 'red')
//         li.style.background = 'red'
//     }
//     else {
//         //li.style.background = 'yellow'
//         li.setAttribute('class', 'yellow')
//     }
//     //append that element
//     li.appendChild(node)
//     ulElememt.appendChild(li);
// }

// function minus_the_count() {
//     const li = ulElememt.querySelector('[data-counter="' + counter + '"]')
//     const number = parseInt(li.getAttribute('data-counter'))
//     if (number % 2 == 0) {
//         li.remove();
//     }
//     counter--;
//     counterEl.innerText = counter;


// }