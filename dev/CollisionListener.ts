import * as box2d from "./Box2D/Box2D";
import {GameScreen} from "./Screens/GameScreen";
import { Screens } from "./App";

export class CollisionListener implements box2d.b2ContactListener { 
    private _game:GameScreen;

    constructor (game:GameScreen) {
        this._game = game;   
    }

    public BeginContact(contact: box2d.b2Contact): void {
        for (let enemy of this._game.enemies) {
            
            // Check if player collides with enemy.
            if (contact.GetFixtureA().GetUserData() == enemy && contact.GetFixtureB().GetUserData() == this._game.player
                || contact.GetFixtureB().GetUserData() == enemy && contact.GetFixtureA().GetUserData() == this._game.player) {
                console.log('GAME OVER');
                this._game.app.SwitchScreen(Screens.END);
            }
        }

        
    }
    
    public EndContact(contact: box2d.b2Contact): void {

        // 
        if (contact.GetFixtureA().GetUserData() == this._game.player && contact.GetFixtureB().GetUserData() == this._game.floor
            || contact.GetFixtureB().GetUserData() == this._game.player && contact.GetFixtureA().GetUserData() == this._game.floor) {
            this._game.player.Bounce();
        }
    }
    public BeginContactFixtureParticle(system: box2d.b2ParticleSystem, contact: box2d.b2ParticleBodyContact): void {

    }
    public EndContactFixtureParticle(system: box2d.b2ParticleSystem, contact: box2d.b2ParticleBodyContact): void {

    }
    public BeginContactParticleParticle(system: box2d.b2ParticleSystem, contact: box2d.b2ParticleContact): void {

    }
    public EndContactParticleParticle(system: box2d.b2ParticleSystem, contact: box2d.b2ParticleContact): void {

    }
    public PreSolve(contact: box2d.b2Contact, oldManifold: box2d.b2Manifold): void {

    }
    public PostSolve(contact: box2d.b2Contact, impulse: box2d.b2ContactImpulse): void {

    }
}