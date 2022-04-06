

// let a = [1, 3, 5, 7, 9, 11, 15, 18, 20, 22, 24, 25, 26, 27, 50, 100];

let a =[]

console.log(a.length);



function binarySearch(arr, i) {
  let mid = Math.floor(arr.length / 2);
  // console.log(arr[mid], i);

  if (arr[mid] === i) {
      console.log('match', arr[mid], i);
      return arr[mid];
  } else if (arr[mid] < i && arr.length > 1) {
      // console.log('mid lower', arr[mid], i);
      return binarySearch(arr.splice(mid, Number.MAX_VALUE), i);
  } else if (arr[mid] > i && arr.length > 1) {
      // console.log('mid higher', arr[mid], i);
      return binarySearch(arr.splice(0, mid), i);
  } else {
      // console.log('not here', i);
      return -1;
  }

}
let e = 50
console.time("start")
let result = binarySearch(a, e);
console.log(result);
console.timeEnd("start")

let array = [1, 3, 5, 7, 9, 11, 15, 18, 20, 22, 24, 25, 26, 27, 50, 100];

function arraySearch(){

  
}


