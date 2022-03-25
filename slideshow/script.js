let imageArray = ['http://surl.li/bnxpt', 'http://surl.li/bnxqc', 'http://surl.li/bnxqf', 'http://surl.li/bnxxi','http://surl.li/bnxxj']
document.getElementById('slideshow').style.backgroundImage = `url("${imageArray[0]}")`
let interval
let currentImage = 0
for (let i = 0; i<imageArray.length;i++){
    document.getElementById('navBar').innerHTML += `<input type="radio" name="currentImage" id="radio${i}" onchange="imageChange(${i})">`
}
document.getElementById('radio0').checked = true
function moveForward(){
    if (currentImage < imageArray.length-1) currentImage += 1
    else currentImage = 0
    document.getElementById('slideshow').style.backgroundImage = `url("${imageArray[currentImage]}")`
    document.getElementById(`radio${currentImage}`).checked = true
}
function moveBackward(){
    if (currentImage > 0) currentImage -= 1
    else currentImage = imageArray.length-1
    document.getElementById('slideshow').style.backgroundImage = `url("${imageArray[currentImage]}")`
    document.getElementById(`radio${currentImage}`).checked = true
}
function imageChange(num){
    document.getElementById('slideshow').style.backgroundImage = `url("${imageArray[num]}")`
}
function autoPlay(){
    interval = setInterval(moveForward, 3000)
    document.getElementById('autoPlayButton').innerText = 'Pause'
    document.getElementById('autoPlayButton').setAttribute('onclick', 'autoPlayPause()')
}
function autoPlayPause(){
    clearInterval(interval)
    document.getElementById('autoPlayButton').innerText = 'Play'
    document.getElementById('autoPlayButton').setAttribute('onclick', 'autoPlay()')
}