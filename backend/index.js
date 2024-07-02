const express = require('express')
const usersRouter = require('./routers/users.router')
const postsRouter = require('./routers/posts.router')
const cors = require('cors');

const app = express()
const port = 3000

const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());

// Routers
app.use('/users', usersRouter);
app.use('/posts', postsRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  mongoose
    .connect('mongodb+srv://acular:lenovo22@cluster0.fm5mtv5.mongodb.net/friendr?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
      console.log('Connected to DB an listening on port 3000');
      // todo: remove
      const Cat = mongoose.model('Cat', { name: String });
      const kitty = new Cat({ name: 'Zildjian' });
      kitty.save().then(() => console.log('meow'));
    })
    .catch((err) => console.error(err));
});