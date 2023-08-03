// https://school.programmers.co.kr/learn/courses/30/lessons/138477
// 정렬
function solution(k, score) {
  let result = [];
  let arr = [];
  for(let i=0; i<score.length; i++) {
    if(i<k) {
      arr.push(score[i]);
    } else {
      arr.sort((a,b) => a-b).reverse();
      if(score[i] < Math.min(...arr)) {
        result.push(Math.min(...arr));
        continue;
      }
      arr.pop();
      arr.push(score[i]);
    }
    result.push(Math.min(...arr));
  }
  return result;
}

let k = 3, score = [10, 100, 20, 150, 1, 100, 200];
console.log(solution(k, score));
k = 4, score = [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000];
console.log(solution(k, score));

// 18분