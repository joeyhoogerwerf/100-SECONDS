import * as box2d from "./Box2D/Box2D";
import {Box2DObject} from "./Box2DObject";

export class Block extends Box2DObject{    
    private context:CanvasRenderingContext2D;

    constructor (canvas:HTMLCanvasElement, world:box2d.b2World, positionX:number, positionY:number, width:number, height:number, bodyType:box2d.b2BodyType) {
        super(world, positionX, positionY, width, height, 0, false, box2d.b2BodyType.b2_staticBody);
        this.context = canvas.getContext("2d");
    }

    public Update () {

    }

    public Draw () {
        this.context.fillRect(this.body.GetPosition().x - (this.width), this.body.GetPosition().y - (this.height), this.width * 2, this.height * 2);
    }
}