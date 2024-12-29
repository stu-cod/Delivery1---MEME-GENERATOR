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
  const elEditor = document.querySelector('.meme-editor')
  const elGallery = document.querySelector('.gallery')
  elEditor.style.display = 'block'
  elGallery.style.display = 'none'
  addMeme(imgId)
  onInitMemeEditor()
}

function onGalleryClick() {
  const elEditor = document.querySelector('.meme-editor')
  const elGallery = document.querySelector('.gallery')
  elEditor.style.display = 'none'
  elGallery.style.display = 'block'
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

function triggerFileInput() {
  document.getElementById('hidden-file-input').click()
}
