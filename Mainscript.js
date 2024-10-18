document.addEventListener('DOMContentLoaded', function() {
    
    var children = new Array(10);  
    var parents = new Array(10);   

    
    parents[0] = "부모는 우리 삶의 책임있는 원년이자 평생의 조력자입니다.";
    parents[1] = "부모의 눈은 항상 우리를 향하고 있으며, 그들이 우리의 인생에 어떤 역할을 하는지를 나타냅니다.";
    parents[2] = "아이들은 부모의 말보다 행동을 더 잘 기억한다.";
    parents[3] = "가장 큰 선물은 시간을 함께 보내는 것이다.";
    parents[4] = "사랑은 자녀를 키우는 가장 중요한 비결이다.";
    parents[5] = "자녀는 부모의 거울이다. 당신이 어떤 사람이냐에 따라 그들도 자라난다.";
    parents[6] = "아이의 성공은 부모의 사랑과 지지가 있기에 가능하다.";
    parents[7] = "부모의 사랑은 언제나 자녀의 안전망이다.";
    parents[8] = "아이와의 대화는 관계를 더욱 깊게 만든다.";
    parents[9] = "사랑과 인내로 자녀를 키우는 것은 가장 아름다운 여정이다.";

    
    children[0] = "용서는 약한 자의 덕목이 아니다. 용서는 강한 자의 특징이다. - 마하트마 간디";
    children[1] = "사랑은 서로의 차이를 받아들이는 것이다. – 톨레랑스";
    children[2] = "말은 화살과 같다. 한 번 내뱉으면 되돌릴 수 없다. – 아랍 속담";
    children[3] = "화해는 단지 침묵이 아니라, 서로의 말을 들어주는 것이다. – 탈무드";
    children[4] = "가장 좋은 방법은 이해하는 것, 두 번째는 사랑하는 것, 세 번째는 용서하는 것이다. – 프란시스 드 살레";
    children[5] = "화는 내 마음속 불씨다. 타오르게 할지 끌지는 나의 선택이다. – 불교 격언";
    children[6] = "서로를 용서하는 것은 자신의 마음에 평화를 주는 일이다. – 존 레논";
    children[7] = "어려운 상황에서도 서로를 놓치지 말자. – 작자 미상";
    children[8] = "사랑은 완벽한 것이 아니라, 서로를 포기하지 않는 것이다. – 작자 미상";
    children[9] = "우리는 모두 실수를 한다. 중요한 것은 그 후에 어떻게 행동하느냐이다. – 작자 미상";




    var parentsDiv = document.getElementById('parentsMessages');
    var childrenDiv = document.getElementById('childrenMessages');

    
    if (!parentsDiv || !childrenDiv) {
        console.error("부모 또는 자녀 메시지를 표시할 div 요소를 찾을 수 없습니다.");
        return;
    }

    
    function num(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    var randomParentIndex = num(0, parents.length - 1);  
    if (parents[randomParentIndex]) { 
        var p = document.createElement('p');  
        p.textContent = parents[randomParentIndex];  
        parentsDiv.appendChild(p);  
    }

    
    var randomChildrenIndex = num(0, children.length - 1);  
    if (children[randomChildrenIndex]) {  
        var p = document.createElement('p');  
        p.textContent = children[randomChildrenIndex];  
        childrenDiv.appendChild(p);  
    }

    localStorage.setItem("1", "미톤");

    console.log(localStorage.getItem("1"))
});