import { IScreen } from "./Screens/IScreen";
import { StartScreen } from "./Screens/StartScreen";
import { GameScreen } from "./Screens/GameScreen";
import { EndScreen } from "./Screens/EndScreen";

export enum Screens {
    START,
    GAME,
    END
}

export class App {
    private _canvas: HTMLCanvasElement;
    private _mainCanvasContext: CanvasRenderingContext2D;

    private _activeScreen:IScreen;  
    private _startScreen:StartScreen;
    private _gameScreen:GameScreen;
    private _endScreen:EndScreen;

    constructor() {
        this._canvas = document.getElementById("canvas");
        this._mainCanvasContext = this._canvas.getContext("2d");

        this._startScreen = new StartScreen(this);
        this._gameScreen = new GameScreen(this);
        this._endScreen = new EndScreen(this);

        this.SwitchScreen(Screens.START);

        requestAnimationFrame(() => this.GameLoop());
        console.log('new gam123');
    }

    get canvas(): HTMLCanvasElement {
        return this._canvas;
    }

    get mainCanvasContext(): CanvasRenderingContext2D {
        return this._mainCanvasContext;
    }

    get activeScreen(): IScreen {
        return this._activeScreen;
    }

    get gameScreen(): GameScreen {
        return this._gameScreen;
    }

    public SwitchScreen (screen:Screens) {
        switch (screen) {
            case Screens.START:
                this._activeScreen = this._startScreen;
                break;
            case Screens.GAME:
                this._activeScreen = this._gameScreen;
                break;
            case Screens.END:
                this._activeScreen = this._endScreen;
                break;
        }
    }

    private GameLoop() {
        // console.log('app is runnin');
        this._activeScreen.Render();

        requestAnimationFrame(() => this.GameLoop());
    }
}