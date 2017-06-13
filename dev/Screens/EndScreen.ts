import { App } from "./../App";
import { GameScreen } from "./GameScreen";
import { IScreen } from "./IScreen";
import { Screens } from "./../App";

export class EndScreen implements IScreen {
    private _app:App;

    constructor(app:App){
        this._app = app;

        document.addEventListener('keydown', (e:KeyboardEvent) => {
            if (this._app.activeScreen == this) {
                console.log(e.keyCode);
                if (e.keyCode == 82) {
                    location.reload();
                }
            }
        });
    }

    public Render () {
        this.Draw();
    }

    public Draw () {
        this._app.mainCanvasContext.clearRect(0, 0, GameScreen.canvasWidth, GameScreen.canvasHeight);

        this._app.mainCanvasContext.save();
        this._app.mainCanvasContext.scale(1, -1);

        this._app.mainCanvasContext.fillStyle = "#000000";
        this._app.mainCanvasContext.fillRect(0, -GameScreen.canvasHeight, GameScreen.canvasWidth, GameScreen.canvasHeight);


        this._app.mainCanvasContext.font = '40px square';
        let text = "GAME OVER";
        let width = this._app.mainCanvasContext.measureText(text).width;
        this._app.mainCanvasContext.fillStyle = "#990000";
        this._app.mainCanvasContext.fillText(text, (GameScreen.canvasWidth / 2) - (width / 2), -300);

        this._app.mainCanvasContext.font = '48px square';
        text = this._app.gameScreen.score.time.toString();
        width = this._app.mainCanvasContext.measureText(text).width;
        this._app.mainCanvasContext.fillStyle = "#990000";
        this._app.mainCanvasContext.fillText(text, (GameScreen.canvasWidth / 2) - (width / 2), -200);

        this._app.mainCanvasContext.font = '32px square';
        text = "PRESS 'R' TO RESTART";
        width = this._app.mainCanvasContext.measureText(text).width;
        this._app.mainCanvasContext.fillStyle = "#990000";
        this._app.mainCanvasContext.fillText(text, (GameScreen.canvasWidth / 2) - (width / 2), -100);

        this._app.mainCanvasContext.restore();
    }
}