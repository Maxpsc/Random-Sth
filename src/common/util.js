export function shuffle (arr) {
  let nArr = []
  while (arr.length > 0) {
    let bound = arr.length
    let index = parseInt(Math.random() * bound)
    nArr.push(arr.splice(index, 1))
  }
  return nArr
}

export function randomPick (arr) {
  let bound = arr.length
  let index = parseInt(Math.random() * bound)
  return arr[index]
}

// 手机摇一摇事件
let motionHandler = null
export function addDeviceMotionHandler (handler) {
  var SHAKE_THRESHOLD = 4000
  var last_update = 0
  var x, y, z, last_x = 0, last_y = 0, last_z = 0
  if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', motionHandler, false)
  }
  motionHandler = function (event) {
    var acceleration = event.accelerationIncludingGravity
    var curTime = new Date().getTime()
    if ((curTime - last_update) > 10) {
      var diffTime = curTime - last_update
      last_update = curTime
      x = acceleration.x
      y = acceleration.y
      z = acceleration.z
      var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000
      if (speed > SHAKE_THRESHOLD) {
        handler(event)
      }
      last_x = x
      last_y = y
      last_z = z
    }
  }
}
export function removeDeviceMotionHandler () {
  window.removeEventListener('devicemotion', motionHandler)
}