const moveTop = (id, prevId) => {
  let idIndex;
  let idIndexPrev;
  let i = 0;
  this.data.forEach((el) => {
    if (el.id == prevId) idIndexPrev = i;
    if (el.id == id) idIndex = i;
    if (el.id == id) {
      if (idIndex && idIndexPrev >= 0) {
        let copyTodoElem = this.data[idIndex];
        this.data[idIndex] = this.data[idIndexPrev];
        this.data[idIndexPrev] = copyTodoElem;
      }
    }
    i++;
  });
  todosList.render();
};

const dataSort = () => {
  console.log('yo');

  if (sorting.selectedIndex == 2) {
    this.data.sort(function (a, b) {
      if (a.text > b.text) {
        return 1;
      }
      if (a.text < b.text) {
        return -1;
      }
      // a должно быть равным b
      return 0;
    });
    todosList.render();

    console.log('hyo');
  }
};
