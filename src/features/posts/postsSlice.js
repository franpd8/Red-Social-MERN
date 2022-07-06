import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "./postsService";

const initialState = {
  posts: [],
  post:{},
  isLoading: false,
  isSuccess: false,
  isError: false,
  
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
export const getPostByName = createAsyncThunk("posts/getPostByName", async (postName) => {
    try {
      return await postsService.getPostByName(postName);
    } catch (error) {
      console.error(error);
    }
  });

   //  *** Create a New Post ****
export const createPost = createAsyncThunk("posts/createPost", async (postData,thunkAPI) => {
  try {
    return await postsService.createPost(postData);
  } catch (error) {
    console.error(error);
    const message = error.response.data.message || error.response.data[1]
    return thunkAPI.rejectWithValue(message);
   
  }
});
  
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

  

  
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.message = ""

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
    .addCase(createPost.rejected, (state,action) => {
      state.isError = true;
      state.message = action.payload;
    })
    .addCase(createPost.fulfilled, (state,action) => {
      state.isSuccess = true;
      state.message = action.payload.message;
      state.posts = [ ...state.posts,action.payload.post]
    })
    .addCase(like.fulfilled, (state, action) => {
      const posts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) {
          post = action.payload.post;
          console.log("post es esto:",post)
        }
        return post
    })
    state.message = action.payload.message;
    state.posts= posts;
  
  })

  .addCase(dislike.fulfilled, (state, action) => {
    const posts = state.posts.map((post) => {
      if (post._id === action.payload.post._id) {
        post = action.payload.post;
        console.log("post es esto:",post)
      }
      return post
  })
  console.log("payload",action.payload)
  state.message = action.payload.message;
  state.posts= posts;

});
    },
  })
  

export const { reset } = postsSlice.actions;
export default postsSlice.reducer;
