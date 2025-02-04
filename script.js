// Configuración del reproductor HLS
const video = document.getElementById('hls-video');
const hls = new Hls();
const streamUrl = 'https://tv.nknews.org/tvhls/stream.m3u8'; // Cambia esto por tu URL de HLS

if (Hls.isSupported()) {
    hls.loadSource(streamUrl);
    hls.attachMedia(video);
} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = streamUrl;
}

// Actualización de la hora de Corea del Sur
function updateKoreaTime() {
    const koreaTime = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Seoul',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });
    document.getElementById('time').textContent = `North Korea Time: ${koreaTime}`;
}

// Actualizar cada segundo
setInterval(updateKoreaTime, 1000);
updateKoreaTime();
