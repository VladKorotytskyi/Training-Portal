import { createSlice } from "@reduxjs/toolkit";
import { fetchBadges } from "./operations.jsx";

const userSlice = createSlice({
  name: "user",
  initialState: {
    items: [],
    xp: 0,
    level: 1,
    badges: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addXpPoints: (state, action) => {
      state.xp += action.payload;
      state.level = Math.floor(state.xp / 50);
      state.badges = state.badges.map((badge) => ({
        ...badge,
        unlocked: state.xp >= badge.reqXp,
      }));
    },
    updateName: (state, action) => {
      state.name = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBadges.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBadges.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchBadges.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addXpPoints, updateName } = userSlice.actions;
export const userReducer = userSlice.reducer;