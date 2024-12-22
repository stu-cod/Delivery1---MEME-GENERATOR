'use strict'

function onInit() {
  renderGallery()
}

function renderGallery() {
  const strHtmls = gImgs.map((img) => ` <img src="${img.url}">`)

  const elImgs = document.querySelector('.imgs')
  elImgs.innerHTML = strHtmls.join('')
}
