import { CommonFunctions } from './commonFunctions.js';

export class GetNameList extends CommonFunctions {
  /* 湧水名一覧クラス
  | Author | Date |
  | ---- | ---- |
  | t-nishimura | 2022/07/31 |
  */
  constructor() {
    super();
    this.nameEle = 'nameEle';
    this.nameIdName = 'name_list';
    this.borderRadius = 'border-radius: '
    this.per = '% '
  }

  //////// Methods ////////

  // レスポンスオブジェクトから湧水名一覧を返す
  async getName(lists) {
    const nameList = [];
    for (let list in lists.result) {
      let n = lists["result"][list]["name"];
      // 名前がnullの場合、「名無の名水」という名前を付与
      let name = this.nameCheck(n);
      nameList.push(name);
    }
    return nameList;
  }

  // 湧水名一覧から個々のエレメントを作成
  async createNameElement(nameLists) {
    // 作成の前に、もし前回生成した要素があれば削除（初期化)
    this.removeElement(this.nameIdName)
    // 楕円の形状をランダムに作成
    let radiusValue =
      this.borderRadius +
      this.getRandom() +
      this.per +
      this.getRandom() +
      this.per +
      this.getRandom() +
      this.per +
      this.getRandom() +
      this.per;
    // ここから作成
    for (let i = 0; i < nameLists.length; i++) {
      const nameElement = document.createElement(this.PEle);
      // 一意のidを付与
      nameElement.id = i;
      nameElement.className = this.nameEle;
      nameElement.style.cssText = radiusValue;
      nameElement.innerHTML = nameLists[i];
      document.getElementById(this.nameIdName).appendChild(nameElement);
    }
  }
}
