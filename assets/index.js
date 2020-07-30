
function goCelebrateYourBirthday() {
   const video = document.querySelector('video')
   video.play();
   setTimeout(() => video.style.opacity = '1', 1000);
   console.clear()
}

const btn = document.querySelector('.start');

btn.addEventListener('click', () => {
    goCelebrateYourBirthday();
    btn.outerHTML = null;
})