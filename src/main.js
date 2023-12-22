var addBtn = document.getElementById('addBtn');
var cardToDo = document.getElementById('cardToDo');
addBtn.addEventListener('click', function () {
    var newTask = document.createElement('div');
    newTask.innerHTML = "\n    <div class=\"task\">\n                    <img src=\"/assets/check.png\" alt=\"check\">\n                    <p>Task</p>\n                    <img src=\"/assets/arrow-pink.png\" alt=\"in-progress\"> \n                </div>\n    ";
    cardToDo.appendChild(newTask);
});
