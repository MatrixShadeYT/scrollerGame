import { Game } from './js/Game.js';
const canvas = document.getElementById('game');
var canvasRatio = canvas.width/canvas.height;
canvas.width = canvas.height*(16/10);
const ctx = canvas.getContext('2d');
const game = new Game({
    tileSize: canvasRatio*7.5,
    height: 10,
    width: 16
});

let lastTime = 0;
function animate(timeStamp) {
    window.requestAnimationFrame(animate);
    ctx.fillStyle = '#060025';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    const deltaTime = timeStamp-lastTime;
    lastTime = timeStamp;
    game.update(deltaTime);
    game.render(ctx);
}
window.requestAnimationFrame(animate);