'use strict'

const gElCanvas = document.querySelector('canvas')
const gCtx = gElCanvas.getContext('2d')

function onInit() {
  renderGallery()
  console.log()
}

function renderMeme() {
  var meme = getMeme()
  drewImg(meme)
}

function drewImg({ imgUrl, lines }) {
  const img = new Image()
  img.src = imgUrl
  img.onload = () => {
    gElCanvas.height = (img.naturalHeight / img.naturalWidth) * gElCanvas.width
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    drawText(gElCanvas.width / 2, gElCanvas.height / 2, lines)
  }
}

function drawText(x, y, lines) {
  lines.forEach((line, idx) => {
    const { txt, size, color } = line
    gCtx.lineWidth = 2
    gCtx.fillStyle = color
    gCtx.font = size + 'px Arial'

    gCtx.fillText(txt, x, y)

    const txtMetrics = gCtx.measureText(txt)
    const txtWidth = txtMetrics.width
    const txtHeight = size

    line.posX = x
    line.posY = y
    line.width = txtWidth
    line.height = txtHeight

    if (idx === gMeme.selectedLineIdx) {
      drawFrameAroundText(x, y, txtWidth, txtHeight)
    }
  })
}

gElCanvas.addEventListener('click', function (event) {
  gMeme.lines.forEach((line, idx) => {
    const { posX: x, posY: y, width, height } = line
    const rect = gElCanvas.getBoundingClientRect()
    const clickX = event.clientX - rect.left
    const clickY = event.clientY - rect.top

    if (
      clickX >= x &&
      clickX <= x + width &&
      clickY >= y - height &&
      clickY <= y
    ) {
      selectedTxtLine(idx)
    }
    renderMeme()
  })
})

function drawFrameAroundText(x, y, width, height, padding = 8) {
  const boxX = x - padding
  const boxY = y - height - padding / 2
  const boxWidth = width + padding * 2
  const boxHeight = height + padding * 2

  gCtx.strokeStyle = 'black'
  gCtx.strokeRect(boxX, boxY, boxWidth, boxHeight)
}

function onAddTxtLine() {
  addTxtLine()
  renderMeme()
}

function onChangeTxtLine() {
  changeTxtLine()
  renderMeme()
}

function onEditTxt(elTxt) {
  setLineTxt(elTxt)
  renderMeme()
}

function onEditColor(elColor) {
  setLineColor(elColor)
  renderMeme()
}

function onIncreaseFont() {
  setFontSize('up')
  renderMeme()
}

function onDecreaseFont() {
  setFontSize('down')
  renderMeme()
}

function onDownloadMeme(elLink) {
  const imgContent = gElCanvas.toDataURL('image/jpeg')
  elLink.href = imgContent
}
