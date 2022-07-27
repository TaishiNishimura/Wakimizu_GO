import { CommonFunctions } from './commonFunctions.js';

export class GetData extends CommonFunctions {
  //湧水情報を抽出し、表示するクラス
  constructor() {
    super();
    //////// let ////////
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

  // 各種情報を抽出
  getData(lists, selectNum) {
    // アドレスを抽出
    this.targetAddress = lists['result'][selectNum]['address'];
    // ふりがなを抽出
    let furiganaStr = lists['result'][selectNum]['furigana'];
    // ふりがながnullだったらstrを代入
    if (!furiganaStr) {
      furiganaStr = this.nameTitle;
    }
    // ふりがなの半角スペースを改行タグに置換
    this.targetFurigana = this.getBr(furiganaStr);
    // 名前を抽出
    let nameStr = lists['result'][selectNum]['name'];
    // 名前の半角スペースを改行タグに置換
    this.targetName = this.getBr(nameStr);
    // 概要を抽出
    this.targetOverview = lists['result'][selectNum]['overview'];
    // 環境保全活動を抽出
    this.targetActivity = lists['result'][selectNum]['activity'];
  }

  // 情報のHtmlを生成
  createData() {
    // 前回生成した住所のhtmlがあれば削除（初期化)
    this.removeElement(this.addressId)
    // 住所のhtmlを生成
    document.getElementById(this.addressId).innerHTML = this.PTag_s + this.targetAddress + this.PTag_e;
    // 前回生成したふりがなのhtmlがあれば削除（初期化)
    this.removeElement(this.furiganaId)
    // ふりがなのhtmlを生成
    document.getElementById(this.furiganaId).innerHTML = this.PTag_s + this.targetFurigana + this.PTag_e;
    // 前回生成した名前のhtmlがあれば削除（初期化)
    this.removeElement(this.nameId)
    // 名前のhtmlを生成
    document.getElementById(this.nameId).innerHTML = this.targetName;
    // 前回生成した名前のhtmlがあれば削除（初期化)
    this.removeElement(this.gaiyouId)
    // タイトル「概要」のhtmlを生成
    let gaiyouEle = document.createElement(this.PEle);
    gaiyouEle.innerHTML = this.gaiyouText;
    document.getElementById(this.gaiyouId).appendChild(gaiyouEle);
    // 前回生成した概要等のhtmlがあれば削除（初期化)
    this.removeElement(this.overviewId)
    // 概要等のhtmlを生成
    document.getElementById(this.overviewId).innerHTML = this.PTag_s + this.targetOverview + this.PTag_e;
    // 前回生成したタイトル「環境保全活動」のhtmlがあれば削除（初期化)
    this.removeElement(this.hozenId)
    // タイトル「環境保全活動」のhtmlを生成
    let hozenEle = document.createElement(this.PEle);
    hozenEle.innerHTML = this.hozenText;
    document.getElementById(this.hozenId).appendChild(hozenEle);
    // 前回生成した環境保全活動のhtmlがあれば削除（初期化)
    this.removeElement(this.activityId)
    // 環境保全活動のhtmlを生成
    document.getElementById(this.activityId).innerHTML = this.PTag_s + this.targetActivity + this.PTag_e;
  }
}
