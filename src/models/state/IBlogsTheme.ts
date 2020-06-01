interface IBlogsTheme {
  isEditing: false;
  posts: [];
  totalPosts: 0;
  editPost: any;
  status: string;
  postPage: number;
  postsLoading: boolean;
  editLoading: boolean;
}

export default IBlogsTheme;
