class Solution {
    public int[] solution(int[] arr) {
        if(arr.length==1){
            arr[0]=-1;
            return arr;
        }
        int min=0;
        for(int i =0;i<arr.length;i++){
                if(arr[min]>arr[i]){
                    min=i;
                }
               
        }
        int[] answer =new int [arr.length-1];
        
        int index=0;
        for(int i =0;i<arr.length;i++){
            if(i!=min){
                answer[index++]=arr[i];
            }
        }
        
        return answer;
    }
}