const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vijaytambad:vijay9986626806@cluster0.b2vxn7c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('Mongo Error:', err));
