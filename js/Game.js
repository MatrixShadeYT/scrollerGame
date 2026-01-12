export class Game {
    constructor({tileSize, height, width}) {
        this.tileSize = tileSize;
        this.height = height;
        this.width = width;
        this.getAssets();
        this.event = {
            update: false,
            interval: 200,
            timer: 0
        };
    }
    update(deltaTime) {
        if (this.event.timer < this.event.interval) {
            this.event.timer += deltaTime;
            this.event.update = false;
        } else {
            this.event.update = true;
            this.event.timer = 0;
        }
    }
    render(ctx) {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0,
            this.width*this.tileSize,
            this.height*this.tileSize
        );
        ctx.strokeStyle = 'black';
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                ctx.strokeRect(
                    this.tileSize*x,
                    this.tileSize*y,
                    this.tileSize,
                    this.tileSize
                );
            }
        }
    }
    getAssets() {
        const Assets = document.getElementById('assets');
    }
}