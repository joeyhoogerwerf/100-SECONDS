import {GameScreen} from "./Screens/GameScreen";
import { Enemy } from "./Enemy";

export class EnemySpawnManager {
    private _game:GameScreen;
    private _randomFrameCount:number;
    private _lastSpawnFrameCount:number = 0;

    constructor(game:GameScreen) {
        this._game = game;
        this._randomFrameCount = this.RandomIntFromInterval(70, 80);
        
        // Spawn enemy at start of game.
        this.SpawnEnemy();
    }

    public Update () {
        if ((this._game.frameCount - this._lastSpawnFrameCount) - this._randomFrameCount == 0) {
            this.SpawnEnemy();
            this._randomFrameCount = this.RandomIntFromInterval(70, 80);
            this._lastSpawnFrameCount = this._game.frameCount;
        }
    }

    private SpawnEnemy() {
        let isMovingLeft = false;

        if (Math.random() > .5) {
            isMovingLeft = true;
        }
        
        console.log(isMovingLeft);
        

        this._game.enemies.push(new Enemy(this._game.canvas, this._game.world, isMovingLeft));
    }

    private RandomIntFromInterval(min:number, max:number){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}