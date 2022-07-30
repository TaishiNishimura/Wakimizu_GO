import { CommonFunctions } from './commonFunctions.js';

export class GetData extends CommonFunctions {
  /* 湧水情報クラス
  | Author | Date |
  | ---- | ---- |
  | t-nishimura | 2022/07/31 |
  */
  constructor() {
    super();
    this.addressId = 'address';
    this.furiganaId = 'furigana';
    this.nameId = 'name';
    this.gaiyouText = '概要等';
    this.gaiyouId = 'gaiyou';
    this.overviewId = 'overview';
    this.hozenText = '環境保全活動';
    this.hozenId = 'hozen';
    this.activityId = 'activity';
    this.nameTitle = '名前';
  }

  //////// Methods ////////

  // ふりがながnullだったらstr「名前」を代入
  furiganaCheck(furigana) {
    if (!furigana) {
      furigana = this.nameTitle;
      return furigana
    }
    return furigana
  }

  // 前回生成した住所、ふりがな、名前、タイトル、概要、環境保全活動があれば削除（初期化)
  removeData() {
    this.removeElement(this.addressId)
    this.removeElement(this.furiganaId)
    this.removeElement(this.nameId)
    this.removeElement(this.gaiyouId)
    this.removeElement(this.overviewId)
    this.removeElement(this.hozenId)
    this.removeElement(this.activityId)
  }

  // 各種情報を抽出
  getData(lists, selectNum) {
    // アドレスを抽出
    this.targetAddress = lists['result'][selectNum]['address'];
    // ふりがなを抽出
    let furigana = lists['result'][selectNum]['furigana'];
    // ふりがながnullだったらstr「名前」を代入
    let furiganaStr = this.furiganaCheck(furigana)
    // ふりがなの半角スペースを改行タグに置換
    this.targetFurigana = this.getBr(furiganaStr);
    // 名前を抽出
    let name = lists['result'][selectNum]['name'];
    // 名前がnullの場合、「名無の湧水」という名前を付与
    let nameStr = this.nameCheck(name)
    // 名前の半角スペースを改行タグに置換
    this.targetName = this.getBr(nameStr);
    // 概要を抽出
    this.targetOverview = lists['result'][selectNum]['overview'];
    // 環境保全活動を抽出
    this.targetActivity = lists['result'][selectNum]['activity'];
  }

  // 情報のHtmlを生成
  createData() {
    // 住所のhtmlを生成
    document.getElementById(this.addressId).innerHTML = this.PTag_s + this.targetAddress + this.PTag_e;
    // ふりがなのhtmlを生成
    document.getElementById(this.furiganaId).innerHTML = this.PTag_s + this.targetFurigana + this.PTag_e;
    // 名前のhtmlを生成
    document.getElementById(this.nameId).innerHTML = this.targetName;
    // タイトル「概要」のhtmlを生成
    let gaiyouEle = document.createElement(this.PEle);
    gaiyouEle.innerHTML = this.gaiyouText;
    document.getElementById(this.gaiyouId).appendChild(gaiyouEle);
    // 概要等のhtmlを生成
    document.getElementById(this.overviewId).innerHTML = this.PTag_s + this.targetOverview + this.PTag_e;
    // タイトル「環境保全活動」のhtmlを生成
    let hozenEle = document.createElement(this.PEle);
    hozenEle.innerHTML = this.hozenText;
    document.getElementById(this.hozenId).appendChild(hozenEle);
    // 環境保全活動のhtmlを生成
    document.getElementById(this.activityId).innerHTML = this.PTag_s + this.targetActivity + this.PTag_e;
  }
}
