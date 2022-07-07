import { CommonFunctions } from './commonFunction.js';

export class Coordinate extends CommonFunctions {
  //座標を返すクラス
  constructor() {
    super();
    //////// let ////////
    this.coordinateArray = [];
  }

  //////// Methods ////////

  // レスポンスから座標を返す
  async coordinate(prefecture) {
    const getJson = await this.callApi(prefecture);
    let latitude = getJson['result'][0]['latitude']
    let longitude = getJson['result'][0]['longitude']
    this.coordinateArray.push(latitude, longitude);
    return this.coordinateArray;
  }

}