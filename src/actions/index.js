const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'

const API_KEY = '?key=bluecoconut812';

let fetchPosts = () => {


  let request = fetch(`${ROOT_URL}/posts${API_KEY}`)
    .then(r=>r.json())

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export {fetchPosts, FETCH_POSTS}
