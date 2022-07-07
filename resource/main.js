import { Coordinate } from './module/coordinate.js';

// 都道府県セレクトメニューから情報を取得し、メイン処理開始
const element = document.querySelector('#address');
element.addEventListener('change', handleChange)
function handleChange(event) {
  const prefecture = element.value;
  if (prefecture == null) {
    console.log('NG')
  } else {
    console.log('OK')
    const coordinate = new Coordinate();
    coordinate.coordinate(prefecture);
  }
}
