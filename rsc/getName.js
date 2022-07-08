import { CommonFunctions } from './commonFunction.js';

export class GetName extends CommonFunctions {
  //湧水名を取得するクラス
  constructor() {
    super();
    //////// let ////////
    this.nameList = [];
  }

  //////// Methods ////////

  // レスポンスオブジェクトから湧水名を返す
  async getName(prefecture) {
    const lists = await this.callApi(prefecture);
    for (let list in lists.result) {
      let data = lists["result"][list]["name"];
      // nullの場合、名前を付与
      if (data === null) {
        data = "名無の沢"
      }
      this.nameList.push(data);
    }
    return this.nameList;
  }

}