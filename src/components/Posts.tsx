import React, {useContext, useEffect} from 'react';
import Actions from "../Actions";
import AppContext from "../AppContext";
import './Posts.css';

const Posts = () => {
    const {items, setItems, deleteItem} = useContext(AppContext);
    useEffect(()=>{
        Actions.getPosts(setItems);
    }, [])


    //TODo: Add Post Component
    return (
        <div className="post-container">
            {items.map((item: any, index: any) => { return( <div className="post" key={index+1}>Post ID: {item.userId}
                <br /><br /> Post Title: {item.title} <br /><br /> Content: {item.body} <button>DELETE</button></div>)})}
        </div>
    );
};

export default Posts;