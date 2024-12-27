'use strict'

let gMeme

function getMeme() {
  gMeme.imgUrl = findImgUrlById(gMeme.selectedImgId)
  return gMeme
}

function findImgUrlById(imgId) {
  var img = gImgs.find((img) => {
    return img.id === imgId
  })
  return img.url
}

function addMeme(imgId) {
  _createMeme(imgId)
}

function _createMeme(imgId) {
  gMeme = {
    selectedImgId: +imgId,
    selectedLineIdx: 0,
    lines: [
      {
        txt: 'your text',
        size: 40,
        color: '#ffcc00',
      },
    ],
  }
}

function setLineTxt(txt) {
  gMeme.lines[0].txt = txt
}

function setLineColor(color) {
  gMeme.lines[0].color = color
}

function setFontSize(fontChange) {
  if (fontChange === 'up') gMeme.lines[0].size++
  else gMeme.lines[0].size--
}
