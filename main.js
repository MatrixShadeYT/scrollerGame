import { Map } from './js/Map.js';
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
var canvasRatio = canvas.width/canvas.height;
canvas.width = canvas.height*(16/10);
var tileSize = canvasRatio*7.5;

const map = new Map({
    tileCount: 2,
    height: 10,
    width: 16
});
for (let i = 0; i < 4; i++) {
    map.updatePosition('001',{x:i,y:3});
}
for (let i = map.height-2; i < map.height; i++) {
    map.updatePosition('001',{x:3,y:i});
}
for (let i = 0; i < map.height-1; i++) {
    map.updatePosition('001',{x:map.width-1,y:i});
}
for (let i = 0; i < 4; i++) {
    map.updatePosition('001',{x:i,y:map.height-3});
}
for (let i = 4; i < map.width; i++) {
    map.updatePosition('001',{x:i,y:map.height-1});
}

let lastTime = 0;
function animate(timeStamp) {
    window.requestAnimationFrame(animate);
    const deltaTime = timeStamp-lastTime;
    lastTime = timeStamp;
    ctx.fillStyle = '#222222';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.save();
    ctx.scale(tileSize,tileSize);
    map.render(ctx);
    ctx.restore();
}
window.requestAnimationFrame(animate);