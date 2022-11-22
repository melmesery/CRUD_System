import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { records: [], loading: false, error: null };

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, thunkAPI) => {
    const { rejctWithValue } = thunkAPI;
    try {
      const res = await fetch("https://my-json-server.typicode.com/melmesery/CRUD_JSON/posts");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejctWithValue(error.messege);
    }
  }
);

export const deletePosts = createAsyncThunk(
  "posts/deletePosts",
  async (id, thunkAPI) => {
    const { rejctWithValue } = thunkAPI;
    try {
      await fetch(`https://my-json-server.typicode.com/melmesery/CRUD_JSON/posts/${id}`, {
        method: "DELETE",
      });
      return id;
    } catch (error) {
      return rejctWithValue(error.messege);
    }
  }
);

export const insertPosts = createAsyncThunk(
  "posts/insertPosts",
  async (item, thunkAPI) => {
    const { rejctWithValue, getState } = thunkAPI;
    const auth = getState();
    item.userId = auth.id;
    try {
      const res = await fetch("https://my-json-server.typicode.com/melmesery/CRUD_JSON/posts/posts", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejctWithValue(error.messege);
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //fetch posts
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.records = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //create posts
      .addCase(insertPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(insertPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.records.push(action.payload);
      })
      .addCase(insertPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //delete posts
      .addCase(deletePosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePosts.fulfilled, (state, action) => {
        state.loading = false;
        state.records = state.records.filter((el) => el.id !== action.payload);
      })
      .addCase(deletePosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default postSlice.reducer;
