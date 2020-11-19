import React, { Component, Fragment } from 'react';

import Post from '../../../../components/Items/BlogCard/SinglePostCard'
import Button from '../../../../components/Button/Button';
import FeedEdit from '../../../../components/ModalEdit/FormEdit';
import Input from '../../../../components/Form/Input/Input';
import Paginator from '../../../../components/Paginator/Paginator';
import Loader from '../../../../components/loader/Loader';
import ErrorHandler from '../../../../components/ErrorHandler/ErrorHandler';
import openSocket from "socket.io-client";
import './ListBlogs.css';

import axios from "../../../../axios";
import image from '../../../../components/Image/Image';

class Feed extends Component<any, any> {
  state = {
    isEditing: false,
    posts: [],
    totalPosts: 0,
    editPost: null,
    status: '',
    postPage: 1,
    postsLoading: false,
    editLoading: false,
    postId: null,
    error: Error,
  };

  async componentDidMount(){
    this.loadPosts();
    const socket = openSocket.connect("http://localhost:3100");
    socket.on("posts", (data: any)=>{
      if(data.action === 'create'){
        this.addPost(data.post);
      }else if(data.action === 'update'){
        this.updatePost(data.post);
      }else if(data.action === 'delete'){
        this.loadPosts();
      }
    })
  }

  addPost = (post:any)=>{
    this.setState((prevState:any, props: any)=>{
      const updatedPosts = [...prevState.posts];
      if(prevState.postPage === 1){
        if(prevState.posts.length >= 2){
          updatedPosts.pop();
        }

        updatedPosts.unshift(post);
      }

      return {
        post: updatedPosts,
        totalPosts: prevState.totalPosts + 1
      }
    })
  }

  updatePost = (post:any)=>{
    this.setState((prevState:any, props: any)=>{
      const updatedPosts = [...prevState.posts];
      const updatedPostIndex = updatedPosts.findIndex((p:any) => p.id === post.id);

      if(updatedPostIndex>-1){
        updatedPosts[updatedPostIndex] = post;
      }

      return {
        post: updatedPosts
      }
    })
  }

  loadPosts = async (direction?: any) => {
    if (direction) {
      this.setState({ postsLoading: true, posts: [] });
    }
    let page = this.state.postPage;
    if (direction === 'next') {
      page++;
      this.setState({ postPage: page });
    }
    if (direction === 'previous') {
      page--;
      this.setState({ postPage: page });
    }
    const response = await axios.get(`/blogs?page=${page}`, {
      // query: {
      //   page: page
      // },
      // headers: {
      //   Authorization: 'Bearer ' + this.props.token
      // },
      
    });

    if(response.status !== 200) {
      throw new Error('Failed to fetch posts.'); 
    }

    this.setState({
      posts: response.data.blogs.map((post: any) => {
        return {
          ...post,
          imagePath: post.imageUrl
        };
      }),
      totalPosts: response.data.totalItems,
      postsLoading: false
    });

    console.log(this.state);
  };

  newPostHandler = () => {
    console.log(this.state);
    this.setState({ isEditing: true });
  };

  startEditPostHandler = (postId: any) => {
    this.setState((prevState:any) => {
      const loadedPost = { ...prevState.posts.find((p:any) => p.id === postId) };

      return {
        isEditing: true,
        postId: postId,
        editPost: loadedPost
      };
    });
  };

  cancelEditHandler = () => {
    this.setState({ isEditing: false, editPost: null, postId: null });
  };

  finishEditHandler = (postData:any) => {
    this.setState({
      editLoading: true
    });
    const formData = new FormData();
    formData.append('title', postData.title);
    formData.append('content', postData.content);
    formData.append('image', postData.image);
    // formData.append('userId', localStorage.getItem('userId') != null ?localStorage.getItem('userId')!:"")
    console.log(formData);
    let url = 'http://localhost:3100/blogs';
    let method = 'POST';
    if (this.state.editPost) {
      let obj = this.state.editPost as unknown as {id: number | string};
      url = 'http://localhost:3100/blogs/' + obj.id;
      method = 'PUT';
    }

    fetch(url, {
      method: method,
      body: formData,
      headers: {
        Authorization: 'Bearer ' + this.props.token
      },
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Creating or editing a post failed!');
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        const post = {
          id: resData.post.id,
          title: resData.post.title,
          content: resData.post.content,
          creator: resData.post.creator,
          image: resData.post.image,
          createdAt: resData.post.createdAt
        };
        this.setState((prevState:any) => {
          let updatedPosts = [...prevState.posts];
          if (prevState.editPost) {
            const postIndex = prevState.posts.findIndex(
              (p:any) => p._id === prevState.editPost._id
            );
            updatedPosts[postIndex] = post;
          } else if (prevState.posts.length < 2) {
            updatedPosts = prevState.posts.concat(post);
          }
          return {
            posts: updatedPosts,
            isEditing: false,
            editPost: null,
            editLoading: false
          };
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          isEditing: false,
          editPost: null,
          editLoading: false,
          error: err
        });
      });
  };

  statusInputChangeHandler = (input:any, value:any) => {
    this.setState({ status: value });
  };

  deletePostHandler = (postId:any) => {
    this.setState({ postsLoading: true });
    fetch('http://localhost:3100/blogs/' + postId, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + this.props.token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Deleting a post failed!');
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        this.loadPosts();
        // this.setState((prevState:any) => {
        //   const updatedPosts = prevState.posts.filter((p:any) => p._id !== postId);
        //   return { posts: updatedPosts, postsLoading: false };
        // });
      })
      .catch(err => {
        console.log(err);
        this.setState({ postsLoading: false });
      });
  };

  errorHandler = () => {
    this.setState({ error: null });
  };

  catchError = (error:any) => {
    this.setState({ error: error });
  };

  render() {
    console.log(this.state.isEditing)
    console.log(this.state.editLoading)

    let createButton = null;
    // if (this.props.isAuth) {
      createButton = (
        <Button mode="raised" design="accent" onClick={this.newPostHandler}>
        New Post
      </Button> 
      );
    // }

    return (
      <Fragment>
        {/* <ErrorHandler error={this.state.error} onHandle={this.errorHandler} /> */}
        <FeedEdit
          editing={this.state.isEditing}
          selectedPost={this.state.editPost}
          loading={this.state.editLoading}
          onCancelEdit={this.cancelEditHandler}
          onFinishEdit={this.finishEditHandler}
        />
        <section className="feed__control my-3">
          {createButton}
        </section>
        <section className="feed">
          {this.state.postsLoading && (
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Loader />
            </div>
          )}
          {this.state.posts.length <= 0 && !this.state.postsLoading ? (
            <p style={{ textAlign: 'center' }}>No posts found.</p>
          ) : null}
          {!this.state.postsLoading && (
    <Paginator
      onPrevious={this.loadPosts.bind(this, 'previous')}
      onNext={this.loadPosts.bind(this, 'next')}
      lastPage={Math.ceil(this.state.totalPosts / 2)}
      currentPage={this.state.postPage}
    >
      {this.state.posts.map((post:any) => (
        <Post
          key={post.id}
          id={post.id}
          creator={post.creator}
          userId={this.props.userId}
          // author={post.creator.name}
          date={new Date(post.createdAt).toLocaleDateString('en-US')}
          title={post.title}
          image={post.image}
          content={post.content}
          onStartEdit={this.startEditPostHandler.bind(this, post.id)}
          onDelete={this.deletePostHandler.bind(this, post.id)}
        />
      ))}
    </Paginator>
          )}
        </section>
      </Fragment>
    );
  }
}

export default Feed;