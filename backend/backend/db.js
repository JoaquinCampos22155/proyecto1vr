import conn from './connection.js'

export async function getAllPosts() {
    try {
        const posts = await getAllPost()
        res.status(200).json(posts)
      } catch (error) {
        res.status(500).json({ message: 'error retrieving the post' })
      }
}


export async function createPost(title, description, image) {
    try {
        const [result] = await conn.query(`INSERT INTO blog_posts (title, description, image) VALUES ('${title}', '${description}', '${image}')`)
        return result

    } catch (e) {
        console.log(e)
        return e
    }
}

export async function getTotalPosts() {
    try {
        const [rows] = await conn.query('SELECT COUNT(*) AS total FROM blog_posts');
        const { total } = rows[0];
        return total;
    } catch (e) {
        console.error(e);
        return e;
    }
}
export async function createDatabase() {
    try {
        const [result] = await conn.query(`CREATE TABLE IF NOT EXISTS blog_posts (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description TEXT NOT NULL
        );`)
        return result
    } catch (e) {
        console.log(e)
        return e
    }
}