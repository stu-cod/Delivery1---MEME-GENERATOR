'use strict'

const gElCanvas = document.querySelector('canvas')
const gCtx = gElCanvas.getContext('2d')

function onInit() {
  renderGallery()
}

function renderMeme() {
  var meme = getMeme()
  drewImg(meme)
}

function drewImg({ imgUrl }) {
  const img = new Image()
  img.src = imgUrl
  img.onload = () => {
    gElCanvas.height = (img.naturalHeight / img.naturalWidth) * gElCanvas.width
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    drawText('hey', 200, 200)
  }
}

function drawText(text, x, y, fontSize = 40) {
  gCtx.lineWidth = 2
  gCtx.fillStyle = 'black'
  gCtx.font = fontSize + 'px Arial'

  gCtx.fillText(text, x, y)

  const textMetrics = gCtx.measureText(text)
  const textWidth = textMetrics.width
  const textHeight = fontSize

  drawFrameAroundText({ x, y, width: textWidth, height: textHeight })
}

function drawFrameAroundText(textBounds, padding = 10) {
  const { x, y, width, height } = textBounds

  const boxX = x - padding
  const boxY = y - height - padding / 2
  const boxWidth = width + padding * 2
  const boxHeight = height + padding * 2

  gCtx.strokeStyle = 'black'
  gCtx.strokeRect(boxX, boxY, boxWidth, boxHeight)
}
