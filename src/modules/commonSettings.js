export class CommonSettings {
  /* 共通設定クラス
  | Author | Date |
  | ---- | ---- |
  | t-nishimura | 2022/07/31 |
  */
  constructor() {
    this.WakimizuApiUrl = 'https://livlog.xyz/webapi/springWater?q=';
    this.OpenStreetMapUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    this.Attribution = '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>';
    this.PEle = 'p';
    this.PTag_s = '<p>';
    this.PTag_e = '</p>';
    this.divEle = 'div';
    this.break = '</br>';
  }
}