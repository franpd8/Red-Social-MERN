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

   //   **** Get User by ID **** 
export const getUserById = createAsyncThunk("users/getUserById", async (id) => {
    try {
      return await usersService.getUserById(id);
    } catch (error) {
      console.error(error);
    }
  });
//  //  *** Get User by Name ****
export const getUserByName = createAsyncThunk("users/getUserByName", async (userName) => {
    try {
      return await usersService.getUserByName(userName);
    } catch (error) {
      console.error(error);
    }
  });
  
  

  
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
    .addCase(getUserByName.fulfilled, (state, action) => {
      state.users = action.payload;
    });
   },
  })
  

export const { reset } = usersSlice.actions;
export default usersSlice.reducer;
