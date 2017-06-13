import { App } from "./../App";
import { CollisionListener } from "./../CollisionListener";
import { Player } from "./../Player";
import { Block } from "./../Block";
import { Enemy } from "./../Enemy";
import { EnemySpawnManager } from "./../EnemySpawnManager";
import { InputHandler } from "./../InputHandler";
import { Score } from "./../Score";
import * as box2d from "./../Box2D/Box2D";

export class GameScreen {
    private _app: App;

    private _canvas: HTMLCanvasElement;
    private _mainCanvasContext: CanvasRenderingContext2D;

    private _world: box2d.b2World;

    private _player: Player;
    private _floor: Block;
    private _wallLeft: Block;
    private _wallRight: Block;

    private _scale: number = 100;

    static readonly canvasWidth: number = 600;
    static readonly canvasHeight: number = 400;

    private _inputHandler: InputHandler;

    private _enemies: Array<Enemy> = new Array<Enemy>();
    private _enemySpawnManager: EnemySpawnManager;

    private _score: Score;

    private _frameCount: number = 0;

    constructor(app: App) {
        this._app = app;

        this._canvas = document.getElementById("canvas");
        this._mainCanvasContext = this._canvas.getContext("2d");
        this._world = new box2d.b2World(new box2d.b2Vec2(0, -10));

        this._player = new Player(this._world, this._canvas, 2.95, 3);
        this._floor = new Block(this._canvas, this._world, 0, 0, 6, .1, box2d.b2BodyType.b2_staticBody);
        this._wallLeft = new Block(this._canvas, this._world, 0, 0, .1, 6, box2d.b2BodyType.b2_staticBody);
        this._wallRight = new Block(this._canvas, this._world, 6 - .1, 0, .1, 6, box2d.b2BodyType.b2_staticBody);

        this._world.SetContactListener(new CollisionListener(this));
        this._inputHandler = new InputHandler(this);

        this._enemySpawnManager = new EnemySpawnManager(this);

        this._score = new Score(this);

        // requestAnimationFrame(() => this.Render());
    }

    get app(): App {
        return this._app;
    }

    get player(): Player {
        return this._player;
    }

    get enemies(): Array<Enemy> {
        return this._enemies;
    }

    get frameCount(): number {
        return this._frameCount;
    }

    get canvas(): HTMLCanvasElement {
        return this._canvas;
    }

    get mainCanvasContext(): CanvasRenderingContext2D {
        return this._mainCanvasContext;
    }

    get world(): box2d.b2World {
        return this._world;
    }

    get floor(): Block {
        return this._floor;
    }

    get score(): Score {
        return this._score;
    }

    public Render() {

        // START UPDATE
        this._world.Step(1 / 60, 6, 2);
        this._player.Update();

        for (let enemy of this._enemies) {
            enemy.Update();
        }

        this._enemySpawnManager.Update();
        this._score.Update();

        this._frameCount++;
        // END UPDATE

        // START DRAW
        this._mainCanvasContext.clearRect(0, 0, this._canvas.clientWidth, this._canvas.clientHeight);

        // First draw score, it needs to be mirrored because whole scene is upside down.
        this._score.Draw();

        this._mainCanvasContext.save();
        this._mainCanvasContext.scale(this._scale, this._scale);

        this._player.Draw();
        this._floor.Draw();
        this._wallLeft.Draw();
        this._wallRight.Draw();

        for (let enemy of this._enemies) {
            enemy.Draw();
        }

        this._mainCanvasContext.restore();
        // END DRAW
    }
} 