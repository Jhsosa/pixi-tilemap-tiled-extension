import { Tiled } from "./Tiled";
import tiledMapLoader from "./tiledMapLoader";

declare global {
  namespace PIXI.tilemap {
    interface ITiled {
      Tiled: Tiled;
    }
  }
}

PIXI.loaders.Loader.addPixiMiddleware(tiledMapLoader);
PIXI.loader.use(tiledMapLoader.call(PIXI.loader));

Object.assign(PIXI.tilemap, { Tiled });

export default Tiled;
