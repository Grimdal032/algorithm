// https://school.programmers.co.kr/learn/courses/30/lessons/12940

function solution(n, m) {
  let maxDiv;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && m % i === 0) {
      maxDiv = i;
    }
  }
  let minMul = (n * m) / maxDiv;
  return [maxDiv, minMul];
}
