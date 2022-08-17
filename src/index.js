/* メイン実行
| Author | Date |
| ---- | ---- |
| t-nishimura | 2022/07/31 |
*/

//////// import ////////
import { GetNameList } from './modules/getNameList.js';
import { GetData } from './modules/getData.js';
import { GetMap } from './modules/getMap.js';
import { Style } from './modules/style.js';
import "./style.scss";

//////// instance ////////
const getNL = new GetNameList();
const getD = new GetData();
const getM = new GetMap();
const style = new Style();

//////// execution ////////
// 処理開始
window.onload = function () {
  // ローディング画面
  style.loadAnime();
  // 都道府県セレクトメニューから情報を取得しメイン処理開始
  const element = document.querySelector('#prefecture');
  element.addEventListener('change', handleChange)
  async function handleChange(event) {
    // 非表示にしていたページ中央部を表示
    style.displayOn('second_section');
    // #second_sectionに自動スクロール
    style.autoScroll('second_section');
    // 都道府県名を取得
    let prefecture = element.value;
    // Apiコール
    let lists = await getNL.callApi(prefecture);
    // 湧水名リストを取得
    let nameLists = await getNL.getName(lists);
    // 個々の湧水名を作成
    getNL.createNameElement(nameLists);
    // クリックされた湧水のid（番号）を取得
    let nameEle = document.getElementsByClassName('nameEle');
    for (let i = 0; i < nameEle.length; i++) {
      nameEle[i].addEventListener('click', function () {
        // 非表示にしていたページ下部を表示
        style.displayOn('third_section');
        // #third_sectionに自動スクロール
        style.autoScroll('third_section');
        // id（番号）を取得
        let selectNum = this.id;
        // 選択された湧水のid（番号）の情報を取得
        getD.getData(lists, selectNum);
        // 前回生成した住所、ふりがな、名前、タイトル、概要、環境保全活動があれば削除（初期化)
        getD.removeData();
        // 情報を表示
        getD.createData();
        // 選択された湧水のid（番号）のpos情報を取得
        getM.getPosData(lists, selectNum);
        // マップを描画
        getM.createMap();
      });
    };
  }
  // 矢印を押すと自動スクロール
  let arrow = document.getElementById('arrow_up')
  arrow.addEventListener('click', function () {
    style.autoScroll('second_section');
  });
};
