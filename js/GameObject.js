export class GameObject {
    constructor({position,height,width,scale}) {
        this.position = position || {x:0,y:0};
        this.velocity = {x: 0, y: 0};
        this.height = height || 1;
        this.width = width || 1;
        this.scale = scale || 1;
    }
}