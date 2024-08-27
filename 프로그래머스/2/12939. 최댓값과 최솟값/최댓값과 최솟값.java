import java.util.Arrays;

class Solution {
    public String solution(String s) {
        // 공백을 기준으로 문자열 자르기
        String[] tmpArr = s.split(" "); 
        
        int[] result = new int[tmpArr.length];
        
        // 배열의 원소들을 int로 바꾸어 준다
        for (int i = 0; i < result.length;i++){
            result[i] = Integer.parseInt(tmpArr[i]);
        }
        
        // 오름차순 정렬하기
        Arrays.sort(result);    
        
        // 배열의 최솟값은 0번째 최댓값은 배열의 크기 -1
        // int + String은 String으로 취급이 된다
        return result[0] + " " + result[result.length-1];
    }
}