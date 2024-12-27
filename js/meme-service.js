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

function addTxtLine() {
  var line = _createLine()
  gMeme.lines.unshift(line)
}

function _createLine() {
  return {
    txt: 'your text',
    size: 40,
    color: '#ffcc00',
  }
}

function changeTxtLine() {
  const linesNum = gMeme.lines.length
  if (linesNum < 1) return

  if (gMeme.selectedLineIdx < linesNum - 1) gMeme.selectedLineIdx++
  else gMeme.selectedLineIdx = 0
}

function setLineTxt(txt) {
  gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function setLineColor(color) {
  gMeme.lines[gMeme.selectedLineIdx].color = color
}

function setFontSize(fontChange) {
  if (fontChange === 'up') gMeme.lines[gMeme.selectedLineIdx].size++
  else gMeme.lines[gMeme.selectedLineIdx].size--
}
