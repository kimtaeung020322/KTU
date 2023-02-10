import { createAsyncThunk, createSlic } from "@reduxjs/toolkit";
import { getCurrentUser } from "../api/auth";

const fetchUser = createAsyncThunk("user/fetchUser", getCurrentUser);

const userSlice = createSlic({
  name: "user",
  initialState: {
    isLoding: true,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isError = false;
      state.isLoding = false;
    });
  },
});

export default userSlice;
