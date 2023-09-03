// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  let c = commands;
  let result = [];
  for (let i = 0; i < c.length; i++) {
    let a = array.slice(c[i][0] - 1, c[i][1]);
    a.sort((a, b) => a - b);
    result.push(a[c[i][2] - 1]);
  }
  return result;
}

let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

console.log(solution(array, commands));
