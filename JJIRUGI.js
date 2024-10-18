const socket = new WebSocket('ws://localhost:8080');

socket.onmessage = function(event) {
    alert('상대방에게 알림이 전송되었습니다.'); 
};


document.getElementById('pokeBtn').addEventListener('click', function() {
    socket.send('찌르기 버튼을 눌렀습니다!'); 
    alert('상대에게 알림이 전송되었습니다.'); 
});