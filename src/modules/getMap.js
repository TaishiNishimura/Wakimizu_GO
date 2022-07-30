import { CommonFunctions } from './commonFunctions.js';

export class GetMap extends CommonFunctions {
  //マップ描画クラス
  constructor() {
    super();
    this.doubleOkMark = '◎';
    this.doubleOk = '立入OK';
    this.singleOkMark = '○';
    this.singleOk = '立入OK(制限有り)';
    this.ngMark = '×';
    this.ng = '立入NG';
    this.unknown = '不明';
    this.mapIdName = 'map';
    this.mapAreaIdName = 'map_area';
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

  // マップの描画エリアを作成
  createMapContainer() {
    let mapContainer = document.createElement(this.divEle);
    mapContainer.id = this.mapIdName;
    document.getElementById(this.mapAreaIdName).appendChild(mapContainer);
  }

  //マップを描画する
  createMap() {
    // マップ作成の前に、もし前回生成した要素があれば削除（初期化)
    this.removeElement(this.mapAreaIdName)
    // マップの描画エリアを作成
    this.createMapContainer();
    // アクセス記号を日本語に変換
    let access = this.changeAccess(this.targetAccess);
    // 緯度経度を中心に地図描画
    let map = L.map(this.mapIdName, {
      center: [this.targetLat, this.targetLng],
      zoom: this.zoomNum,
    });
    // OpenStreetMapから地図画像を読み込む
    let tileLayer = L.tileLayer(this.OpenStreetMapUrl, {
      attribution: this.Attribution,
    });
    tileLayer.addTo(map);
    // マーカー画像の場所を指定する
    L.marker([this.targetLat, this.targetLng]).addTo(map)
      .bindPopup(this.popupNote + access)
      .openPopup();
  }
}
