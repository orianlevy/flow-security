import axios from "axios";

class Actions {
    appContext?: any
    getPosts(setItems: any) {
        const getPostsURL= "http://rest.flowsec.xyz/posts";
        axios.get(getPostsURL).then((response) => {
            setItems(response.data);
        }).catch((e)=> {
            console.log(e)
        })
    }

    editPost(post: any, setItems: any) {
        const postPostsURL= "http://rest.flowsec.xyz/posts";
        axios.post(postPostsURL, post).then((response) => {
            this.getPosts(setItems);
        }).catch((e)=> {
            console.log(e)
        })
    }

    deletePost(postId: number, deleteItem: any) {
        const postPostsURL= `http://rest.flowsec.xyz/posts/${postId}`;
        axios.delete(postPostsURL).then((response) => {
            deleteItem(postId);
        }).catch((e)=> {
            console.log(e)
        })
    }

}


export default new Actions();