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
for (let i = 0; i < map.height; i++) {
    map.updatePosition('001',{x:0,y:i});
}
for (let i = 0; i < map.height; i++) {
    map.updatePosition('001',{x:map.width-1,y:i});
}
for (let i = 0; i < map.width; i++) {
    map.updatePosition('001',{x:i,y:map.height-1});
}

function renderMap() {
    ctx.fillStyle = '#440000';
    for (let y = 0; y < map.mainGrid.length; y++) {
        for (let x = 0; x < map.mainGrid[y].length; x++) {
            if (map.mainGrid[y][x] == '001') {
                ctx.fillRect(x*tileSize, y*tileSize, tileSize, tileSize);
            }
        }
    }

}

let lastTime = 0;
function animate(timeStamp) {
    //window.requestAnimationFrame(animate);
    ctx.fillStyle = '#111111';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    const deltaTime = timeStamp-lastTime;
    lastTime = timeStamp;
    renderMap();
}
animate(0);