(() => {
    //時間を表示する要素を取得する
    const minElement = document.getElementById('js-min');
    const secElement = document.getElementById('js-sec');

    //カウントダウンの処理
    const clickHandler = (e) => {
       
        const $targetButton = e.currentTarget; 
        let currenttime = parseInt(minElement.textContent) * 60 + parseInt(secElement.textContent);
        //時間を増減する処理
        if($targetButton.textContent === '+') {
            minElement.textContent = Math.floor((currenttime + 60) / 60);
            // 開始処理
        }else {
            minElement.textContent = Math.floor((currenttime - 60) / 60);
        }
        //秒数を計算して表示する
        if($targetButton.textContent === '+') {
            secElement.textContent = (currenttime + 60) % 60;
            // 開始処理
        }else {
            secElement.textContent = Math.floor((currenttime - 60) / 60);
        }
    }
    
    //startボタンを押した時の処理
    const startButton = document.getElementById('js-start');
        startButton.addEventListener('click', (e) => {
    // stopボタンを押した時の処理
    const stopButton = document.getElementById('js-stop');
        stopButton.addEventListener('click', (e) => {
            clearInterval(timerId);
    // resetボタンを押した時の処理
    for (let index = 0; index < document.getElementsByClassName('js-btn').length; index++) {
        document.getElementsByClassName('js-btn')[index].addEventListener('click', (e)=> clickHandler(e))
    }
})();