console.log('Script is running');

const setBackground = () => {
    
let p1 = document.querySelector('.first')    
let p2 = document.querySelector('.second')

p1.style.backgroundColor = 'red'
p2.style.backgroundColor = 'yellow'
}

let setBgbtn = document.getElementById('btn1')
setBgbtn.addEventListener('click', setBackground);










// console.log("script is running");

// const setBackground = () => {
//     let p1 = document.querySelector('.first');
//     let p2 = document.querySelector('.second');

//     p1.style.backgroundColor = 'red';
//     p2.style.backgroundColor = 'yellow';
     

// }

// let btnSetBg = document.getElementById('btn1');

// btnSetBg.addEventListener('click', setBackground);
