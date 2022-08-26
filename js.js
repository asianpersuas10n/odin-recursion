function fibs(num) {
  if (num < 2) {
    if (num === 1) {
      return [0, 1];
    }
    return [0];
  }
  let arr = [0, 1];
  let f1 = 1;
  let f2 = 0;
  let f3 = 0;
  for (let i = 2; i <= num; i++) {
    f3 = f1 + f2;
    f2 = f1;
    f1 = f3;
    arr.push(f1);
  }
  return arr;
}

console.log(fibs(6));

function fibsRec(num) {
  if (num === 1) {
    return [0, 1];
  }
  let arr = fibsRec(num - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return arr;
}

console.log(fibsRec(6));

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let leftArr = arr.slice(0, Math.floor(arr.length / 2));
  let rightArr = arr.slice(Math.floor(arr.length / 2, arr.length));

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right) {
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}
console.log(mergeSort([2, 8, 10, 100, 40, 23, 1]));
