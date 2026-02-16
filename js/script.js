// Dom elements
const countDownEl = document.getElementById('countdown')
const numberListEl = document.getElementById('numbers-list')
const answersFormEl = document.getElementById('answers-form')
const buttonPrimaryEl = document.querySelector('.btn-primary')
const messageEl = document.getElementById('message')


// random rumber generator function
function getRandomNum() {
    return Math.floor(Math.random() * 50) + 1;
}

// empty array 
const secretNumbers = [];

// while cicle for pushing max 5 numbers into the array
while (secretNumbers.length < 5){
    const num = getRandomNum()
    // IF the number in not already present, push it into the array
    if (!secretNumbers.includes(num)){
        secretNumbers.push(num)
    }    
}
console.log(secretNumbers);

// for cicle to display the lists of numbers in the document
for (let i = 0; i < secretNumbers.length; i++){
    numberListEl.innerHTML += `<li>${secretNumbers[i]}</li>`
}


let time = 5;
countDownEl.textContent = time

const timer = setInterval(function(){
    time--
    countDownEl.textContent = time
    if(time === 0){
        clearInterval(timer)
        countDownEl.classList.add('d-none')
        numberListEl.classList.add('d-none')
        answersFormEl.classList.remove('d-none')
    }
}, 1000)