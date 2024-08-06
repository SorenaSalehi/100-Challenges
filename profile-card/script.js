'use strict'
const messageBtn = document.querySelector('.message')
const followBtn = document.querySelector('.follow')
const myTelegram = 'CybreGuitar'
const myLinkdln = 'https://www.linkedin.com/in/sorenasalehi/'
const message = encodeURIComponent('Hello I would Liake To Connect You 😊')
const sendingTelegram = function(){
    window.open(`https://t.me/${myTelegram}?text=${message}`, '_blank')
}
messageBtn.addEventListener('click',sendingTelegram)
followBtn.addEventListener('click',function(){
    window.open(myLinkdln)
})