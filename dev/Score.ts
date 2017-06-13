import {GameScreen} from "./Screens/GameScreen";

export class Score {
    private _game:GameScreen;
    private _time:number = 100;

    constructor(game:GameScreen){
        this._game = game;
    }

    get time(): number {
        return this._time;
    }

    public Update () {
        if (this._game.frameCount % 60 == 0 && this._game.frameCount != 0) {
            this._time--;
        }
    }

    public Draw () {
        this._game.mainCanvasContext.save();
        this._game.mainCanvasContext.scale(1, -1);
        this._game.mainCanvasContext.font = '48px square';

        let text = this._time.toString();
        let width = this._game.mainCanvasContext.measureText(text).width;
        this._game.mainCanvasContext.fillText(text, (GameScreen.canvasWidth / 2) - (width / 2), -200);
        this._game.mainCanvasContext.restore();
    }
}