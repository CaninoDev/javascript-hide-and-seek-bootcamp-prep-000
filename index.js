function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  const rank = document.querySelectorAll('.ranked-list')
  for (var i = 0; i < rank.length; i++) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n
  }
}

function deepestChild() {
  /* Cheat answer?
  *     var deep = document.getElementById('grand-node').querySelectorAll('div')
  *     return deep[deep.length - 1]
  */
  
  /* This function will return the deepest 'div' node relative to its parent 'grand-node' */
  if(!document.getElementById('grand-node')) { // if no grand-node
    return "No 'grand-node' found"
  }
  var grandNodeArr = []
  var nodeDepth = 0
  var nodeIndex = 0
  var maybeDeepNode = 0
  var maybeDeepIndex = 0
  do {
    grandNodeArr.push(document.getElementById('grand-node').querySelectorAll('div'))
    if (grandNodeArr[nodeIndex].length > nodeDepth) {
      nodeDepth = grandNodeArr[nodeIndex].length
      maybeDeepNode = grandNodeArr[nodeDepth]
      maybdeDeepIndex = nodeIndex
      document.getElementById('grand-node').id = nodeIndex
      nodeIndex++
    }
  } while (document.getElementById('grand-node')) // while there are grand-nodes, push them on Array
  document.getElementById(maybeDeepIndex).id = 'grand-node'
  return maybeDeepNode
}
  
  