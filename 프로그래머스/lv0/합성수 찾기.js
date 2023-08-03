// 약수의 개수가 세 개 이상인 수를 합성수라 함.
function solution(n) {
  let count = 0;
  let div = 0;
  for(let i=4; i<=n; i++) {
    for(let j=1; j<=i; j++) {
      if(i%j==0) div++;
    }
    if(div >= 3) {
      count ++;
      div = 0;
    }
  }
  return count;
}

let n = 10;
console.log(solution(n));
n = 15;
console.log(solution(n));

// 6분 30초