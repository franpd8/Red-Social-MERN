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

    console.log("soy el postdata",postData)
    return await postsService.createPost(postData);
  } catch (error) {
    console.error(error);
    const message = error.response.data.message || error.response.data[1]
    return thunkAPI.rejectWithValue(message);
   
  }
});
  
  

  
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccessAddPost = false;
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
      state.message = action.payload;
    })
    },
  })
  

export const { reset } = postsSlice.actions;
export default postsSlice.reducer;
