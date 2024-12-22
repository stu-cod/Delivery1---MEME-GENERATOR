'use strict'

const STORAGE_KEY = 'imgs'

var gImgs = _createImgs()

// happy sad sarcastic crazy funny
function _createImgs() {
  var imgs = loadFromStorage(STORAGE_KEY)

  if (!imgs || !imgs.length) {
    imgs = [
      { id: _nextIdx(), url: 'meme-imgs/001.jpg', keywords: ['fuuny'] },
      { id: _nextIdx(), url: 'meme-imgs/002.jpg', keywords: ['fuuny'] },
      { id: _nextIdx(), url: 'meme-imgs/003.jpg', keywords: ['fuuny'] },
      { id: _nextIdx(), url: 'meme-imgs/004.jpg', keywords: ['fuuny'] },
      { id: _nextIdx(), url: 'meme-imgs/005.jpg', keywords: ['fuuny'] },
      { id: _nextIdx(), url: 'meme-imgs/006.jpg', keywords: ['fuuny'] },
      { id: _nextIdx(), url: 'meme-imgs/007.jpg', keywords: ['fuuny'] },
      { id: _nextIdx(), url: 'meme-imgs/008.jpg', keywords: ['fuuny'] },
      { id: _nextIdx(), url: 'meme-imgs/009.jpg', keywords: ['fuuny'] },
      { id: _nextIdx(), url: 'meme-imgs/010.jpg', keywords: ['fuuny'] },
      { id: _nextIdx(), url: 'meme-imgs/011.jpg', keywords: ['fuuny'] },
      { id: _nextIdx(), url: 'meme-imgs/012.jpg', keywords: ['fuuny'] },
      { id: _nextIdx(), url: 'meme-imgs/013.jpg', keywords: ['fuuny'] },
      { id: _nextIdx(), url: 'meme-imgs/014.jpg', keywords: ['fuuny'] },
      { id: _nextIdx(), url: 'meme-imgs/015.jpg', keywords: ['fuuny'] },
      { id: _nextIdx(), url: 'meme-imgs/016.jpg', keywords: ['fuuny'] },
      { id: _nextIdx(), url: 'meme-imgs/017.jpg', keywords: ['fuuny'] },
      { id: _nextIdx(), url: 'meme-imgs/018.jpg', keywords: ['fuuny'] },
      { id: _nextIdx(), url: 'meme-imgs/019.jpg', keywords: ['fuuny'] },
      { id: _nextIdx(), url: 'meme-imgs/020.jpg', keywords: ['fuuny'] },
    ]

    saveToStorage(STORAGE_KEY, imgs)
  }

  return imgs
}
