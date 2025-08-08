$('#loginForm').submit(function (e) {
  e.preventDefault();
  alert("hi");
  const data = {
    username: $('input[name="username"]').val(),
    password: $('input[name="password"]').val()
  };

  $.ajax({
    url: '/login',
    method: 'POST',
    data,
    success: function (res) {
      if (res.success) {
        window.location.href = '/api/apmc/apmcs';
      } else {
        $('#loginError').text(res.message);
      }
    }
  });
});
