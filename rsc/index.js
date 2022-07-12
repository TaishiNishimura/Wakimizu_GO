import { GetNameList } from './getNameList.js';
import { GetData } from './getData.js';

// インスタンス化
const getNL = new GetNameList();
const getD = new GetData();

let nameEle = document.getElementsByClassName('nameEle');

// 都道府県セレクトメニューから情報を取得し、メイン処理開始
const element = document.querySelector('#address');
element.addEventListener('change', handleChange)
async function handleChange(event) {
  // 都道府県名を取得
  const prefecture = element.value;
  // Apiコール
  let lists = await getNL.callApi(prefecture);
  // 湧水名リストを取得
  let nameLists = await getNL.getName(lists);
  // 個々の湧水名を作成
  getNL.createNameElement(nameLists);
  // クリックされた湧水のid（番号）を取得
  for (let i = 0; i < nameEle.length; i++) {
    nameEle[i].addEventListener('click', function() {
      let selectNumber = this.id;
      // 選択された湧水のid（番号）の情報を表示
      console.log(lists)
      console.log(selectNumber)
    });
  };
}

