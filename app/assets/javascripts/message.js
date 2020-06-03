$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="message">
         <div class="outline">
           <div class="members-name">
             ${message.user_name}
           </div>
           <div class="time-tag">
             ${message.created_at}
           </div>
         </div>
         <div class="detail">
           <p class="__content">
             ${message.content}
           </p>
         </div>
         <img src=${message.image} >
       </div>`
     return html;
   } else {
     var html =
      `<div class="message">
         <div class="outline">
           <div class="members-name">
             ${message.user_name}
           </div>
           <div class="time-tag">
             ${message.created_at}
           </div>
         </div>
         <div class="detail">
           <p class="detail__content">
             ${message.content}
           </p>
         </div>
       </div>`
     return html;
   };
 }
$('#new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
  .done(function(data){
    var html = buildHTML(data);
    $('.main-chat__messages').append(html);
    $('.new_message')[0].reset();
    $('.main-chat__messages').animate({ scrollTop: $('.main-chat__messages')[0].scrollHeight});
    $('.form__submit').prop('disabled', false);
  })
  .fail(function() {
    alert("メッセージ送信に失敗しました");
    $('.form__submit').prop('disabled', false);
  });

})
});