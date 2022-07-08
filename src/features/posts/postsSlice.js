import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "./postsService";

const initialState = {
  posts: [],
  post: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
  isLiked: false,
  isDisliked: false,
  isDeleted:false,
  isEdit:false,
  message:"",
};

// *** Functions ***

// **** Get All Posts *****
export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  try {
    return await postsService.getAllPosts();
  } catch (error) {
    console.error(error);
  }
});
//   **** Get Post by ID ****
export const getPostById = createAsyncThunk("posts/getPostById", async (id) => {
  try {
    return await postsService.getPostById(id);
  } catch (error) {
    console.error(error);
  }
});
//  *** Get Post by Name ****
export const getPostByName = createAsyncThunk(  "posts/getPostByName",  async (postName) => {
    try {
      return await postsService.getPostByName(postName);
    } catch (error) {
      console.error(error);
    }
  }
);
//  *** Create a New Post ****
export const createPost = createAsyncThunk(  "posts/createPost",  async (postData, thunkAPI) => {
    try {
      return await postsService.createPost(postData);
    } catch (error) {
      console.error(error);
      const message = error.response.data.message || error.response.data[1];
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// *** Like a Post ****
export const likePost = createAsyncThunk("posts/likePost", async (_id) => {
  try {
    return await postsService.likePost(_id);
  } catch (error) {
    console.error(error);
  }
});
// *** DisLike a Post ****
export const dislikePost = createAsyncThunk("posts/dislikePost", async (_id) => {
  try {
    return await postsService.dislikePost(_id);
  } catch (error) {
    console.error(error);
  }
});
//  *** Delete a Post
export const deletePost = createAsyncThunk("posts/deletePost", async (id,thunkAPI) => {
  try {
    return await postsService.deletePost(id);
  } catch (error) { 
    const message = error.response.data.message;
    return thunkAPI.rejectWithValue(message);
  }
});

//  *** Edit a Post
export const updatePost = createAsyncThunk("posts/update", async (post,thunkAPI) => {
  try {
    return await postsService.updatePost(post);
  } catch (error) {
    const message = error.response.data.message;
    return thunkAPI.rejectWithValue(message);
  }
});




export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
      state.isLiked = false;
      state.isDisliked = false;
      state.isDeleted = false;
      state.isEdit = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // **** Get All Posts *****
      .addCase(getAllPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      //   **** Get Post by ID ****
      .addCase(getPostById.fulfilled, (state, action) => {
        state.post = action.payload;
      })
      //   **** Get Post by Name ****
      .addCase(getPostByName.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      //  *** Create New Post ****
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.message = action.payload.message;
        state.posts = [...state.posts, action.payload.post];
      })
      //  *** Liking a Post
      .addCase(likePost.fulfilled, (state, action) => {
        const posts = state.posts.map((post) => {
          if (post._id === action.payload.post._id) {
            post = action.payload.post;
          }
          return post;
        });
        state.message = action.payload.message;
        state.posts = posts;
        state.isLiked = true;
      })
      // *** Disliking a Post
      .addCase(dislikePost.fulfilled, (state, action) => {
        const posts = state.posts.map((post) => {
          if (post._id === action.payload.post._id) {
            post = action.payload.post;
          }
          return post;
        });

        state.message = action.payload.message;
        state.posts = posts;
        state.isDisliked = true;
      })
      // *** Delete a Post 
      .addCase(deletePost.fulfilled, (state, action) => {
        state.message = action.payload.message
        state.isDeleted = true
         state.posts = state.posts.filter(
          (post) => post._id !== action.payload.post._id
        );
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      })
      // *** Edit a Post 
      .addCase(updatePost.fulfilled, (state, action) => {
        console.log("payload",action.payload)
        const posts = state.posts.map((post) => {
  
          if (post._id === action.payload.post._id) {
            post = action.payload.post;
          }
          return post;
        });
        state.message = action.payload.message;
        state.posts = posts;
        state.isEdit = true;
        state.isSuccess = true;
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      })


  },
});

export const { reset } = postsSlice.actions;
export default postsSlice.reducer;
