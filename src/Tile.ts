import TileSet from "./TileSet";

export default class Tile {
  private static getTextures(tile: ITileData, tileSet: TileSet) {
    const textures = [];

    if (tile.animations.length) {
      tile.animations.forEach(frame => {
        textures.push(tileSet.textures[frame.tileId]);
      });
    } else {
      textures.push(tileSet.textures[tile.gid - tileSet.firstGid]);
    }

    return textures;
  }

  public animations: IAnimation[] = [];
  public animationSpeed: number = 0;
  public gid: number = 0;
  public x: number = 0;
  public y: number = 0;
  public tile: ITileData;
  public tileSet: TileSet;
  public textures: PIXI.Texture[];
  public horizontalFlip: boolean;
  public verticalFlip: boolean;
  public diagonalFlip: boolean;

  constructor(
    tile: ITileData,
    tileSet: TileSet,
    horizontalFlip: boolean,
    verticalFlip: boolean,
    diagonalFlip: boolean
  ) {
    this.textures = Tile.getTextures(tile, tileSet);
    this.tile = tile;
    this.tileSet = tileSet;
    this.horizontalFlip = horizontalFlip;
    this.verticalFlip = verticalFlip;
    this.diagonalFlip = diagonalFlip;

    Object.assign(this, tile);

    this.flip();
  }

  public gotoAndPlay(frame: number) {
    console.log("gotoAndPlay is not implemented " + frame);
  }

  private flip() {
    console.log("Flip is not implemented");
    // if (this.horizontalFlip) {
    //   this.anchor.x = 1;
    //   this.scale.x = -1;
    // }

    // if (this.verticalFlip) {
    //   this.anchor.y = 1;
    //   this.scale.y = -1;
    // }

    // if (this.diagonalFlip) {
    //   if (this.horizontalFlip) {
    //     this.anchor.x = 0;
    //     this.scale.x = 1;
    //     this.anchor.y = 1;
    //     this.scale.y = 1;

    //     this.rotation = PIXI.DEG_TO_RAD * 90;
    //   }
    //   if (this.verticalFlip) {
    //     this.anchor.x = 1;
    //     this.scale.x = 1;
    //     this.anchor.y = 0;
    //     this.scale.y = 1;

    //     this.rotation = PIXI.DEG_TO_RAD * -90;
    //   }
    // }
  }
}
