const input = document.querySelector('.todo-input');
const button = document.querySelector('.todo-button');
const list = document.querySelector('.todo-list');
const deleteComplete = document.querySelector('.delete-complete');

button.addEventListener('click', add);
list.addEventListener('click', checkDelete);
deleteComplete.addEventListener('click', deleteCompleted);

itemLeft();

function add(event) {
  event.preventDefault();

  const newTodo = document.createElement('li');
  newTodo.innerText = input.value;
  newTodo.classList.add('todo-item');

  const completedButton = document.createElement('button');
  completedButton.innerHTML = '&#10003';
  completedButton.classList.add('done');
  newTodo.appendChild(completedButton);

  const trashButton = document.createElement('button');
  trashButton.innerHTML = '&#128465';
  trashButton.classList.add('delete');
  newTodo.appendChild(trashButton);

  const x = input.value;
  x.trim() !== ''
    ? list.appendChild(newTodo)
    : alert('You must write something!');

  input.value = '';

  itemLeft();
}

function checkDelete(e) {
  const item = e.target;

  item.classList[0] === 'delete' ? item.parentElement.remove() : null;
  item.classList[0] === 'done'
    ? item.parentElement.classList.toggle('complete')
    : null;

  itemLeft();
}

function deleteCompleted(e) {
  const item = e.target;
  const elements = document.getElementsByClassName('complete');
  const htmlButtonsArray = [...elements];
  //console.log(htmlButtonsArray)
  htmlButtonsArray.map((i) => i.parentNode.removeChild(i));

  // elements.map(i => console.log(i));

  //   while(elements.length){
  //     elements[0].parentNode.removeChild(elements[0])
  //   }

  itemLeft();
}

function itemLeft() {
  const count = [...document.querySelectorAll('li:not(.complete)')].length;
  const totalItems = document.querySelector('.left.total');

  totalItems.innerHTML = count === 0 ? '' : count + ' items remaining';
}
