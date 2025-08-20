document.getElementById('apmcform').addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  fetch('save', {
    method: 'POST',
    body: new URLSearchParams(formData),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  })
  .then(res => res.json())
  .then(data => alert(data.message))
  .catch(err => console.error('Error:', err));
});
