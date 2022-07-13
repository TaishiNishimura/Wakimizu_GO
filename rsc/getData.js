import { CommonFunctions } from './commonFunction.js';

export class GetData extends CommonFunctions {
  //クラス
  constructor() {
    super();
    //////// let ////////
  }

  //////// Methods ////////

  // 各種情報を抽出
  getData(lists, selectNum) {
    // アドレスを抽出
    this.targetAddress = lists['result'][selectNum]['address'];
    // 名前を抽出
    this.targetName = lists['result'][selectNum]['name'];
    // ふりがなを抽出
    this.targetFurigana = lists['result'][selectNum]['furigana'];
    // 概要を抽出
    this.targetOverview= lists['result'][selectNum]['overview'];
    // 環境保全活動を抽出
    this.targetActivity = lists['result'][selectNum]['activity'];
  }

  createData() {
    console.log(this.targetName)
  }
}
