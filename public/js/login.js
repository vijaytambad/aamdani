//const { json } = require("body-parser");

$('#loginBtn').click(function (e) {
  e.preventDefault();
  const data = {
    username: $('input[name="username"]').val(),
    password: $('input[name="password"]').val()
  };
  alert(data);
  $.ajax({
    url: 'api/user/login',
    method: 'POST',
    data:data,
    success: function (res) {
      alert(res);
    }
  });
});
