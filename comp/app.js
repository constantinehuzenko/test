const btnsDel = document.querySelectorAll('.todo-del');
btnsDel.forEach((el) => {
  //const todoType = el.className
  const todoId = el.parentNode.getAttribute('data-id');
  el.addEventListener('click', () => this.remove(todoId));
});

const btnsTop = document.querySelectorAll('.todo-move-top');
btnsTop.forEach((el) => {
  const todoId = el.parentNode.getAttribute('data-id');
  let copy = el.parentNode.previousElementSibling;
  let todoNextId;
  if (copy) todoNextId = copy.getAttribute('data-id');
  el.addEventListener('click', () => this.moveTop(todoId, todoNextId));
});

const btnsDown = document.querySelectorAll('.todo-move-down');
btnsDown.forEach((el) => {
  const todoId = el.parentNode.getAttribute('data-id');
  let copy = el.parentNode.nextElementSibling;
  let todoNextId;
  if (copy) todoNextId = copy.getAttribute('data-id');
  el.addEventListener('click', () => this.moveDown(todoId, todoNextId));
});
