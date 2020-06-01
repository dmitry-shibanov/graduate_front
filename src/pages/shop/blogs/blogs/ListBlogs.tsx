import React, { Component, Fragment } from 'react';

import Post from '../../../../components/Items/BlogCard/SinglePostCard'
import Button from '../../../../components/Button/Button';
import FeedEdit from '../../../../components/ModalEdit/FormEdit';
import Input from '../../../../components/Form/Input/Input';
import Paginator from '../../../../components/Paginator/Paginator';
import Loader from '../../../../components/loader/Loader';
import ErrorHandler from '../../../../components/ErrorHandler/ErrorHandler';
import './ListBlogs.css';

class Feed extends Component<any> {
  state = {
    isEditing: false,
    posts: [],
    totalPosts: 0,
    editPost: null,
    status: '',
    postPage: 1,
    postsLoading: false,
    editLoading: false,
    error: Error,
  };

//   loadPosts = direction => {
//     if (direction) {
//       this.setState({ postsLoading: true, posts: [] });
//     }
//     let page = this.state.postPage;
//     if (direction === 'next') {
//       page++;
//       this.setState({ postPage: page });
//     }
//     if (direction === 'previous') {
//       page--;
//       this.setState({ postPage: page });
//     }
//     fetch('http://localhost:8080/feed/posts?page=' + page, {
//       headers: {
//         Authorization: 'Bearer ' + this.props.token
//       }
//     })
//       .then(res => {
//         if (res.status !== 200) {
//           throw new Error('Failed to fetch posts.');
//         }
//         return res.json();
//       })
//       .then(resData => {
//         this.setState({
//           posts: resData.posts.map(post => {
//             return {
//               ...post,
//               imagePath: post.imageUrl
//             };
//           }),
//           totalPosts: resData.totalItems,
//           postsLoading: false
//         });
//       })
//       .catch(this.catchError);
//   };

  statusUpdateHandler = (event: any) => {
    event.preventDefault();
    fetch('URL')
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Can't update status!");
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
      })
      .catch(this.catchError);
  };

  newPostHandler = () => {
    this.setState({ isEditing: true });
  };

  startEditPostHandler = (postId: any) => {
    this.setState((prevState:any) => {
      const loadedPost = { ...prevState.posts.find((p:any) => p._id === postId) };

      return {
        isEditing: true,
        editPost: loadedPost
      };
    });
  };

  cancelEditHandler = () => {
    this.setState({ isEditing: false, editPost: null });
  };

  finishEditHandler = (postData:any) => {
    this.setState({
      editLoading: true
    });
    const formData = new FormData();
    formData.append('title', postData.title);
    formData.append('content', postData.content);
    formData.append('image', postData.image);
    let url = 'http://localhost:8080/feed/post';
    let method = 'POST';
    if (this.state.editPost) {
      url = 'http://localhost:8080/feed/post/' //+ this.state.editPost._id;
      method = 'PUT';
    }

    fetch(url, {
      method: method,
      body: formData,
      headers: {
        Authorization: 'Bearer ' + this.props.token
      }
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
          _id: resData.post._id,
          title: resData.post.title,
          content: resData.post.content,
          creator: resData.post.creator,
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
    fetch('http://localhost:8080/feed/post/' + postId, {
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
        this.setState((prevState:any) => {
          const updatedPosts = prevState.posts.filter((p:any) => p._id !== postId);
          return { posts: updatedPosts, postsLoading: false };
        });
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
        <section className="feed__status">
          <form onSubmit={this.statusUpdateHandler}>
            <Input
              type="text"
              placeholder="Your status"
              control="input"
              onChange={this.statusInputChangeHandler}
              value={this.state.status}
            />
            <Button mode="flat" type="submit">
              Update
            </Button>
          </form>
        </section>
        <section className="feed__control">
          <Button mode="raised" design="accent" onClick={this.newPostHandler}>
            New Post
          </Button>
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
    //   onPrevious={this.loadPosts.bind(this, 'previous')}
    //   onNext={this.loadPosts.bind(this, 'next')}
      lastPage={Math.ceil(this.state.totalPosts / 2)}
      currentPage={this.state.postPage}
    >
      {this.state.posts.map((post:any) => (
        <Post
          key={post._id}
          id={post._id}
          author={post.creator.name}
          date={new Date(post.createdAt).toLocaleDateString('en-US')}
          title={post.title}
          image={post.imageUrl}
          content={post.content}
          onStartEdit={this.startEditPostHandler.bind(this, post._id)}
          onDelete={this.deletePostHandler.bind(this, post._id)}
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


{
                  
    // <Paginator
    //   onPrevious={this.loadPosts.bind(this, 'previous')}
    //   onNext={this.loadPosts.bind(this, 'next')}
    //   lastPage={Math.ceil(this.state.totalPosts / 2)}
    //   currentPage={this.state.postPage}
    // >
    //   {this.state.posts.map((post:any) => (
    //     <Post
    //       key={post._id}
    //       id={post._id}
    //       author={post.creator.name}
    //       date={new Date(post.createdAt).toLocaleDateString('en-US')}
    //       title={post.title}
    //       image={post.imageUrl}
    //       content={post.content}
    //       onStartEdit={this.startEditPostHandler.bind(this, post._id)}
    //       onDelete={this.deletePostHandler.bind(this, post._id)}
    //     />
    //   ))}
    // </Paginator>
      }