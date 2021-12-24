$(".contact-message-order-support-form").submit(function() {
    var th = $(this);
    $.ajax({
      url: "https://api.slapform.com/khdfkrr@gmail.com", 
      dataType: "json",
      method: 'POST',
      data: th.serialize()
    })

 });