import conn from './connection.js'

export async function getAllPosts() {
    const [rows] = await conn.query('SELECT * FROM blog_posts')
    return rows
}

export async function createPost(title, description) {
    try {
        const [result] = await conn.query(`INSERT INTO blog_posts (title, description) VALUES ('${title}', '${description}')`)
        return result

    } catch (e) {
        console.log(e)
        return e
    }
}
export async function deletePost(id) {
    try {
        const [result] = await conn.query(`DELETE FROM blog_posts WHERE id = '${id}'`);
        return result;
    } catch (e) {
        console.log(e);
        return e;
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