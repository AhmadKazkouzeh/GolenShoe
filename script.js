
setTimeout(function(){
    $('[data-toggle="tooltip"]').tooltip('show');
}, 500)

var chatEnabled = false;
document.getElementsByClassName("chatButton")[0].addEventListener('click', ()=>{
    $('[data-toggle="tooltip"]').tooltip('destroy');
    if(chatEnabled){
        document.getElementsByClassName("chatContainer")[0].style.display = "none";
    }
    else{
        document.getElementsByClassName("chatContainer")[0].style.display = "block";
    }
    chatEnabled = !chatEnabled
})
function proccessKey(e, i){
    if(e.keyCode == 13){
        e.preventDefault();
        selfReply(i);
        input_box.value = '';
        setTimeout(()=>{},1000)
    }
}
let bot = new RiveScript();
const brains = [
    './brain.rive'
 ];
 bot.loadFile(brains).then(botReady).catch(botNotReady);
 const message_container = document.querySelector('.chatContainer>.messages');
const form = document.querySelector('form');
const input_box = document.querySelector('.input>input');

form.addEventListener('submit', (e) => {
 e.preventDefault();
 selfReply(input_box.value);
 alert(input_box.value)
 input_box.value = '';
});
function botReply(message){
 message_container.innerHTML += `<div class='message bot'>${message}</div>`;
 location.href = '#edge';
 document.getElementsByClassName('messages')[0].scrollTop = document.getElementsByClassName('messages')[0].scrollHeight;

}
function selfReply(message){
 message_container.innerHTML += `<div class='message user'>${message}</div>`;
 location.href = '#edge';
 
 bot.reply('local-user', message).then(function(reply) {
 botReply(reply);
 });
}
function botReady(){
 bot.sortReplies();
}
function botNotReady(err){
 console.log('An error has occurred.', err);
}
var itemProductEnabled = false;
function showItem(title, price, image, inStock){
    if(itemProductEnabled){
        document.getElementById("item").style.display = "none";
        itemProductEnabled = false;
    }
    else{
        itemProductEnabled = true;
        document.getElementById("item").style.display = "flex";
        document.querySelector('.right .title').innerText = title;
        document.querySelector('.right .price').innerText = price;
        document.querySelector('.left .image').style.background = "url("+image+")";
        if (inStock) {
            document.querySelector('.right .outOfStock').style.display="none";
            document.querySelector('.right .buy').style.display="inline-block";
            document.querySelector('.right .add').style.display="inline-block";
        }
        else{
            document.querySelector('.right .add').style.display="none";
            document.querySelector('.right .buy').style.display="none";
            document.querySelector('.right .outOfStock').style.display="inline-block";
        }
    }
}
  // Also can pass in optional settings block
  var rellax = new Rellax('.companyTitle', {
    speed: -9,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });