const BASE_URL = 'https://jsonplaceholder.typicode.com';
interface Post {
    id: number;
    title?: string;
    body?: string;
    userId?: number;
}


async function getPosts(){
    try {
        const response = await fetch(`${BASE_URL}/posts`); 
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); 
        console.log('________________All posts getPosts________________');
        console.log(data); 
    } catch (error) {
        console.error(error)
    }
}



async function getPost(id: Number){
    try {
        const response = await fetch(`${BASE_URL}/posts/${id}`); 
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); 
        console.log('________________A post getPost________________');
        console.log(data); 
    } catch (error) {
        console.error(error)
    }
}




async function createPost(post: Post){
    try {
        const option = {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        };

        const response = await fetch(`${BASE_URL}/posts`, option);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); 
        console.log('________________Create New posts createPost________________');
        console.log(data); 
    } catch (error) {
        console.error(error)
    }
}


async function updateFullPost(post: Post){
    try {
        const option = {
            method: 'PUT',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        };
        
        const response = await fetch(`${BASE_URL}/posts/${post.id}`, option);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); 
        console.log('________________Update Full posts updateFullPost________________');
        console.log(data); 
    } catch (error) {
        console.error(error)
    }
}



//can use Partial<Post>
async function updatePartialPost(post: Post){
    let fieldsToBeUpated: Partial<Post> = {};
    try {
        if(post.title){
            fieldsToBeUpated.title = post.title;
        }
        if (post.body) {
            fieldsToBeUpated.body = post.body;
        }
        if (post.userId) {
            fieldsToBeUpated.userId = post.userId;
        }
        console.log(fieldsToBeUpated);
        const option = {
            method: 'PATCH',
            body: JSON.stringify(fieldsToBeUpated),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        };

        const response = await fetch(`${BASE_URL}/posts/${post.id}`, option);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); 
        console.log('________________Update Partial posts updatePartialPost________________');
        console.log(data); 
    } catch (error) {
        console.error(error)
    }
}

async function deletePost(id: Number){
    try {
        const option = {
            method: 'DELETE',
        };

        const response = await fetch(`${BASE_URL}/posts/${id}`, option);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); 
        console.log(`________________Delete posts deletePost --> Result ${response.ok}________________`);
        console.log(data); 
    } catch (error) {
        console.error(error)
    }
}

getPost(1);

const myPost: Post = {
    id: 101,
    title: 'New Post',
    body: 'My new post',
    userId: 1,
};
createPost(myPost);
getPost(1);

const myFullNewPost: Post = {
    id: 1,
    title: 'Full New Post',
    body: 'Full My new post',
    userId: 1,
}
updateFullPost(myFullNewPost);

const myPartialNewPost: Post = {
    id: 1,
    title: 'Partial New Post',
    userId: 1,
}

updatePartialPost(myPartialNewPost);

deletePost(100);

getPosts();