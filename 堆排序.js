//把堆顶在top位置的一个可能不是堆
//但左右子树都是堆的树调整成堆
//end指明了数组中end及之前的元素是属于堆的
function reheap(ary, topIndex, endIndex = ary.length - 1) {
  if (topIndex > endIndex) {
    return
  }

  var largestIndex = topIndex
  var leftIndex = topIndex * 2 + 1
  var rightIndex = topIndex * 2 + 2

  if (leftIndex <= endIndex && ary[leftIndex] > ary[largestIndex]) {
    largestIndex = leftIndex
  }
  if (rightIndex <= endIndex && ary[rightIndex] > ary[largestIndex]) {
    largestIndex = rightIndex
  }

  if (largestIndex != topIndex) {
    swap(ary, largestIndex, topIndex)
    reheap(ary, largestIndex, endIndex)
  }
}


//把一个数组调整成一个堆
function heapify(ary) {
  for(var i = ary.length - 1; i >= 0; i--) {
    reheap(ary, i)
  }
  return ary
}

// 堆排序
function heapSort(ary) {
  heapify(ary)
  for(var i = ary.length - 1; i>=1; i--) {
    swap(ary, 0, i)
    try {showTree(t, ary)} catch(e) {}
    reheap(ary, 0, i - 1)
  }
  return ary
}