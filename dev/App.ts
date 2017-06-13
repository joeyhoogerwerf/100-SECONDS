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

    private _activeScreen:Screens;  
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
    }

    get canvas(): HTMLCanvasElement {
        return this._canvas;
    }

    get mainCanvasContext(): CanvasRenderingContext2D {
        return this._mainCanvasContext;
    }

    get activeScreen(): Screens {
        return this._activeScreen;
    }

    get gameScreen(): GameScreen {
        return this._gameScreen;
    }

    public SwitchScreen (screen:Screens) {
        this._activeScreen = screen;
    }

    private GameLoop() {
        // console.log('app is runnin');
        
        switch (this._activeScreen) {
            case Screens.START:
                this._startScreen.Render();
                break;
            case Screens.GAME:
                this._gameScreen.Render();
                break;
            case Screens.END:
                this._endScreen.Render();
                break;
        }

        requestAnimationFrame(() => this.GameLoop());
    }
}