export class Map {
    constructor({height,width,tileCount}) {
        this.tileCount = tileCount || 1;
        this.height = height;
        this.width = width;
        this.mainGrid = this.setupGrid('000');
        this.offsetGrid = this.setupGrid(['000','000','000','000'],1);
    }
    render(ctx) {
        for (let y = 0; y < this.mainGrid.length; y++) {
            for (let x = 0; x < this.mainGrid[y].length; x++) {
                if (this.mainGrid[y][x] == '001') {
                    ctx.fillStyle = '#110000';
                    ctx.fillRect(x,y,1,1);
                }
            }
        }
    }
    updatePosition(key,position) {
        if (Number(key) >= 0 && Number(key) < this.tileCount) {
            this.mainGrid[position.y][position.x] = key;
            for (let y = 0; y < 2; y++) {
                for (let x = 0; x < 2; x++) {
                    for (let i = 0; i < 4; i++) {
                        this.offsetGrid[position.y+y][position.x+x][3-i] = key
                    }
                }
            }
        } else {
            console.error(`Wrong key: ${key}`)
        }
    }
    setupGrid(base,add=0) {
        const grid = [];
        for (let y = 0; y < this.height+add; y++) {
            const list = [];
            for (let x = 0; x < this.width+add; x++) {
                list.push(base);
            }
            grid.push(list);
        }
        return grid;
    }
}