const arrowSvg = document.querySelector("svg");
window.addEventListener("resize", function () {
  const windowWidth = window.innerWidth;

  // Set the SVG fill color based on the window width and height.
  if (windowWidth >= 768) {
    arrowSvg.setAttribute("fill", "#685bf6");
  } else {
    arrowSvg.setAttribute("fill", "#f0eff1");
  }
});