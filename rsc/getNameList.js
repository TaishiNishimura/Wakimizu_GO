import { CommonFunctions } from './commonFunction.js';

export class GetNameList extends CommonFunctions {
  //湧水名一覧を取得するクラス
  constructor() {
    super();
    //////// let ////////
    this.nameList = [];
    this.noname = "名無の湧水";
  }

  //////// Methods ////////

  // レスポンスオブジェクトから湧水名一覧を返す
  async getName(lists) {
    for (let list in lists.result) {
      let name = lists["result"][list]["name"];
      // nullの場合、名前を付与
      if (name === null) {
        name = this.noname
      }
      this.nameList.push(name);
    }
    return this.nameList;
  }

  // 湧水名一覧から個々のエレメントを作成
  async createNameElement(nameLists) {
    for (let i = 0; i < nameLists.length; i++ ) {
      const nameElement = document.createElement('div');
      // 一意のidを付与
      nameElement.id = i;
      nameElement.className = 'nameEle'
      nameElement.style.cssText = "border-radius: " + this.getRandom() + "% " + this.getRandom() + "% " + this.getRandom() + "% " + this.getRandom() + "%";
      nameElement.innerHTML = nameLists[i];
      document.getElementById('namebox').appendChild(nameElement);
    }
  }

}