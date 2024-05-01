import conn from './connection.js'

export async function getAllPosts() {
    try {
        const [rows] = await conn.query('SELECT title, description, image FROM blog_posts')
        return rows;
    } catch (e) {
        console.log(e);
        return e;
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
            description TEXT NOT NULL,
            image Varchar(255) NOT NULL
        );`)
        return result
    } catch (e) {
        console.log(e)
        return e
    }
}