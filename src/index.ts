// import { v4 as uuidV4 } from 'uuid';
import confetti from 'canvas-confetti';

confetti.create(document.getElementById('canvas') as HTMLCanvasElement, {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 200 });

// console.log(uuidV4());

const list = document.querySelector("#list");