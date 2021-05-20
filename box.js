class Box {
  constructor() {
    this.data = this.getBox();
    this.left = this.data.style.left;
    this.top = this.data.style.top;
    this.color = "";
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

    box.appendChild(dotContainer);
    // 이렇게 안하고 box.innerHTML로 삽입 가능

    return box;
  }
}
