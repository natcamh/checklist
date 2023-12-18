"use strict";
// Buttons
const addBtn = document.getElementById('addBtn');
const checkBtn = document.querySelector('checkBtn');
const arrowBtn = document.getElementById('arrowBtn');

//Cards
const cardToDo = document.getElementById('cardToDo');
const cardInProgress = document.getElementById('cardInProgress');
const cardDone = document.getElementById('cardDone');


addBtn.addEventListener('click', ()=>{
    createTask();
})

function createTask(){
    const newTask = document.createElement('div');
    newTask.innerHTML =`
    <div class="task">
        <img src="/assets/check.png" alt="check" id="checkBtn">
        <p>Task</p>
        <img src="/assets/arrow-pink.png" alt="in-progress" id="arrowBtn"> 
    </div>
    `;
    cardToDo.appendChild(newTask);
    moveTask(checkBtn, cardDone, newTask);
}

function moveTask(btn, card, task){
    btn.addEventListener('click', ()=>{
        card.innerHTML = task;
        card.appendChild(task);

    });
}

//MANEJO POR ESTADO por variable 


