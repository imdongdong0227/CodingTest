class Solution {
    public int solution(int[] num_list) {
        int answer = 0;
        int even=0;
        int odd=0;
        for(int i=0;i<num_list.length;i++){
            switch(i%2){
                case -1: odd+=num_list[i];break;
                case 1 : odd+=num_list[i];break;
                case 0 : even+=num_list[i];
            }
        }
        if(odd>=even){
            answer=odd;
        }
        else if(even>=odd){
            answer=even;
        }
        return answer;
    }
}