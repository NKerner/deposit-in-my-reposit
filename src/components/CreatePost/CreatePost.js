import React, { Component } from 'react';
import styles from './CreatePost.module.css';

class CreatePost extends Component {

    state = {
        blogTitle: '',
        blogPost: '',
    }

    submitBlogPost() {
        alert('clicked');
    
    }

    blogChangeHandler(){
    }

    render() {


        return(
            <>
            <input id='blogTitle' 
                    placeholder='enter blog title'
                    className={styles.blogTitle}
                    onChange={() => this.blogChangeHandler()} 
                    value={this.state.blogTitle}
                    ></input>
            <input id='blogPost'
                   placeholder='enter blog post'
                   className={styles.blogPost}
                   onChange={() => this.blogChangeHandler()}
                   value={this.state.blogPost}
                   ></input>
            <button id='submit' 
                    onClick={() => this.submitBlogPost()}
                    className={styles.submit}>Submit</button>
            </>
        );
    }

}

export default CreatePost;