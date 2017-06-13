import * as box2d from "./Box2D/Box2D";
import { Box2DObject } from "./Box2DObject";

export class Enemy extends Box2DObject {
    private _context: CanvasRenderingContext2D;

    private _width: number = .5;
    private _height: number = .5;

    private _isMovingLeft:boolean = true;
    private _horizontalForce = -1;

    constructor(canvas: HTMLCanvasElement, world: box2d.b2World, isMovingLeft:boolean) {
        super(world, 6.25, 0, .5, .5, 0, true, box2d.b2BodyType.b2_kinematicBody);

        // Enemy starts left and is moving right.
        if (!isMovingLeft) {
            this.body.SetPosition(new box2d.b2Vec2(-.25, .25));
            this._horizontalForce *= -1;
        }

        this._context = canvas.getContext("2d");
        this._isMovingLeft = isMovingLeft;

        this.body.SetGravityScale(0);
    }

    public Update() {
        this.Move();
    }

    public Draw() {

        // Translate so we start drawing at position of body.
        this._context.translate(this.body.GetPosition().x - (this._width / 2), this.body.GetPosition().y - (this._height / 2));

        // Draw a triangle.
        this._context.beginPath();
        this._context.moveTo(25 / 100, 50 / 100);
        this._context.lineTo(50 / 100, 0);
        this._context.lineTo(0, 0);
        this._context.closePath();
        this._context.fill();

        // Reset translate for next frame.
        this._context.translate(-(this.body.GetPosition().x - (this._width / 2)), -(this.body.GetPosition().y - (this._height / 2)));
    }

    public Move() {
        this.body.SetLinearVelocity(new box2d.b2Vec2(this._horizontalForce, 0));
    }
}