import { App } from "./../App";
import { GameScreen } from "./GameScreen";
import { Screens } from "./../App";

export class StartScreen {

    private _app:App;

    constructor(app:App){
        this._app = app;

        document.addEventListener('keydown', (e:KeyboardEvent) => {
            if (this._app.activeScreen == Screens.START) {
                // console.log(e.keyCode);
                if (e.keyCode == 32) {
                    console.log();
                    
                    this._app.SwitchScreen(Screens.GAME);
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
        
        this._app.mainCanvasContext.font = '48px square';
        let text = "SURVIVE 100 SECONDS";
        let width = this._app.mainCanvasContext.measureText(text).width;
        this._app.mainCanvasContext.fillText(text, (GameScreen.canvasWidth / 2) - (width / 2), -300);

        this._app.mainCanvasContext.font = '38px square';
        text = "MOVE WITH 'A' AND 'D'";
        width = this._app.mainCanvasContext.measureText(text).width;
        this._app.mainCanvasContext.fillText(text, (GameScreen.canvasWidth / 2) - (width / 2), -200);

        this._app.mainCanvasContext.font = '28px square';
        text = "PRESS SPACEBAR TO BEGIN";
        width = this._app.mainCanvasContext.measureText(text).width;
        this._app.mainCanvasContext.fillText(text, (GameScreen.canvasWidth / 2) - (width / 2), -100);

        this._app.mainCanvasContext.restore();
    }
}