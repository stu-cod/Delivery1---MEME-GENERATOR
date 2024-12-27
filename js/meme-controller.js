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

    drawText(gElCanvas.width / 2, gElCanvas.height / 2, lines[0])
  }
}

function drawText(x, y, { txt, size, color }) {
  gCtx.lineWidth = 2
  gCtx.fillStyle = color
  gCtx.font = size + 'px Arial'

  gCtx.fillText(txt, x, y)

  const txtMetrics = gCtx.measureText(txt)
  const txtWidth = txtMetrics.width
  const txtHeight = size

  drawFrameAroundText({ x, y, width: txtWidth, height: txtHeight })
}

function drawFrameAroundText(txtBounds, padding = 10) {
  const { x, y, width, height } = txtBounds

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
