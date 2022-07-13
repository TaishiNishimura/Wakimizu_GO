import { CommonSettings } from './commonSettings.js';

export class CommonFunctions extends CommonSettings {
  // 共通関数クラス
  constructor() {
    super();
    //////// Constant ////////
    this.MaxNumber = 101;
    this.MinNumber = 30;
    this.CalculationNumber = 1
  }

  //////// Methods ////////

  // APIコール
  async callApi(prefecture) {
    const res = await fetch(this.WakimizuApiUrl + prefecture);
      let wakimizuObj = await res.json();
      return wakimizuObj;
  }

  // 30〜100の乱数を返す
  getRandom() {
    let random = Math.floor(
      Math.random() * (this.MaxNumber + this.CalculationNumber - this.MinNumber)
    ) + this.MinNumber ;
    return random;
  }
}
