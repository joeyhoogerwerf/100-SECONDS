import * as box2d from "./Box2D/Box2D";

export class Box2DObject {
    protected world:box2d.b2World;

    protected width:number;
	protected height:number;

	private position:box2d.b2Vec2;
	protected bodyType:box2d.b2BodyType;
	protected density:number;
	protected friction:number;
	protected restitution:number;
	public isSensor:boolean;
	
	public body:box2d.b2Body;
	public fixture:box2d.b2Fixture;

    constructor (world:box2d.b2World, positionX:number, positionY:number, width:number, height:number, restitution:number, isSensor:boolean, bodyType:box2d.b2BodyType) {

        this.world = world;
		this.width = width;
		this.height = height;
		this.position = new box2d.b2Vec2(positionX, positionY);
		this.bodyType = bodyType;
		this.density = 1;
		this.friction = .25;
		this.restitution = restitution;
		this.isSensor = isSensor;

		this.generateBox2DObject(this.width, this.height);
    }

    protected generateBox2DObject(width:number, height:number) {

		// Box2d creates shapes from a center point so we have to half our values.
		this.width = width / 2;
		this.height = height / 2;

		let bodyDef:box2d.b2BodyDef = new box2d.b2BodyDef();
		bodyDef.type = this.bodyType;
		bodyDef.position.Set(this.position.x + this.width, this.position.y + this.height);
		this.body = this.world.CreateBody(bodyDef);
		let rectangle:box2d.b2PolygonShape = new box2d.b2PolygonShape();
		rectangle.SetAsBox(this.width, this.height);

		let fixtureDef:box2d.b2FixtureDef = new box2d.b2FixtureDef();
		fixtureDef.shape = rectangle;
		fixtureDef.density = this.density;
		fixtureDef.friction = this.friction;
		fixtureDef.restitution = this.restitution;
		fixtureDef.isSensor = this.isSensor;
		this.fixture = this.body.CreateFixture(fixtureDef);
		this.fixture.SetUserData(this);
	}
}