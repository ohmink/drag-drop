class Board {
  constructor() {
    this.dragged = null;
    this.boxPositions = [];
    this.map = document.querySelector(".board");
  }

  init() {
    setDragEvent(this.dragged);
    this.setBoxEvent();

    const addButton = document.querySelector(".add_button");
    addButton.addEventListener("click", () => this.addBox(this));
  }

  setBoxEvent() {
    const boxs = document.querySelectorAll(".box");
    boxs.forEach((box) =>
      box.addEventListener("click", () => console.log("클릭"))
    );
  }

  addBox(that) {
    const newBox = new Box();
    newBox.box.id = `box_id_${that.boxPositions.length}`;
    that.map.appendChild(newBox.box);
    that.boxPositions.push({
      left: newBox.left,
      top: newBox.top,
      id: newBox.box.id,
    });

    console.log(that.boxPositions);
  }

  removeBox() {}

  moveBox() {}
}
