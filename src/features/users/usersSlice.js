import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import usersService from "./usersService";

const initialState = {
  users: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  userDetails:{},
  isFollowing:false,
  isUnFollowing:false,
  isUpdated:false,
  message:"",

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
  //  //  *** Follow a User  ****
export const followUser = createAsyncThunk("users/followUser", async (userId,thunkAPI) => {
  try {
    return await usersService.followUser(userId);
  }catch (error) { 
    const message = error.response.data.message;
    return thunkAPI.rejectWithValue(message);
  }
});

 //   *** Follow a User  ****
 export const unFollowUser = createAsyncThunk("users/unFollowUser", async (userId,thunkAPI) => {
  try {
    return await usersService.unFollowUser(userId);
  }catch (error) { 
    const message = error.response.data.message;
    return thunkAPI.rejectWithValue(message);
  }
});
//  *** Update User *** 

export const updateUser = createAsyncThunk("users/updateUser", async (userBody,thunkAPI)=> {
  try{

    return await usersService.updateUser(userBody);
  } catch (error){
    const message = error.response.data.message;
    return thunkAPI.rejectWithValue(message)
  }
})
  

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
      state.isEdit = false;
      state.isError= false;
      state.isFollowing =false;
      state.isUnFollowing = false;
      state.isUpdated= false;
    }  
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
    })
    //  *** Follow a User ****
    .addCase(followUser.fulfilled, (state, action) => {
      const users = state.users.map((user) => {
        if (user._id === action.payload.userFollowed._id) {
          user = action.payload.userFollowed;
        }

        if (user._id === action.payload.userLogged._id) {
          user = action.payload.userLogged;
        }
        return user;
      });
      state.message = action.payload.message;
      state.users = users;
      state.userDetails = action.payload.userFollowed
      state.isFollowing = true;
    })
    .addCase(followUser.rejected, (state, action) => {
      state.message = action.payload
      state.isError = true;
    })
    //  *** unFollow a User ****
    .addCase(unFollowUser.fulfilled, (state, action) => {
      console.log(action.payload)
      const users = state.users.map((user) => {
        if (user._id === action.payload.userUnfollowed._id) {
          user = action.payload.userUnfollowed;
        }
        if (user._id === action.payload.userLogged._id) {
          user = action.payload.userLogged;
        }
        return user;
      });
      state.message = action.payload.message;
      state.users = users;
      state.userDetails = action.payload.userUnfollowed
      state.isUnFollowing = true;
      state.isSuccess = true;
    })
    .addCase(unFollowUser.rejected, (state, action) => {
      state.message = action.payload
      state.isError = true;
    })

    .addCase(updateUser.fulfilled, (state, action) => {
      const users = state.users.map((user) => {

        if (user._id === action.payload.user._id) {
          user = action.payload.user;
        }
        return user;
      });
      state.message = action.payload.message;
      state.users = users;
      state.isEdit = true;
      state.isSuccess = true;
    })
    .addCase(updateUser.rejected, (state, action) => {
      state.isError = true;
      state.message = action.payload;
    })
   },
  })
  

export const { reset } = usersSlice.actions;
export default usersSlice.reducer;
