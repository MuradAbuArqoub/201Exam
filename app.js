
const formEl = document.querySelector('form');
const tbodyEl = document.querySelector('tbody');
let btn = document.querySelector('submit');
let output = document.querySelector('submit');



const cars = ['KIA', 'BMW', 'FORD'];



function showCar(){
    let data = localStorage.getItem('std');
    let normalObj  = JSON.parse(data);
}



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

 

function renderedInfo(e) {
    e.preventDefault();
    const cusName = document.getElementById('cusName').value;
    const model = document.getElementById('model').value;
    
    tbodyEl.innerHTML += `
        <tr>
            <td></td>
            <td>${cusName} \n ${model} \n ${getRndInteger(1000, 10000)}</td>
        <tr>
    `;
}

formEl.addEventListener('submit', renderedInfo);

window.localStorage.setItem('user', JSON.stringify(cusName, model, getRndInteger));