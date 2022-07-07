class Settings {
  // 共通設定クラス
  constructor() {
    //////// Constant ////////
    this.WAKIMIZUAPIURL = 'https://livlog.xyz/webapi/springWater?q=';
    this.PREFECTURE = '北海道';
  }

  //////// Methods ////////

  // APIコール
  async callApi(q) {
    const res = await fetch(this.WAKIMIZUAPIURL + q);
      const wakimizuData = await res.json();
      return wakimizuData;
  }
}


class CommonFunctions extends Settings {
  // 共通関数クラス
  constructor() {
    super();
    //////// let ////////
    this.coordinateArray = [];
  }

  //////// Methods ////////

  // レスポンスから座標を返す
  async coordinate() {
    const getJson = await this.callApi(this.PREFECTURE);
    let latitude = getJson['result'][0]['latitude']
    let longitude = getJson['result'][0]['longitude']
    this.coordinateArray.push(latitude, longitude)
    return this.coordinateArray;
  }

}


class Main extends CommonFunctions {
  //メインクラス
  constructor() {
    super();
  }

  //////// Methods ////////

  async main() {
    const dd = await this.coordinate();
    console.log(dd);
  }

}


// 都道府県セレクトメニューから情報を取得し、メイン処理開始
const element = document.querySelector('#address');
element.addEventListener('change', handleChange)
function handleChange(event) {
  const value = element.value;
  if (value == null) {
    console.log('NG')
  } else {
    console.log('OK')
    const main = new Main();
    main.main();
  }
}
