import { CommonSettings } from './commonSettings.js';

export class CommonFunctions extends CommonSettings {
  // 共通関数クラス
  constructor() {
    super();
  }

  //////// Methods ////////

  // APIコール
  async callApi(prefecture) {
    const res = await fetch(this.WAKIMIZUAPIURL + prefecture);
      let wakimizuObj = await res.json();
      return wakimizuObj;
  }

}