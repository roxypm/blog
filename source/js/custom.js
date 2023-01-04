const topImgElID = ".full_page";
const topImgEl = document.querySelector(topImgElID);
console.log(topImgEl);
if (topImgEl) {
  const imgArr = [
    "/images/bizhi/0f2399283302014827121ee771587341.jpg",
    "/images/bizhi/1c14d5734016d8bfea115531f94b0227.jpg",
    "/images/bizhi/2d95699cd55814cbc2b092a4b72ba172.jpg",
    "/images/bizhi/3a5e160d8218fea55e57f71f304d50da (1).jpg",
    "/images/bizhi/3b83a7ee10f044dabfe9d52c7e8e15f1.jpg",
    "/images/bizhi/5.png",
    "/images/bizhi/3a5e160d8218fea55e57f71f304d50da.jpg",
    "/images/bizhi/e94a2c60934bd7aeb4a748f0cb6a2e6f.jpg",
   
  ];
  const imgRandomIndex = Math.floor(Math.random() * imgArr.length);
  const imgRandom = imgArr[imgRandomIndex];
//   console.log(imgRandom);
  topImgEl.style.backgroundImage = `url(${imgRandom})`;
  console.log(imgRandom)
}
