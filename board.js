class Board {
  constructor() {
    this.dragged = null;
    this.boxes = [];
    this.map = document.querySelector(".board");
  }

  init() {
    setDragEvent(this.dragged);
    this.setBoxEvent();

    const addButton = document.querySelector(".add_button");
    addButton.addEventListener("click", () => this.addBox(this));

    const removeButton = document.querySelector(".remove_button");
    removeButton.addEventListener("click", (e) => this.removeBox(this, e));
  }

  setBoxEvent() {}

  addBox(that) {
    const newBox = new Box();
    newBox.data.id = `box_id_${that.boxes.length}`;
    that.map.appendChild(newBox.data);
    that.boxes.push(newBox);
  }

  removeBox(that) {
    const mouseOver = (t) => (t.style.backgroundColor = "red");
    const mouseOut = (t) => (t.style.backgroundColor = "antiquewhite");

    that.map.style.cursor = "pointer";

    that.boxes.forEach((box) => {
      box.data.addEventListener("mouseover", (e) => mouseOver(e.target));
      box.data.addEventListener("mouseout", (e) => mouseOut(e.target));
      box.data.addEventListener("click", (e) => {
        const board = document.querySelector(".board");
        board.removeChild(e.target);
        that.map.style.cursor = "default";
      });
    });
  }

  moveBox() {}
}
