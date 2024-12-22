const ID_KEY = 'imgId'

function _nextIdx() {
  let nextId = loadFromStorage(ID_KEY) || 1
  saveToStorage(ID_KEY, nextId + 1)
  return nextId
}
