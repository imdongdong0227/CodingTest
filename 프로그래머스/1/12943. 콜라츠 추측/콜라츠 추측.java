class Solution {
    public int solution(int num) {
        int answer = 0;
        int cnt=0;
        if (num == 1) {
            return 0;
        }
        do{
            if(num%2==0){
                num=num/2;
            }
            else if(num%2==1){
               num=num*3+1;
            }
            cnt++;
            if(cnt>=500){
                cnt=-1;
                break;
            }
            
            
        }while(num!=1);
        answer=cnt;
        return answer;
    }
}