// https://school.programmers.co.kr/learn/courses/30/lessons/17681

/*
arr1, arr2 를 입력받고
이중 포문 -> n번(배열) arr1[i], arr2[i] 
        n번 -> 배열 요소 -> 2진수 toString(2)-> 
                ex ) 00110 -> length 3
비교 -> 결과 parseInt() 사용 push
결과 리턴
*/

function solution(n, arr1, arr2) {
  let result = [];
  for (let i = 0; i < n; i++) {
    let arr = (arr1[i] | arr2[i]).toString(2);
    arr = arr.split("");
    while (arr.length < n) {
      arr.unshift("0");
    }
    console.log(arr);
    result.push(arr.map((i) => (i === "1" ? "#" : " ")).join(""));
  }
  return result;
}
