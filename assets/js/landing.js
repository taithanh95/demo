function toggleDiv(clsName){
  $("." + clsName).toggle();
}
function showNotification(msg){
  alert(msg);
}
function resizeIframe(obj) {
  obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}
$(document).ready(function(){
  setTimeout(function(){
    $('.carousel').carousel();
  }, 1000);
})
