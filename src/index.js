import { GetNameList } from './getNameList.js';
import { GetData } from './getData.js';
import { GetMap } from './getMap.js';
import { Style } from './style.js';
import "./style.scss";

// インスタンス化
const getNL = new GetNameList();
const getD = new GetData();
const getM = new GetMap();
const style = new Style();


// 都道府県セレクトメニューから情報を取得し、メイン処理開始
const element = document.querySelector('#prefecture');
element.addEventListener('change', handleChange)
async function handleChange(event){
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
    nameEle[i].addEventListener('click', function(){
        // 非表示にしていたページ下部を表示
      style.displayOn('third_section');
      // #third_sectionに自動スクロール
      style.autoScroll('third_section');
      // id（番号）を取得
      let selectNum = this.id;
      // 選択された湧水のid（番号）の情報を取得
      getD.getData(lists, selectNum);
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
arrow.addEventListener('click', function(){
  style.autoScroll('second_section');
});
