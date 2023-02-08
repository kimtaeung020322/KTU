function solution(num_list) {
  var answer = [];

  for (let i = 1; i < num_list.length; i++) {
    answer.push(num_list.length - 1);
  }
  return answer;
}
