import { CommonFunctions } from './commonFunction.js';

export class GetMap extends CommonFunctions {
  //マップを描画するクラス
  constructor() {
    super();
    //////// let ////////
    this.doubleOkMark = '◎';
    this.doubleOk = '立入OK';
    this.singleOkMark = '○';
    this.singleOk = '立入OK(制限有り)';
    this.ngMark = '×';
    this.ng = '立入NG';
    this.unknown = '不明';
    this.mapIdName = 'map';
    // 地図のズーム度
    this.zoomNum = 10;
    // ポップアップの説明
    this.popupNote = 'アクセス制限 : ';
  }

  //////// Methods ////////

  // アクセス記号を日本語に変換
  changeAccess(accessMark) {
    if (accessMark === this.doubleOkMark) {
      return this.doubleOk;
    } else if (accessMark === this.singleOkMark) {
      return this.singleOk;
    } else if (accessMark === this.ngMark) {
      return this.ng;
    } else {
      return this.unknown;
    }
  }

  //緯度経度を抽出
  getPosData(lists, selectNum) {
    // 緯度を抽出
    this.targetLat = lists['result'][selectNum]['latitude'];
    // 経度を抽出
    this.targetLng = lists['result'][selectNum]['longitude'];
    // アクセス記号を抽出
    this.targetAccess = lists['result'][selectNum]['access'];
  }

  //マップを描画する
  createMap() {
    // アクセス記号を日本語に変換
    let access = this.changeAccess(this.targetAccess);
    // 緯度経度を中心に地図描画
    var map = L.map(this.mapIdName, {
      center: [this.targetLat, this.targetLng],
      zoom: this.zoomNum,
    });
    // OpenStreetMapから地図画像を読み込む
    var tileLayer = L.tileLayer(this.OpenStreetMapUrl, {
      attribution: this.Attribution,
    });
    tileLayer.addTo(map);
    // マーカー画像の場所を指定する
    L.marker([this.targetLat, this.targetLng]).addTo(map)
      .bindPopup(this.popupNote + access)
      .openPopup();
  }
}
