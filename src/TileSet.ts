export default class TileSet implements ITileSetData {

  public firstGid: number = 0;
  public baseTexture: PIXI.Texture;
  public textures: PIXI.Texture[];
  public margin: number = 0;
  public spacing: number = 0;
  public tileHeight: number = 0;
  public tileWidth: number = 0;
  public image: {
    source: string;
    height: number;
    width: number;
  } = {
    height: 0,
    source: '',
    width: 0,
  };
  public tileOffset?: {
    x: number;
    y: number;
  };

  constructor(route: string, tileSet: ITileSetData) {
    Object.assign(this, tileSet);

    this.baseTexture = PIXI.Texture.fromImage(`${route}/${this.image.source}`, false, PIXI.SCALE_MODES.NEAREST);

    this.textures = [];

    for (let y = this.margin; y < this.image.height; y += this.tileHeight + this.spacing) {
      for (let x = this.margin; x < this.image.width; x += this.tileWidth + this.spacing) {
        if (this.baseTexture instanceof PIXI.BaseTexture) {
          this.textures.push(
            new PIXI.Texture(this.baseTexture, new PIXI.Rectangle(x, y, this.tileWidth, this.tileHeight)),
          );
        }
      }
    }
  }
}
