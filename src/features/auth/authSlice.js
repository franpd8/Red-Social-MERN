import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: user ? user : null,
  userData: {},
  isError: false,
  isSuccess: false,
  message: "",
  isSuccessLogOut:false
};

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      // change this value in order to display different messages
      const message =
        error.response.data.message || error.response.data.messages;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    console.log(error);
    const message = error.response.data.message;
    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (thunkAPI) => {
  try {
    console.log(authService.logout());
    return await authService.logout();
  } catch (error) {
    console.error(error);
  }
});

export const getUserInfo = createAsyncThunk("auth/getUserInfo", async (thunkAPI) => {
  try {
    return await authService.getUserInfo();
  } catch (error) {
    console.error(error);
  }
});



export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
      state.isSuccessLogOut= false;
    },
  },
  extraReducers: (builder) => {
    builder

      // **** Login ****
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      })
      // **** Logout ****
      .addCase(logout.fulfilled, (state, action) => {
        state.user = null;
        state.isSuccessLogOut = true;
        state.message = action.payload;
      })
      // **** Register **** 
      .addCase(register.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(register.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      })

      //*** Get User Info *** 
      .addCase(getUserInfo.fulfilled, (state,action) =>{
        state.userData = action.payload;
      })
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
