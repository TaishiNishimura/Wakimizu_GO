import { GetNameList } from './getNameList.js';
import { GetData } from './getData.js';
import { GetMap } from './getMap.js';
import { scroll } from './style.js';

// インスタンス化
const getNL = new GetNameList();
const getD = new GetData();
const getM = new GetMap();


// 都道府県セレクトメニューから情報を取得し、メイン処理開始
const element = document.querySelector('#prefecture');
element.addEventListener('change', handleChange)
async function handleChange(event){
  // 前回生成した要素を削除（初期化）
  let elem = document.getElementById('name_list');
  if (elem.hasChildNodes()) {
    while(elem.firstChild){
      elem.removeChild(elem.firstChild);
    }
  }
  // #second_sectionに自動スクロール
  scroll("second_section");
  // 都道府県名を取得
  const prefecture = element.value;
  // Apiコール
  const lists = await getNL.callApi(prefecture);
  // 湧水名リストを取得
  const nameLists = await getNL.getName(lists);
  // 個々の湧水名を作成
  getNL.createNameElement(nameLists);
  // クリックされた湧水のid（番号）を取得
  let nameEle = document.getElementsByClassName('nameEle');
  for (let i = 0; i < nameEle.length; i++) {
    nameEle[i].addEventListener('click', function(){
      scroll("third_section");
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
