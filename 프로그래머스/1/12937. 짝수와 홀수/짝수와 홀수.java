class Solution {
    public String solution(int num) {
        String answer = "";
       switch(num%2){
           case 0 : answer="Even"; break;
           case 1 : answer="Odd";
           case -1 : answer="Odd";
       }
        return answer;
    }
}