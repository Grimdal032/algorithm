// https://school.programmers.co.kr/learn/courses/30/lessons/159994
// 자료구조

function solution(cards1, cards2, goal) {
  for(let i=0; i<goal.length; i++) {
    if(goal[i] === cards1[0]) {
      cards1.reverse().pop();
      cards1.reverse();
    } else if(goal[i] === cards2[0]) {
      cards2.reverse().pop();
      cards2.reverse();
    } else {
      return "No";
    }
  }
  return "Yes";
}

let cards1 = ["i", "drink", "water"], cards2 = ["want", "to"], goal = ["i", "want", "to", "drink", "water"];
console.log(solution(cards1, cards2, goal));
cards1 = ["i", "water", "drink"], cards2 = ["want", "to"], goal = ["i", "want", "to", "drink", "water"];
console.log(solution(cards1, cards2, goal));

// 7분