import { GameEngine } from "./core/engineBase.js";
import { HoleWorld } from "./holeWorld.js";


/** Game engine for hole in the wall. */
export class HoleEngine extends GameEngine {

    public constructor() {
        super()
        this.startingWorld = HoleWorld;
    }
}
