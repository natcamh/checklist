
const addBtn = document.getElementById('addBtn') as HTMLButtonElement;
const cardToDo = document.getElementById('cardToDo') as HTMLDivElement; 

addBtn.addEventListener('click', ()=>{
    const newTask = document.createElement('div');
    newTask.innerHTML =`
    <div class="task">
                    <img src="/assets/check.png" alt="check">
                    <p>Task</p>
                    <img src="/assets/arrow-pink.png" alt="in-progress"> 
                </div>
    `;
    cardToDo.appendChild(newTask);
})

