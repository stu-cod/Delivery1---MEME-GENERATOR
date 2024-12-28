'use strict'

let gMeme

//MENE
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
        isDrag: false,
      },
    ],
  }
}

//LINES
function _createLine() {
  return {
    txt: 'your text',
    size: 40,
    color: '#ffcc00',
    isDrag: false,
  }
}

function addLine() {
  var line = _createLine()
  gMeme.lines.push(line)
}

function RemoveLine() {
  gMeme.lines.splice(gMeme.selectedLineIdx, 1)
}

//EDIT
function setLineTxt(txt) {
  chosenLine().txt = txt
}

function setLineColor(color) {
  chosenLine().color = color
}

function setFontSize(fontChange) {
  if (fontChange === 'up') chosenLine().size++
  else chosenLine().size--
}

//CHOSE
function selectLine(selectedIdx) {
  gMeme.selectedLineIdx = selectedIdx
}

function changeLine() {
  const linesNum = gMeme.lines.length
  if (linesNum < 1) return

  if (gMeme.selectedLineIdx < linesNum - 1) gMeme.selectedLineIdx++
  else gMeme.selectedLineIdx = 0
}

function chosenLine() {
  return gMeme.lines[gMeme.selectedLineIdx]
}

//DRAG & POS

function getEvPos(ev) {
  let pos = {
    x: ev.offsetX,
    y: ev.offsetY,
  }

  if (TOUCH_EVS.includes(ev.type)) {
    ev.preventDefault()

    ev = ev.changedTouches[0]

    pos = {
      x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
      y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
    }
  }
  return pos
}

function getClickedLine(pos) {
  let isClicked = false
  let lineIdx = 0
  gMeme.lines.forEach((line, idx) => {
    const { posX, posY, width, height } = line
    const { x: clickX, y: clickY } = pos

    if (
      clickX >= posX &&
      clickX <= posX + width &&
      clickY >= posY - height &&
      clickY <= posY
    ) {
      lineIdx = idx
      isClicked = true
    }
  })
  return { lineIdx, isClicked }
}

function setLineDrag(isDrag) {
  console.log('chosenLine().isDrag:', chosenLine().isDrag)
  chosenLine().isDrag = isDrag
}

function moveLine(dx, dy) {
  chosenLine().posX += dx
  chosenLine().posY += dy
}
