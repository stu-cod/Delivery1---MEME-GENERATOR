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
