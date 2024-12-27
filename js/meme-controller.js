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

    drawText(lines[0].txt, gElCanvas.width / 2, gElCanvas.height / 2)
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

function onSubmit(ev) {
  ev.preventDefault()
}

function editTxt(elTxt) {
  setLineTxt(elTxt)
  renderMeme()
}

function onDownloadMeme(elLink) {
  const imgContent = gElCanvas.toDataURL('image/jpeg')
  elLink.href = imgContent
}
