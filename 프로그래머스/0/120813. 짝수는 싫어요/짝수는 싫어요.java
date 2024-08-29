class Solution {
    public int[] solution(int n) {
        int[] answer = {};
        if(n%2==0){
            answer = new int [n/2];
        }    
        else if(n%2==1){
            answer = new int [n/2+1];
        }    
             
          int cnt=0;
        for(int i = 0;i<=n;i++){
            switch(i%2){
                case 1:answer[cnt]+=i; cnt++; 
            }
        }
        return answer;
    }
}