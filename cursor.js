const cursor = document.querySelector("#cursor");

document.addEventListener("mousemove", onMouseMove);

function onMouseMove(e) {
  const x = e.clientX;
  const y = e.clientY;

  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
}
