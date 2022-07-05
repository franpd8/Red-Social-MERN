import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import usersService from "./usersService";

const initialState = {
  users: [],
  isLoading: false,
  userDetails:{}
};

// *** Functions *** 

   // **** Get All Users *****
export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
  try {
    return await usersService.getAllUsers();
  } catch (error) {
    console.error(error);
  }
});

   //   **** Get Post by ID **** 
export const getUserById = createAsyncThunk("posts/getUserById", async (id) => {
    try {
      return await usersService.getUserById(id);
    } catch (error) {
      console.error(error);
    }
  });
//  //  *** Get Post by Name ****
// export const getPostByName = createAsyncThunk("posts/getPostByName", async (postName) => {
//     try {
     

//       return await usersService.getPostByName(postName);

//     } catch (error) {
//       console.error(error);
//     }
//   });
  
  

  
export const usersSlice = createSlice({
  name: "userss",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder

      // **** Get All Users *****
      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
    //   **** Get User by ID **** 
    .addCase(getUserById.fulfilled, (state, action) => {
        state.userDetails = action.payload;
      })
    //  *** Get Post by Name ****
    // .addCase(getPostByName.fulfilled, (state, action) => {
    //   state.posts = action.payload;
    // });
   },
  })
  

export const { reset } = usersSlice.actions;
export default usersSlice.reducer;
