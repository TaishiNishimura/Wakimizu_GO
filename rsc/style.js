export function scroll(sectionNum) {
  let left = document.getElementById(sectionNum).getBoundingClientRect().left;
  let top = document.getElementById(sectionNum).getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({
      left: left,
      top: top,
      behavior: 'smooth'
  });
}
