'use strict'
function onInit() {
  renderGallery()
}

function renderGallery() {
  const strHtmls = gImgs.map((img) => {
    return ` <img onclick="onImgClick('${img.id}')" src="${img.url}">`
  })

  const elImgs = document.querySelector('.imgs')
  elImgs.innerHTML = strHtmls.join('')
}

function onImgClick(imgId) {
  addMeme(imgId)
  onInitMemeEditor()
}

function onImgInput(ev) {}

function onAddImg() {
  var keyWord = prompt(
    'type the key word thats fit to this image (happy, sad, sarcastic, crazy, funny)'
  )
  var url = 'meme-imgs/020.jpg'
  addImg(url, keyWord)
  renderGallery()
}
