import { CommonFunctions } from './commonFunction.js';

export class GetName extends CommonFunctions {
  //湧水名を取得するクラス
  constructor() {
    super();
    //////// let ////////
    this.nameList = [];
  }

  //////// Methods ////////

  // レスポンスオブジェクトから湧水名一覧を返す
  async getName(prefecture) {
    const lists = await this.callApi(prefecture);
    for (let list in lists.result) {
      let name = lists["result"][list]["name"];
      // nullの場合、名前を付与
      if (name === null) {
        name = "名無の湧水"
      }
      this.nameList.push(name);
    }
    return this.nameList;
  }

  async createNameElement(nameLists) {
    for (let i = 0; i < nameLists.length; i++ ) {
      const nameElement = document.createElement('div');
      // idを付与
      nameElement.id = 'nameEle';
      nameElement.innerHTML = nameLists[i];
      document.getElementById('namebox').appendChild(nameElement);
    }
  }

}