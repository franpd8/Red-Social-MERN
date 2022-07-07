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
export const like = createAsyncThunk("posts/like", async (_id) => {
  try {
    return await postsService.like(_id);
  } catch (error) {
    console.error(error);
  }
});
// *** DisLike a Post ****
export const dislike = createAsyncThunk("posts/dislike", async (_id) => {
  try {
    return await postsService.dislike(_id);
  } catch (error) {
    console.error(error);
  }
});
//  *** Delete a Post
export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
  try {
    return await postsService.deletePost(id);
  } catch (error) {
    console.error(error);
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
      .addCase(like.fulfilled, (state, action) => {
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
      .addCase(dislike.fulfilled, (state, action) => {
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
         // revisar aqui 
         state.posts = state.posts.filter(
          (post) => post._id !== action.payload.post._id
        );
      })

  },
});

export const { reset } = postsSlice.actions;
export default postsSlice.reducer;
