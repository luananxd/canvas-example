// Canvases
const canvasLines = document.getElementById("canvas-lines");
const canvasShapes = document.getElementById("canvas-shapes");
const canvasFill = document.getElementById("canvas-fill");
// Contexts
const contextLines = canvasLines.getContext("2d");
const contextShapes = canvasShapes.getContext("2d");
const contextFill = canvasFill.getContext("2d");

const degreesToRadians = (degrees) => {
  return (degrees * Math.PI) / 180;
};

const setGridForCanvas = (context, width, height) => {
  const gridSize = 100;
  const columns = Math.ceil(width / gridSize);
  const rows = Math.ceil(height / gridSize);

  context.strokeStyle = "lightgrey";

  for (let column = 0; column < columns; column++) {
    for (let row = 0; row < rows; row++) {
      const x = column * gridSize;
      const y = row * gridSize;
      context.strokeRect(x, y, gridSize, gridSize);
    }
  }

  context.strokeStyle = "black";
};

const clearCanvas = (context) => {
  context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
};

const drawShapes = () => {
  setGridForCanvas(
    contextShapes,
    canvasShapes.offsetWidth,
    canvasShapes.offsetHeight
  );

  contextShapes.fillRect(20, 20, 100, 100);
  contextShapes.strokeRect(140, 20, 100, 100);
  contextShapes.fillRect(260, 20, 100, 100);
  contextShapes.clearRect(280, 40, 60, 60);
};

const drawLines = () => {
  setGridForCanvas(
    contextLines,
    canvasLines.offsetWidth,
    canvasLines.offsetHeight
  );

  // Triangle
  contextLines.moveTo(20, 120);
  contextLines.beginPath();
  contextLines.lineTo(120, 120);
  contextLines.lineTo(70, 20);
  contextLines.lineTo(20, 120);
  contextLines.closePath();
  contextLines.fill();

  // Circle
  contextLines.moveTo(140, 20);
  contextLines.beginPath();
  contextLines.arc(190, 70, 50, degreesToRadians(0), degreesToRadians(360));
  contextLines.closePath();
  contextLines.stroke();

  // Arc
  contextLines.beginPath();
  contextLines.moveTo(360, 20);
  contextLines.arcTo(260, 70, 360, 120, 10);
  contextLines.stroke();

  // Packman
  contextLines.moveTo(20, 140);
  contextLines.beginPath();
  contextLines.arc(70, 190, 50, degreesToRadians(30), degreesToRadians(330));
  contextLines.lineTo(70, 190);
  contextLines.lineTo(113, 215);
  contextLines.closePath();
  contextLines.fill();

  // Quadratic curve
  contextLines.beginPath();
  contextLines.moveTo(140, 240);
  contextLines.quadraticCurveTo(190, 70, 240, 240);
  contextLines.stroke();

  // Bezier curve
  contextLines.beginPath();
  contextLines.moveTo(260, 240);
  contextLines.bezierCurveTo(280, 100, 340, 100, 360, 240);
  contextLines.stroke();
};

const drawFill = () => {};

drawShapes();
drawLines();
drawFill();
