// https://school.programmers.co.kr/learn/courses/30/lessons/43238
// 이진 탐색
function solution(n, times) {
  let minTime = 1;
  let maxTime = times[times.length-1]*n;
  let searchTarget;
  let result;

  while(minTime <= maxTime) {
    searchTarget = parseInt((minTime+maxTime)/2);
    if(confirmTime(n, times, searchTarget)){ // 조건 만족 --
      result = searchTarget;
      maxTime = searchTarget-1;
    }else { // 조건 불만족 ++
      minTime = searchTarget+1;
    }
  }
  return result;
}

function confirmTime(n, times, target) {
  let count = 0;
  for(let i=0; i<times.length; i++) {
    count += parseInt(target/times[i]);
    if(count >= n) return true;
  }
  return false;
}

let n=6, times=[7,10]
console.log(solution(n, times));