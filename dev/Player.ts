import * as box2d from "./Box2D/Box2D";
import {Box2DObject} from "./Box2DObject";

export class Player extends Box2DObject {
    private _context:CanvasRenderingContext2D;

    private _isMovingLeft:boolean;
    private _isMovingRight:boolean;
    private _horizontalForce = .2;
    private _maxHorizontalVelocity = 3;

    constructor (world:box2d.b2World, canvas:HTMLCanvasElement, positionX:number, positionY:number) {
        super(world, positionX, positionY, .1, .1, .5, false, box2d.b2BodyType.b2_dynamicBody);

        this._context = canvas.getContext("2d");
        
        this.body.SetFixedRotation(true);
    }

    set isMovingLeft (isMovingLeft:boolean) {
        this._isMovingLeft = isMovingLeft;
    }

    set isMovingRight (isMovingRight:boolean) {
        this._isMovingRight = isMovingRight;
    }

    public Update () {
        this.Move();
    }

    public Draw () {
        this._context.fillRect(this.body.GetPosition().x - this.width, this.body.GetPosition().y - this.height, this.width * 2, this.height * 2);
    }

    public Bounce () {

        // Make sure player bounces forever.
        if (this.body.GetLinearVelocity().y < 5) {
            this.body.SetLinearVelocity(new box2d.b2Vec2(this.body.GetLinearVelocity().x, 5));
        }
    }

    public Move () {
        if (this._isMovingLeft && this.body.GetLinearVelocity().x > -this._maxHorizontalVelocity) {
            this.body.ApplyForce(new box2d.b2Vec2(-this._horizontalForce, 0), this.body.GetWorldCenter(), false);
        }

        if (this._isMovingRight && this.body.GetLinearVelocity().x < this._maxHorizontalVelocity) {
            this.body.ApplyForce(new box2d.b2Vec2(this._horizontalForce, 0), this.body.GetWorldCenter(), false);
        }
    }
}