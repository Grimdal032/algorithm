// https://school.programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  let result = 0;
  for (let i = left; i <= right; i++) {
    let count = 1;
    for (let j = 2; j <= i; j++) {
      if (i % j == 0) {
        count++;
      }
    }
    if (count % 2 == 0) {
      result += i;
    } else {
      result -= i;
    }
  }
  return result;
}

let left = 13;
let right = 17;
console.log(solution(13, 17));
