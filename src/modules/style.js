export class Style {
  // 動きの変化を制御するクラス
  
  // ローディング画面
  loadAnime() {
    const spinner = document.getElementById('loading');
    setTimeout(function () {
      spinner.classList.add('loaded');
    }, 1000);
  }

  // 非表示から表示に切り替え
  displayOn(sectionNum) {
    document.getElementById(sectionNum).style.display = 'block';
  }

  // 自動スクロール
  autoScroll(sectionNum) {
    let left = document.getElementById(sectionNum).getBoundingClientRect().left;
    let top = document.getElementById(sectionNum).getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      left: left,
      top: top,
      behavior: 'smooth'
    });
  }
}
