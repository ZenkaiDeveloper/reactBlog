const FETCH_POSTS = 'fetch_posts';
const CREATE_POST = 'create_post';
const FETCH_POST = 'fetch_post';
const DELETE_POST = 'delete_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';

const API_KEY = '?key=bluecoconut812';

let fetchPosts = () => {
  let request = fetch(`${ROOT_URL}/posts${API_KEY}`)
    .then(r=>r.json())

  return {
    type: FETCH_POSTS,
    payload: request
  }
}


let createPost = (values, callback)=>{
  let options = {
    headers:{
      "content-type" : "application/json"
    },
    method: "POST",
    body:JSON.stringify({
      title: values.title,
      categories: values.categories,
      content: values.content
    })
  }

  let request = fetch(`${ROOT_URL}/posts${API_KEY}`, options).then(()=> callback())
  return{
    type: CREATE_POST,
    payload: request
  }
}


let fetchPost= (id) =>{
  const request = fetch(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(r=>r.json());

    return{
      type: FETCH_POST,
      payload: request
    }

}

let deletePost = (id, callback)=>{

  let options={
    method:"DELETE"
  }
  fetch(`${ROOT_URL}/posts/${id}${API_KEY}`, options)
    .then(()=>callback())

  return{
    type: DELETE_POST,
    payload: id
  }
}

export {fetchPosts, deletePost, DELETE_POST, FETCH_POSTS, FETCH_POST, createPost, CREATE_POST, fetchPost}
