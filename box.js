class Box {
  constructor() {
    this.box = this.getBox();
    this.left = this.box.style.left;
    this.top = this.box.style.top;
  }

  setPosition(x, y) {
    this.left = x;
    this.top = y;
  }

  getBox() {
    const box = document.createElement("div");
    box.className = "box";
    box.draggable = "true";

    const dotContainer = document.createElement("div");
    dotContainer.className = "button_container";

    const dot = document.createElement("button");
    const dot2 = document.createElement("button");
    dot.className = "dot";
    dot2.className = "dot";
    dotContainer.appendChild(dot);
    dotContainer.appendChild(dot2);

    box.appendChild(dotContainer);

    return box;
  }
}
