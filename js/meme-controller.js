'use strict'

let gElCanvas
let gCtx
const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

function onInitMemeEditor() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')
  addListeners()

  renderMeme()
}

//RENDER&DRAW
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

    const txtMetrics = gCtx.measureText(txt)
    const txtWidth = txtMetrics.width
    const txtHeight = size

    line.posX = line.posX ? line.posX : x
    line.posY = line.posY ? line.posY : y
    line.width = txtWidth
    line.height = txtHeight

    gCtx.fillText(txt, line.posX, line.posY)

    if (idx === gMeme.selectedLineIdx) {
      drawFrameAroundText(line.posX, line.posY, txtWidth, txtHeight)
    }
  })
}

function drawFrameAroundText(x, y, width, height, padding = 8) {
  const boxX = x - padding
  const boxY = y - height - padding / 2
  const boxWidth = width + padding * 2
  const boxHeight = height + padding * 3

  gCtx.strokeStyle = 'black'
  gCtx.strokeRect(boxX, boxY, boxWidth, boxHeight)
}

//DRAG & POS
function addListeners() {
  addMouseListeners()
  addTouchListeners()
}

function addMouseListeners() {
  gElCanvas.addEventListener('click', onSelectTxtLine)

  gElCanvas.addEventListener('mousedown', onDown)
  gElCanvas.addEventListener('mousemove', onMove)
  gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
  gElCanvas.addEventListener('touchstart', onDown)
  gElCanvas.addEventListener('touchmove', onMove)
  gElCanvas.addEventListener('touchend', onUp)
}

function onDown(ev) {
  // Get the ev pos from mouse or touch
  const pos = getEvPos(ev)
  // console.log('pos', pos)
  if (!getClickedLine(pos).isClicked) return

  setLineDrag(true)
  //Save the pos we start from
  document.body.style.cursor = 'grabbing'
}

function onMove(ev) {
  const line = chosenLine()
  const { isDrag } = line
  if (!isDrag) return
  const { posX: x, posY: y } = line
  const pos = getEvPos(ev)
  // Calc the delta, the diff we moved
  const dx = pos.x - x
  const dy = pos.y - y
  moveLine(dx, dy)
  renderMeme()
}

function onUp() {
  setLineDrag(false)
  document.body.style.cursor = 'pointer'
}

//CHOSE
function onSelectTxtLine(ev) {
  const pos = getEvPos(ev)
  if (!getClickedLine(pos).isClicked) return
  const selectedIdx = getClickedLine(pos).lineIdx

  selectLine(selectedIdx)
  renderMeme()
}

function onChangeLine() {
  changeLine()
  renderMeme()
}

function onAddLine() {
  addLine()
  renderMeme()
}

//EDIT
function onRemoveLine() {
  RemoveLine()
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

//share
function onDownloadMeme(elLink) {
  const imgContent = gElCanvas.toDataURL('image/jpeg')
  elLink.href = imgContent
}
