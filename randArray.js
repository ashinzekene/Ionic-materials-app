
/*
function randArr(arr, length=arr.length) {
  var newArr = [], currentInd, randInd, arr = arr
  for (currentInd = 0; currentInd < length; currentInd++) {
    randInd= Math.floor(Math.random()* arr.length)
    newArr[currentInd] = arr[randInd] 
    arr.splice(randInd,1)
  }
  return newArr
}
var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
console.log(randArr(arr, 4))
*/

function randomArray(arr, options= {}){
  //First perform type checks
  console.log('hello')
  // if (typeof options !== "object") {
  //   console.log(typeof options)
  //   return new Error('The second argument must be an object')
  // }
  // if (! arr[0] || typeof arr === 'string') {
  //   return new Error('The first argument must be an array')
  // }
  // var currInd, randInd
  // var arr = arr
  // var newArr = []
  //     options = options || []
  //     options.length = options.length || arr.length
  //     options.gte = options.gte || Infinity
  //     options.lte = options.lte || -Infinity

  // var arr = arr.filter((val) => {
  //   return val >= options.gte
  // })

  // if(options.length > arr.length && options.unique) {
  //   return new Error(`Cannot generate ${options.length} unique values from ${arr.length} values`)  
  // }
  // for (currInd = 0; currInd < options.length; currInd++) {
  //   randInd= Math.floor(Math.random()* arr.length)
  //   newArr[currInd] = arr[randInd] 
  //   if (options.unique) {
  //     arr.splice(randInd,1)
  //   }
  // }
  // return newArr
}

// randomArray()

module.exports = randomArray