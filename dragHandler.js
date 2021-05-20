/* 드래그 가능한 대상에서 이벤트 발생 */
const setDragEvent = (dragged) => {
  document.addEventListener("drag", () => {}, false);
  document.addEventListener(
    "dragstart",
    (e) => {
      dragged = e.target;
      e.target.style.opacity = 0.5;
    }, // 드래그 요소 반투명하게 보이도록 설정
    false
  );

  document.addEventListener(
    "dragend",
    (e) => (e.target.style.opacity = ""), // 드래그가 끝나면 투명도 원상복구
    false
  );

  /* 드롭 대상(보드)에서 이벤트 발생 */
  document.addEventListener("dragover", (e) => e.preventDefault(), false);

  document.addEventListener(
    // 드래그한 요소를 드롭 대상으로 이동
    "drop",
    (event) => {
      event.preventDefault();
      if (event.target.className == "board") {
        dragged.style.left = `${event.clientX - 50}px`;
        dragged.style.top = `${event.clientY - 50}px`;
      }
    },
    false
  );
};
