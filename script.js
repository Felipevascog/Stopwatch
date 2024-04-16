document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad del cronómetro
    let stopwatchInterval;
    let stopwatchRunning = false;
    let stopwatchSeconds = 0;

    function updateStopwatchDisplay() {
        let hours = Math.floor(stopwatchSeconds / 3600);
        let minutes = Math.floor((stopwatchSeconds % 3600) / 60);
        let seconds = stopwatchSeconds % 60;

        document.getElementById('stopwatchDisplay').innerText =
            `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }

    document.getElementById('stopwatchBtn').addEventListener('click', function() {
        clearInterval(stopwatchInterval);
        stopwatchSeconds = 0;
        updateStopwatchDisplay();
        document.getElementById('stopwatchSection').style.display = 'block';
        document.getElementById('countdownSection').style.display = 'none';
    });

    document.getElementById('startStopBtn').addEventListener('click', function() {
        if (stopwatchRunning) {
            clearInterval(stopwatchInterval);
            document.getElementById('startStopBtn').innerText = 'Start';
        } else {
            stopwatchInterval = setInterval(function() {
                stopwatchSeconds++;
                updateStopwatchDisplay();
            }, 1000);
            document.getElementById('startStopBtn').innerText = 'Stop';
        }
        stopwatchRunning = !stopwatchRunning;
    });

    document.getElementById('clearStopwatchBtn').addEventListener('click', function() {
        clearInterval(stopwatchInterval);
        stopwatchRunning = false;
        stopwatchSeconds = 0;
        updateStopwatchDisplay();
    });

    // Funcionalidad del temporizador
    let countdownInterval;
    let countdownRunning = false;
    let countdownSeconds = 0;

    function updateCountdownDisplay() {
        let minutes = Math.floor(countdownSeconds / 60);
        let seconds = countdownSeconds % 60;

        document.getElementById('countdownDisplay').innerText =
            `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }

    document.getElementById('countdownBtn').addEventListener('click', function() {
        clearInterval(countdownInterval);
        countdownRunning = false;
        countdownSeconds = 0;
        updateCountdownDisplay();
        document.getElementById('stopwatchSection').style.display = 'none';
        document.getElementById('countdownSection').style.display = 'block';
    });

    document.getElementById('setCountdownBtn').addEventListener('click', function() {
        countdownSeconds = parseInt(document.getElementById('countdownInput').value);
        updateCountdownDisplay();
    });

    document.getElementById('startPauseCountdownBtn').addEventListener('click', function() {
        if (countdownRunning) {
            clearInterval(countdownInterval);
            document.getElementById('startPauseCountdownBtn').innerText = 'Start';
        } else {
            countdownInterval = setInterval(function() {
                if (countdownSeconds > 0) {
                    countdownSeconds--;
                    updateCountdownDisplay();
                } else {
                    clearInterval(countdownInterval);
                    countdownRunning = false;
                    document.getElementById('startPauseCountdownBtn').innerText = 'Start';
                }
            }, 1000);
            document.getElementById('startPauseCountdownBtn').innerText = 'Pause';
        }
        countdownRunning = !countdownRunning;
    });

    document.getElementById('clearCountdownBtn').addEventListener('click', function() {
        clearInterval(countdownInterval);
        countdownRunning = false;
        countdownSeconds = 0;
        updateCountdownDisplay();
    });
});
