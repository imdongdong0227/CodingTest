const parentQuizData = [
    { 
        question: '부모님 질문 : 갓생이란 신조어는 무슨 뜻 일까요?', 
        options: ['갓(모자)을 쓰고 사는 삶', '성실하고 착실하게 사는 삶', '한탕주의적 삶을 추구하는 것'], 
        correctAnswer: '성실하고 착실하게 사는 삶' 
    },
    { 
        question: '부모님 질문 : 할많하않이란 줄임말은 무슨 뜻 일까요?', 
        options: ['할 일이 많아서 하지 못한다는 뜻', '할 말은 많지만 하지 않겠다', '하늘을 보며 많은 생각하는 것'], 
        correctAnswer: '할 말은 많지만 하지 않겠다' 
    },
    { 
        question: '부모님 질문 : 만반잘부란 줄임말은 무슨 뜻 일까요?', 
        options: ['만나서 반가워 잘 부탁해', '만두 반 접시 잘 부탁해', '만반의 준비를 잘 부탁해'], 
        correctAnswer: '만나서 반가워 잘 부탁해' 
    },
    {
        question: '부모님 질문 : 억텐이란 줄임말은 무슨 뜻 일까요?',
        options: ['억울한 상황에서 내는 목소리 크기', '텐션이 억수로 높은 사람', '억지로 끌어올린 텐션'],
        correctAnswer: '억지로 끌어올린 텐션'
    },
    {
        question: '부모님 질문 : 꾸안꾸란 줄임말은 무슨 뜻 일까요?',
        options: ['꾸미기 싫은 사람을 가리키는 말', '꾸미기 싫지만 어쩔 수 없이 꾸민 상태', '꾸민 듯 안 꾸민 듯'],
        correctAnswer: '꾸민 듯 안 꾸민 듯'
    },
    {
        question:'부모님 질문 : 탈덕이란 줄임말은 무슨 뜻 일까요?',
        options:['탈출을 목적으로 떠나는 것', '덕질에서 빠져나온 것', '덕분에 행복하게 사는 삶'],
        correctAnswer: '덕질에서 빠져나온 것'
    }

];

const childrenQuizData = [
    { 
        question: '자녀 질문 : 2000년대 초반 한국에서 가장 유명한 인터넷 유머 사이트는 무엇일까요?', 
        options: ['네이버 카페','웃긴대학','다음 카페'], 
        correctAnswer: '웃긴대학' 
    },
    { 
        question: '자녀 질문 : 2000년대 초반을 강타한 "싸이월드"에서 가장 인기 있었던 기능은 무엇일까요?', 
        options: ['인맥 쌓기', '미니홈피 꾸미기', '실시간 게임하기',], 
        correctAnswer: '미니홈피 꾸미기' 
    },
    { 
        question: '자녀 질문 : 2000년대에 방영된 국민 드라마 <대장금>의 주인공 장금을 연기한 배우는 누구일까요?', 
        options: ['한가인', '이영애', '김희선'], 
        correctAnswer: '이영애' 
    },
    {
        question: '자녀 질문 : 2000년대 초반에 대한민국을 뒤흔든 국민 아이템인 "연아의 반지"는 누구의 이름을 딴 것일까요?',
        options: ['김연아', '최연아', '김태연'],
        correctAnswer: '김연아'
    },
    {
        question: '자녀 질문 : 2000년대 초반에 가장 유행했던 휴대전화 액세서리는 무엇일까요?',
        options: ['액정 보호 필름', '휴대폰 줄', '휴대폰 케이스'],
        correctAnswer: '휴대폰 줄'
    },
    {
        question: '자녀 질문 : 2000년대 중후반에 개봉한 한국 영화 <웰컴 투 동막골>의 주제는 무엇일까요?',
        option:['휴전선 근처의 마을에서 벌어진 사건','북한과 남한 군인들이 우연히 만난 이야기','시골에서 동물원을 여는 이야기'],
        correctAnswer: '북한과 남한 군인들이 우연히 만난 이야기'}
];


function getRandomQuestions(quizData) {
    let shuffled = quizData.sort(() => 0.5 - Math.random());  
    return shuffled.slice(0, 3);  
}

const parentQuizContainer = document.getElementById('parentQuizContainer');
const childrenQuizContainer = document.getElementById('childrenQuizContainer');

const randomParentQuiz = getRandomQuestions(parentQuizData);
const randomChildrenQuiz = getRandomQuestions(childrenQuizData);


randomParentQuiz.forEach((quiz, index) => {
    const questionElement = document.createElement('div');
    let optionsHTML = '';
    quiz.options.forEach(option => {
        optionsHTML += `<label><input type="radio" name="parentAnswer${index}" value="${option}"> ${option}</label><br>`;
    });
    questionElement.innerHTML = `
        <p>${quiz.question}</p>
        ${optionsHTML}
    `;
    parentQuizContainer.appendChild(questionElement);
});


randomChildrenQuiz.forEach((quiz, index) => {
    const questionElement = document.createElement('div');
    let optionsHTML = '';
    quiz.options.forEach(option => {
        optionsHTML += `<label><input type="radio" name="childrenAnswer${index}" value="${option}"> ${option}</label><br>`;
    });
    questionElement.innerHTML = `
        <p>${quiz.question}</p>
        ${optionsHTML}
    `;
    childrenQuizContainer.appendChild(questionElement);
});

document.getElementById('submitBtn').addEventListener('click', function() {
    let parentCorrectCount = 0; 
    let childrenCorrectCount = 0; 

    if (!randomChildrenQuiz || randomChildrenQuiz.length === 0) {
        console.error('randomChildrenQuiz 배열이 비어 있거나 정의되지 않았습니다.');
    }

    randomParentQuiz.forEach((quiz, index) => {
        const selectedAnswer = document.querySelector(`input[name="parentAnswer${index}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === quiz.correctAnswer) {
            parentCorrectCount++; 
        }
    });

    if (!randomParentQuiz || randomParentQuiz.length === 0) {
        console.error('randomParentQuiz 배열이 비어 있거나 정의되지 않았습니다.');
    }
    
    randomChildrenQuiz.forEach((quiz, index) => {
        const selectedAnswer = document.querySelector(`input[name="childrenAnswer${index}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === quiz.correctAnswer) {
            childrenCorrectCount++; 
        }
    });

    
    document.getElementById('parentResult').textContent = `부모님은 총 ${parentCorrectCount}개의 질문을 맞췄습니다.`;
    document.getElementById('childrenResult').textContent = `자녀는 총 ${childrenCorrectCount}개의 질문을 맞췄습니다.`;
});