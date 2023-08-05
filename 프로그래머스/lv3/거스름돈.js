//


// 1. 재귀함수
// 정확성 테스트는 통과했으나, 효율성 테스트를 통과하지 못함
// function solution(n, money) {
//   if(n === 0) return 1;
//   if(n < 0 || money.length == 0) return 0;
//   return solution(n, money.slice(1)) + solution(n-money[0], money);
// }

// function solution(n, money) {
//   const memo = Array(n+1).fill(0);
//   memo[0] = 1;
//   for(let i=0; i<money.length; i++) {
//     for(let j=money[i]; j<=n; j++) {
//       console.log(`i=${i}, j=${j}, memo=${memo}`);
//       console.log(memo[j] += memo[j-money[i]]);
//       console.log(memo);
//       //memo[j] += memo[j-money[i]];
//     }
//   }
//   return memo[n];
// }

function solution(n, money) {
  m = money.reverse();
  function countCombinations(n,m){
    if(m.length == 1) {
      while(true) {
        n -= m[0];
        if(n === 0) return 1;
        if(n < 0) return 0;
      }
    }
    if(n === 0) return 1;
    if(n < 0 || m.length == 0) return 0;
    
    return countCombinations(n, m.slice(1)) + countCombinations(n-m[0], m);
  }
  return countCombinations(n,m);
}

let n = 5, money = [1,2,5]
console.log(solution(n,money));

// 10[5,2,1]
// 5[2,1] + 5[5,2,1]
// 3[1] + 5[2,1] + 0[2,1] + 0[5,2,1]
// 