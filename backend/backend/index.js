import express from 'express'
import cors from 'cors'
import { getAllPosts, createPost, createDatabase } from './db.js'

const app = express()
const port = 3000
// This line is necessary to parse the request body
app.use(express.json());

console.log('enable Cors');
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/post', async (req, res) => {
  const [title, description, image] = [req.body.title, req.body.description, req.body.image]
  console.log(title, description, image);
  const posts = await createPost(title, description, image)
  res.json(posts)
})

app.get('/posts', async (req, res) => {
  const posts = await getAllPosts()
  res.json(posts)
})

app.post('/start', async (req, res) => {
  const posts = await createDatabase()
  res.json(posts)
})

app.get('/total-posts', async (req, res) => {
  const totalPosts = await getTotalPosts();
  res.json({ totalPosts });
});

app.listen(port, () => {
  console.log(`Server listening at http://127.0.0.1:${port}`)
})