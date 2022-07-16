import { CommonFunctions } from './commonFunction.js';

export class GetNameList extends CommonFunctions {
  //湧水名一覧を取得するクラス
  constructor() {
    super();
    //////// let ////////
    this.noname = "名無の湧水";
    this.nameEle = 'nameEle';
    this.radiusValue = "border-radius: " + this.getRandom() + "% " + this.getRandom() + "% " + this.getRandom() + "% " + this.getRandom() + "%";
    this.nameIdName = 'name_list';
  }

  //////// Methods ////////

  // レスポンスオブジェクトから湧水名一覧を返す
  async getName(lists) {
    const nameList =[];
    console.log(nameList)
    for (let list in lists.result) {
      let name = lists["result"][list]["name"];
      // nullの場合、名前を付与
      if (name === null) {
        name = this.noname
      }
      nameList.push(name);
    }
    return nameList;
  }

  // 湧水名一覧から個々のエレメントを作成
  async createNameElement(nameLists) {
    for (let i = 0; i < nameLists.length; i++ ) {
      const nameElement = document.createElement(this.PEle);
      // 一意のidを付与
      nameElement.id = i;
      nameElement.className = this.nameEle;
      nameElement.style.cssText = this.radiusValue;
      nameElement.innerHTML = nameLists[i];
      document.getElementById(this.nameIdName).appendChild(nameElement);
    }
  }

}