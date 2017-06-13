import {GameScreen} from "./Screens/GameScreen";

export class InputHandler {
    private _game:GameScreen;

    constructor (game:GameScreen) {
        this._game = game;

        this.InitializeListeners();
    }

    private InitializeListeners () {        
        document.addEventListener('keydown', this.HandleKeyDown.bind(this));
        document.addEventListener('keyup', this.HandleKeyUp.bind(this));
    }

    private HandleKeyDown (e:KeyboardEvent) {
        // console.log(e.keyCode);

        switch (e.keyCode) {
            case 65:
                this._game.player.isMovingLeft = true;
                break;
        
            case 68:
                this._game.player.isMovingRight = true;
                break;
        }
    }

    private HandleKeyUp (e:KeyboardEvent) {
        // console.log(e.keyCode);

        switch (e.keyCode) {
            case 65:
                this._game.player.isMovingLeft = false;
                break;
        
            case 68:
                this._game.player.isMovingRight = false;
                break;
        }
    }
}