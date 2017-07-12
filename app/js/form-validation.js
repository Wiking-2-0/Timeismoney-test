$(function() {
  $("form[name='send-message']").validate({
    rules: {
      name: "required",
      message: "required",
      email: {
        required: true,
        email: true
      }
    },

    messages: {
      name: "Please enter your name",
      message: "Please enter your message",
      email: "Please enter a valid email address"
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});