function solution(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    let count = 0;
    let lose = 0;
    for (let j = 0; j < stages.length; j++) {
      if (i == stages[j]) {
        count++;
      } else if (i > stages[j]) {
        lose++;
      }
    }
    result.push([i, count / (stages.length - lose)]);
  }
  result = result.sort((a, b) => b[1] - a[1]);
  return result.map((a) => a[0]);
}

let n1 = 5;
let n2 = 4;

let stages1 = [2, 1, 2, 6, 2, 4, 3, 3];
let stages2 = [4, 4, 4, 4, 4];

console.log(solution(n1, stages1));
//console.log(solution(n2,stages2));
