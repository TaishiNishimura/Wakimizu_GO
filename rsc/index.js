import { GetName } from './getName.js';

// 都道府県セレクトメニューから情報を取得し、メイン処理開始
const element = document.querySelector('#address');
element.addEventListener('change', handleChange)
async function handleChange(event) {
  const prefecture = element.value;
  if (prefecture != null) {
    console.log('OK')
    const getname = new GetName();
    let nameList = await getname.getName(prefecture);
    console.log(nameList);
  } else {
    console.log('NG')
  }
}
