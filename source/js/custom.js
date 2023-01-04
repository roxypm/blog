const topImgElID = ".full_page";
const topImgEl = document.querySelector(topImgElID);
// console.log(topImgEl);
if (topImgEl) {
  const imgArr = [
    "https://i0.wp.com/ww1.sinaimg.cn/large/007uakq1gy1h8me2hc64uj31c00qodt4.jpg",
    "/images/xiamen/1.jpg",
    "https://i0.wp.com/ww1.sinaimg.cn/large/007uakq1gy1h8njqmoytfj318g0p01i8.jpg",
  ];
  const imgRandomIndex = Math.floor(Math.random() * imgArr.length);
  const imgRandom = imgArr[imgRandomIndex];
//   console.log(imgRandom);
  topImgEl.style.backgroundImage = `url(${imgRandom})`;
}
