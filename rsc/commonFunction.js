import { CommonSettings } from './commonSettings.js';

export class CommonFunctions extends CommonSettings {
  // 共通関数クラス
  constructor() {
    super();
    //////// Constant ////////
    this.MAXNUMBER = 101;
    this.MINNUMBER = 30;
  }

  //////// Methods ////////

  // APIコール
  async callApi(prefecture) {
    const res = await fetch(this.WAKIMIZUAPIURL + prefecture);
      let wakimizuObj = await res.json();
      return wakimizuObj;
  }

  // 30〜100の乱数を返す
  getRandom() {
    let random = Math.floor(Math.random() * (this.MAXNUMBER + 1 - this.MINNUMBER) ) + this.MINNUMBER ;
    return random;
  }

}