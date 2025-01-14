// Canvases
const canvasLines = document.getElementById("canvas-lines");
const canvasShapes = document.getElementById("canvas-shapes");
const canvasFill = document.getElementById("canvas-fill");
const canvasStroke = document.getElementById("canvas-stroke");
const canvasFont = document.getElementById("canvas-font");
const canvasImages = document.getElementById("canvas-images");
const canvasClip = document.getElementById("canvas-transformations");
const canvasBaseAnimations = document.getElementById("canvas-base-animation");
const canvasAdvancedAnimations = document.getElementById(
  "canvas-advanced-animation"
);
// Contexts
const contextLines = canvasLines.getContext("2d");
const contextShapes = canvasShapes.getContext("2d");
const contextFill = canvasFill.getContext("2d");
const contextStroke = canvasStroke.getContext("2d");
const contextFont = canvasFont.getContext("2d");
const contextImages = canvasImages.getContext("2d");
const contextClip = canvasClip.getContext("2d");
const contextBaseAnimations = canvasBaseAnimations.getContext("2d");
const contextAdvancedAnimations = canvasAdvancedAnimations.getContext("2d");

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

  // Donut
  contextLines.beginPath();
  contextLines.arc(70, 310, 50, degreesToRadians(0), degreesToRadians(360));
  contextLines.arc(
    70,
    310,
    25,
    degreesToRadians(0),
    degreesToRadians(360),
    true
  );
  contextLines.fill();

  // SVG
  const searchPath =
    "M0.793274 9.87016C0.793274 8.5811 1.03546 7.37407 1.51984 6.24907C2.00421 5.11626 2.67609 4.12016 3.53546 3.26079C4.39484 2.40141 5.38702 1.72954 6.51202 1.24516C7.64484 0.760788 8.85577 0.5186 10.1448 0.5186C11.4339 0.5186 12.6409 0.760788 13.7659 1.24516C14.8987 1.72954 15.8948 2.40141 16.7542 3.26079C17.6136 4.12016 18.2855 5.11626 18.7698 6.24907C19.2542 7.37407 19.4964 8.5811 19.4964 9.87016C19.4964 10.9405 19.3245 11.9561 18.9808 12.917C18.6448 13.878 18.1761 14.7491 17.5745 15.5303L23.305 21.2959C23.43 21.4209 23.5237 21.5655 23.5862 21.7295C23.6566 21.8936 23.6917 22.0694 23.6917 22.2569C23.6917 22.5147 23.6331 22.7491 23.5159 22.96C23.4066 23.1709 23.2503 23.335 23.0472 23.4522C22.8441 23.5772 22.6097 23.6397 22.3441 23.6397C22.1566 23.6397 21.9769 23.6045 21.805 23.5342C21.6409 23.4717 21.4886 23.3741 21.348 23.2413L15.5823 17.4639C14.8167 18.0108 13.973 18.4405 13.0511 18.753C12.1292 19.0655 11.1605 19.2217 10.1448 19.2217C8.85577 19.2217 7.64484 18.9795 6.51202 18.4952C5.38702 18.0108 4.39484 17.3389 3.53546 16.4795C2.67609 15.6202 2.00421 14.628 1.51984 13.503C1.03546 12.3702 0.793274 11.1592 0.793274 9.87016ZM2.79718 9.87016C2.79718 10.8858 2.98468 11.8389 3.35968 12.7295C3.74249 13.6124 4.26984 14.3897 4.94171 15.0616C5.6214 15.7334 6.40265 16.2608 7.28546 16.6436C8.17609 17.0264 9.12921 17.2178 10.1448 17.2178C11.1605 17.2178 12.1097 17.0264 12.9925 16.6436C13.8831 16.2608 14.6644 15.7334 15.3362 15.0616C16.0081 14.3897 16.5355 13.6124 16.9183 12.7295C17.3011 11.8389 17.4925 10.8858 17.4925 9.87016C17.4925 8.85454 17.3011 7.90532 16.9183 7.02251C16.5355 6.13188 16.0081 5.35063 15.3362 4.67876C14.6644 3.99907 13.8831 3.47173 12.9925 3.09673C12.1097 2.71391 11.1605 2.52251 10.1448 2.52251C9.12921 2.52251 8.17609 2.71391 7.28546 3.09673C6.40265 3.47173 5.6214 3.99907 4.94171 4.67876C4.26984 5.35063 3.74249 6.13188 3.35968 7.02251C2.98468 7.90532 2.79718 8.85454 2.79718 9.87016Z";
  const search2D = new Path2D(searchPath);
  contextLines.fill(search2D);
};

const drawFill = () => {
  setGridForCanvas(
    contextFill,
    canvasFill.offsetWidth,
    canvasFill.offsetHeight
  );

  // Fill
  contextFill.beginPath();
  contextFill.arc(70, 70, 50, degreesToRadians(0), degreesToRadians(360));
  contextFill.fillStyle = "orange";
  contextFill.fill();

  // Transparency
  contextFill.beginPath();
  contextFill.arc(190, 70, 50, degreesToRadians(0), degreesToRadians(360));
  contextFill.fillStyle = "#b44fe3";
  contextFill.globalAlpha = 0.4;
  contextFill.fill();
  contextFill.globalAlpha = 1;

  // Linear gradient
  const linearGradient = contextFill.createLinearGradient(260, 20, 360, 120);
  linearGradient.addColorStop(0, "#f51dee");
  linearGradient.addColorStop(0.3, "#f51d45");
  linearGradient.addColorStop(1, "#1de6f5");
  contextFill.beginPath();
  contextFill.arc(310, 70, 50, degreesToRadians(0), degreesToRadians(360));
  contextFill.fillStyle = linearGradient;
  contextFill.fill();

  // Radial gradient
  const radialGradient = contextFill.createRadialGradient(
    55,
    180,
    15,
    70,
    190,
    50
  );
  radialGradient.addColorStop(0, "#ffffff");
  radialGradient.addColorStop(0.3, "#ededed");
  radialGradient.addColorStop(0.7, "#b5b5b5");
  radialGradient.addColorStop(1, "#828282");
  contextFill.beginPath();
  contextFill.arc(70, 190, 50, degreesToRadians(0), degreesToRadians(360));
  contextFill.fillStyle = radialGradient;
  contextFill.fill();

  // Conic gradient
  const conicGradient = contextFill.createConicGradient(0, 190, 190);
  conicGradient.addColorStop(0, "#ffe252");
  conicGradient.addColorStop(0.25, "#ffe252");
  conicGradient.addColorStop(0.25, "#60ff52");
  conicGradient.addColorStop(0.5, "#60ff52");
  conicGradient.addColorStop(0.5, "#ff5252");
  conicGradient.addColorStop(0.75, "#ff5252");
  conicGradient.addColorStop(0.75, "#457ff5");
  conicGradient.addColorStop(1, "#457ff5");
  contextFill.beginPath();
  contextFill.arc(190, 190, 50, degreesToRadians(0), degreesToRadians(360));
  contextFill.fillStyle = conicGradient;
  contextFill.fill();

  // Pattern
  const img = new Image();
  img.src = "./img/pattern.png";

  img.onload = () => {
    const pattern = contextFill.createPattern(img, "repeat");
    contextFill.beginPath();
    contextFill.arc(310, 190, 50, degreesToRadians(0), degreesToRadians(360));
    contextFill.fillStyle = pattern;
    contextFill.shadowOffsetX = null;
    contextFill.shadowOffsetY = null;
    contextFill.shadowColor = null;
    contextFill.fill();
  };

  // Shadow
  contextFill.beginPath();
  contextFill.arc(70, 310, 50, degreesToRadians(0), degreesToRadians(360));
  contextFill.fillStyle = "#f51dee";
  contextFill.shadowOffsetX = 10;
  contextFill.shadowOffsetY = 10;
  contextFill.shadowColor = "#1de6f5";
  contextFill.fill();
};

const drawStroke = () => {
  setGridForCanvas(
    contextStroke,
    canvasStroke.offsetWidth,
    canvasStroke.offsetHeight
  );

  // Line width
  for (let i = 0; i < 5; i++) {
    const lineWidth = 1 + 2 * i;
    contextStroke.lineWidth = lineWidth;

    contextStroke.beginPath();
    contextStroke.moveTo(20 + i * 10 + lineWidth, 20);
    contextStroke.lineTo(20 + i * 10 + lineWidth, 120);
    contextStroke.stroke();
  }

  contextStroke.lineWidth = 10;

  // Line cap
  const capOptions = ["butt", "round", "square"];
  capOptions.forEach((cap, i) => {
    contextStroke.lineCap = cap;
    contextStroke.beginPath();
    contextStroke.moveTo(100, 25 + i * 25);
    contextStroke.lineTo(200, 25 + i * 25);
    contextStroke.stroke();
  });

  contextStroke.lineCap = "butt";

  // Line join
  const joinOptions = ["round", "bevel", "miter"];
  joinOptions.forEach((join, i) => {
    contextStroke.lineJoin = join;
    contextStroke.beginPath();
    contextStroke.moveTo(230, 20 + i * 30);
    contextStroke.lineTo(250, 40 + i * 30);
    contextStroke.lineTo(270, 20 + i * 30);
    contextStroke.lineTo(290, 40 + i * 30);
    contextStroke.stroke();
  });

  // Line dash
  const lineDashOptions = [
    [15, 5],
    [5, 5, 20, 5],
    [5, 10],
  ];

  lineDashOptions.forEach((dash, i) => {
    contextStroke.setLineDash(dash);
    contextStroke.beginPath();
    contextStroke.moveTo(20, 150 + i * 25);
    contextStroke.lineTo(120, 150 + i * 25);
    contextStroke.stroke();
  });
};

const drawText = () => {
  setGridForCanvas(
    contextFont,
    canvasFont.offsetWidth,
    canvasFont.offsetHeight
  );

  contextFont.font = "20px Arial";
  contextFont.fillText("Hello world! Lorem ipsum.", 20, 40, 360);
  contextFont.textAlign = "center";
  contextFont.strokeText("Hello world", 200, 70, 360);
  contextFont.textAlign = "right";
  contextFont.fillText("Hello world! Lorem ipsum.", 380, 100, 360);
  contextFont.textAlign = "start";
  contextFont.fillText(
    "Hello world! Lorem ipsum. Lorem ipsum. Lorem ipsum.",
    20,
    130,
    360
  );
  const text = contextFont.measureText("Hello");
  console.log(text);
};

const drawImage = () => {
  setGridForCanvas(
    contextImages,
    canvasImages.offsetWidth,
    canvasImages.offsetHeight
  );

  const testImage = new Image();
  testImage.src = "./img/boats.jpg";

  // Image
  testImage.addEventListener("load", () => {
    contextImages.drawImage(testImage, 0, 0, 200, 100);
    contextImages.drawImage(testImage, 100, 100, 100, 200, 0, 110, 100, 200);
  });

  // Canvas
  contextImages.drawImage(canvasFill, 200, 200, 100, 100);
  contextImages.drawImage(canvasFill, 0, 100, 200, 200, 300, 200, 100, 100);
};

const drawClip = async () => {
  setGridForCanvas(
    contextClip,
    canvasClip.offsetWidth,
    canvasClip.offsetHeight
  );

  const image = new Image();
  image.src = "./img/red_bars.jpg";

  await new Promise((resolve) => {
    image.addEventListener("load", resolve);
  });

  contextClip.save();

  // Clip svg
  const searchPath =
    "M0.793274 9.87016C0.793274 8.5811 1.03546 7.37407 1.51984 6.24907C2.00421 5.11626 2.67609 4.12016 3.53546 3.26079C4.39484 2.40141 5.38702 1.72954 6.51202 1.24516C7.64484 0.760788 8.85577 0.5186 10.1448 0.5186C11.4339 0.5186 12.6409 0.760788 13.7659 1.24516C14.8987 1.72954 15.8948 2.40141 16.7542 3.26079C17.6136 4.12016 18.2855 5.11626 18.7698 6.24907C19.2542 7.37407 19.4964 8.5811 19.4964 9.87016C19.4964 10.9405 19.3245 11.9561 18.9808 12.917C18.6448 13.878 18.1761 14.7491 17.5745 15.5303L23.305 21.2959C23.43 21.4209 23.5237 21.5655 23.5862 21.7295C23.6566 21.8936 23.6917 22.0694 23.6917 22.2569C23.6917 22.5147 23.6331 22.7491 23.5159 22.96C23.4066 23.1709 23.2503 23.335 23.0472 23.4522C22.8441 23.5772 22.6097 23.6397 22.3441 23.6397C22.1566 23.6397 21.9769 23.6045 21.805 23.5342C21.6409 23.4717 21.4886 23.3741 21.348 23.2413L15.5823 17.4639C14.8167 18.0108 13.973 18.4405 13.0511 18.753C12.1292 19.0655 11.1605 19.2217 10.1448 19.2217C8.85577 19.2217 7.64484 18.9795 6.51202 18.4952C5.38702 18.0108 4.39484 17.3389 3.53546 16.4795C2.67609 15.6202 2.00421 14.628 1.51984 13.503C1.03546 12.3702 0.793274 11.1592 0.793274 9.87016ZM2.79718 9.87016C2.79718 10.8858 2.98468 11.8389 3.35968 12.7295C3.74249 13.6124 4.26984 14.3897 4.94171 15.0616C5.6214 15.7334 6.40265 16.2608 7.28546 16.6436C8.17609 17.0264 9.12921 17.2178 10.1448 17.2178C11.1605 17.2178 12.1097 17.0264 12.9925 16.6436C13.8831 16.2608 14.6644 15.7334 15.3362 15.0616C16.0081 14.3897 16.5355 13.6124 16.9183 12.7295C17.3011 11.8389 17.4925 10.8858 17.4925 9.87016C17.4925 8.85454 17.3011 7.90532 16.9183 7.02251C16.5355 6.13188 16.0081 5.35063 15.3362 4.67876C14.6644 3.99907 13.8831 3.47173 12.9925 3.09673C12.1097 2.71391 11.1605 2.52251 10.1448 2.52251C9.12921 2.52251 8.17609 2.71391 7.28546 3.09673C6.40265 3.47173 5.6214 3.99907 4.94171 4.67876C4.26984 5.35063 3.74249 6.13188 3.35968 7.02251C2.98468 7.90532 2.79718 8.85454 2.79718 9.87016Z";
  const search2D = new Path2D(searchPath);
  contextClip.translate(35, 35);
  contextClip.beginPath();
  contextClip.clip(search2D);
  contextClip.drawImage(image, 0, 0, 100, 100);
  contextClip.restore();
  contextClip.save();

  // Clip circle
  contextClip.beginPath();
  contextClip.arc(150, 50, 35, degreesToRadians(0), degreesToRadians(360));
  contextClip.clip();
  contextClip.drawImage(image, 100, 0, 100, 100);
  contextClip.restore();

  // Clip text
  contextClip.beginPath();
  contextClip.rect(200, 0, 100, 100);
  contextClip.arc(
    250,
    50,
    35,
    degreesToRadians(0),
    degreesToRadians(360),
    true
  );
  contextClip.clip();
  contextClip.drawImage(image, 200, 0, 100, 100);
};

const useBaseAnimations = () => {
  const init = () => {
    contextBaseAnimations.clearRect(
      0,
      0,
      canvasBaseAnimations.offsetWidth,
      canvasBaseAnimations.offsetHeight
    );
    setGridForCanvas(
      contextBaseAnimations,
      canvasBaseAnimations.offsetWidth,
      canvasBaseAnimations.offsetHeight
    );
    contextBaseAnimations.beginPath();
    contextBaseAnimations.arc(
      canvasBaseAnimations.offsetWidth / 2,
      canvasBaseAnimations.offsetHeight / 2,
      110,
      degreesToRadians(0),
      degreesToRadians(360)
    );
    contextBaseAnimations.strokeStyle = "grey";
    contextBaseAnimations.stroke();
  };

  const draw = () => {
    init();
    contextBaseAnimations.lineWidth = 2;
    contextBaseAnimations.save();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();

    contextBaseAnimations.translate(
      canvasBaseAnimations.offsetWidth / 2,
      canvasBaseAnimations.offsetHeight / 2
    );
    contextBaseAnimations.save();

    // Seconds line
    contextBaseAnimations.strokeStyle = "red";
    contextBaseAnimations.rotate(degreesToRadians(6 * seconds - 90));
    contextBaseAnimations.beginPath();
    contextBaseAnimations.lineTo(0, 0);
    contextBaseAnimations.lineTo(100, 0);
    contextBaseAnimations.stroke();

    contextBaseAnimations.restore();
    contextBaseAnimations.strokeStyle = "black";
    contextBaseAnimations.rotate(degreesToRadians(6 * minutes - 90));
    contextBaseAnimations.beginPath();
    contextBaseAnimations.lineTo(0, 0);
    contextBaseAnimations.lineTo(80, 0);
    contextBaseAnimations.stroke();

    contextBaseAnimations.restore();
    window.requestAnimationFrame(draw);
  };

  window.requestAnimationFrame(draw);
};

const useAdvancedAnimations = () => {
  let hue = 229;
  const point = {
    x: 200,
    y: 200,
    radius: 30,
    color: `hsl(${hue} 100% 50%)`,
    draw() {
      contextAdvancedAnimations.fillStyle = this.color;
      contextAdvancedAnimations.beginPath();
      contextAdvancedAnimations.moveTo(this.x, this.y);
      contextAdvancedAnimations.arc(
        this.x,
        this.y,
        this.radius,
        degreesToRadians(0),
        degreesToRadians(360)
      );
      contextAdvancedAnimations.closePath();
      contextAdvancedAnimations.fill();
    },
  };

  const updatePoint = () => {
    hue >= 360 ? (hue = 1) : hue++;
    point.color = `hsl(${hue} 100% 50%)`;
    point.draw();
  };

  canvasAdvancedAnimations.addEventListener("mousemove", (event) => {
    point.x = event.layerX;
    point.y = event.layerY;

    updatePoint();
  });

  point.draw();
};

drawShapes();
drawLines();
drawFill();
drawStroke();
drawText();
drawImage();
drawClip();

useBaseAnimations();
useAdvancedAnimations();
