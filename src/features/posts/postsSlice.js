import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "./postsService";

const initialState = {
  posts: [],
  isLoading: false,
  post:{}
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
  
  

  
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
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
    //  *** Get Post by Name ****
    .addCase(getPostByName.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    },
  })
  

export const { reset } = postsSlice.actions;
export default postsSlice.reducer;