export function shuffle (arr) {
  let nArr = []
  while (arr.length > 0) {
    let bound = arr.length - 1
    let index = parseInt(Math.random() * bound)
    nArr.push(arr.splice(index, 1))
  }
  return nArr
}