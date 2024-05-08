import express from 'express';
import cors from 'cors';
import { getAllPosts, createPost, createDatabase, getTotalPosts, deletePost } from './db.js';

const app = express();
const port = 3000;
// This line is necessary to parse the request body
app.use(express.json());

console.log('enable Cors');
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/post', async (req, res) => {
  const [title, description] = [req.body.title, req.body.description];
  console.log(title, description);
  const posts = await createPost(title, description);
  res.json(posts);
});

app.delete('/fpost', async (req, res) => {
  try {
    const posts = await deletePost();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'error borrando el post' });
  }
});

app.get('/posts', async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'error retrieving the post' });
  }
});

app.post('/start', async (req, res) => {
  const posts = await createDatabase();
  res.json(posts);
});


app.get('/total-posts', async (req, res) => {
  const totalPosts = await getTotalPosts();
  res.json({ totalPosts });
});

app.listen(port, () => {
  console.log(`Server listening at http://127.0.0.1:${port}`);
});
