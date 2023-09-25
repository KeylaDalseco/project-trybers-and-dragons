import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 0;
  private static _instance = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._instance += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  get dexterity(): number {
    return this.dexterity;
  }

  get name(): string {
    return this.name;
  }

  static override createdRacesInstances(): number {
    return this._instance;
  }
}
