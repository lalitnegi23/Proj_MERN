import axios from 'axios';
const url = 'http://localhost:3200/api';

export const fetchPosts=()=> axios.get(`${url}/posts`);

export const createPost=(newPost)=> axios.post(`${url}/createposts`, newPost);


export const likePost = (id) => axios.patch(`${url}/updatelikes/${id}`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/updateposts/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/deleteposts/${id}`);
