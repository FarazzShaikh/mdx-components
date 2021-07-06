import React from "react";
import { CanvasProvider } from "./providers/CanvasProvider";

function script(canvas) {
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const brush = canvas.getContext("2d");

  function Circle(x, y, dx, dy, radius) {
    (this.x = x), (this.y = y), (this.dx = dx), (this.dy = dy), (this.radius = radius);
    this.color = tasteTheRainbow();

    this.draw = function () {
      brush.beginPath();
      brush.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      brush.strokeStyle = "black";
      brush.fillStyle = this.color;
      brush.fill();
      brush.stroke();
    };

    //reverse the x or y coordinates when the circle touches the side
    this.update = function () {
      if (this.x + this.radius > canvas.offsetWidth || this.x - this.radius < 0) {
        this.dx = -this.dx;
      }
      if (this.y + this.radius > canvas.offsetHeight || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }
      this.x += this.dx;
      this.y += this.dy;

      this.draw();
    };
  }

  function tasteTheRainbow() {
    let hexColors = "ABCDEF0123456789";
    let skittlesMaker = "#";
    for (let i = 0; i < 6; i++) {
      skittlesMaker += hexColors[Math.floor(Math.random() * 16)];
    }
    return skittlesMaker;
  }

  const mouse = {
    x: undefined,
    y: undefined,
  };

  canvas.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
  });

  let circleArray = [];

  for (let i = 0; i < 5; i++) {
    const x = Math.random() * canvas.offsetWidth - 1;
    const y = Math.random() * canvas.offsetHeight - 1;
    const dx = (Math.random() - 0.5) * 10;
    const dy = (Math.random() - 0.5) * 10;
    const radius = Math.random() + 2 * (i + 1) * 3;
    circleArray.push(new Circle(x, y, dx, dy, radius));
  }

  //Create circles based on how long you hold the mouse down
  let timer = 0;

  canvas.addEventListener("mousedown", (event) => {
    timer = new Date();
  });

  canvas.addEventListener("mouseup", (event) => {
    let timePassed = (new Date() - timer) / 10;
    if (timePassed > 100) {
      timePassed = 100;
    }
    let radius = timePassed;
    timer = 0;

    const target = event.target;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    let dx = (Math.random() - 0.5) * 10;
    let dy = (Math.random() - 0.5) * 10;
    circleArray.push(new Circle(x, y, dx, dy, radius));
  });

  function animate() {
    brush.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    for (let i = 0; i < circleArray.length; i++) {
      circleArray[i].update();
    }
  }

  return animate;
}

export function Canvas2D() {
  return (
    <div
      style={{
        borderRadius: "10px",
        borderBottomLeftRadius: "0px",
        width: "100%",
        height: "300px",
      }}
    >
      <CanvasProvider script={script} />
    </div>
  );
}
