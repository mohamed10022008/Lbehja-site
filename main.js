const btn = document.querySelector(".btn");
btn.addEventListener("mousemove", (e) => {
  const xPos = e.pageX - e.target.offsetLeft;
  const yPos = e.pageY - e.target.offsetTop;

  e.target.style.setProprety("--x", '${xPos}px');
  e.target.style.setProprety("--y", '${yPos}px');
});
