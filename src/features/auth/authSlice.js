import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  message: "",
};

export const register = createAsyncThunk("auth/register", async (user,thunkAPI) => {
  try {
    return await authService.register(user);
  } catch (error) {
    console.log(error);
    const message = error.response.data
      return thunkAPI.rejectWithValue(message);

  }
});
export const login = createAsyncThunk("auth/login", async (user) => {
  try {
    return await authService.login(user);
  } catch (error) {
    console.error(error);
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    return await authService.logout();
  } catch (error) {
    console.error(error);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
    })
    // borrar de estado
    .addCase(logout.fulfilled, (state) => {
      state.user = null
})
.addCase(register.fulfilled, (state, action) => {
  state.isSuccess = true;
  state.message = action.payload.message;
})
.addCase(register.rejected, (state, action) => {
  state.isError = true;
  state.message = action.payload;
})



  },
});

export default authSlice.reducer;
