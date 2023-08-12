import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const videoPlayer = document.querySelector('iframe')
const player = new Player(videoPlayer);
console.log(player)

const onPlay = function (data) {
    localStorage.setItem("videoplayer-current-time", data.seconds)
}

player.on('timeupdate', throttle(onPlay, 1000))
player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time") || 0))