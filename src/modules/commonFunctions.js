import { CommonSettings } from './commonSettings.js';

export class CommonFunctions extends CommonSettings {
  // 共通関数クラス
  constructor() {
    super();
    this.maxNumber = 101;
    this.minNumber = 30;
    this.calculationNumber = 1
    this.noname = "名無の湧水";
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
      Math.random() * (this.maxNumber + this.calculationNumber - this.minNumber)
    ) + this.minNumber;
    return random;
  }

  // 名前がnullの場合、「名無の湧水」という名前を付与
  nameCheck(name) {
    if (name === null) {
      name = this.noname
      return name
    }
    return name
  }

  // 半角スペースを改行タグに置換
  getBr(str) {
    let strBr = str.replace(/\s/g, this.break);
    return strBr
  }

  // 前回生成した要素を削除（初期化)
  removeElement(idName) {
    let elem = document.getElementById(idName);
    if (elem.hasChildNodes()) {
      while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
      }
    }
  }
}
