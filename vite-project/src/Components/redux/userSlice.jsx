import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "User",
  xp: 0,
  level: 1,
  badges: [
    {
      id: "b1",
      title: "Перші кроки",
      reqXp: 0,
      unlocked: true,
    },
    {
      id: "b2",
      title: "Старанний учень",
      reqXp: 30,
      unlocked: false,
    },
    {
      id: "b3",
      title: "Магістр Слайдінгу",
      reqXp: 60,
      unlocked: false,
    },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addXpPoints: (state, action) => {
      state.xp += action.payload;

      state.level = Math.floor(state.xp / 50);

      state.badges = state.badges.map((badge) => ({
        ...badge,
        unlocked: state.xp >= badge.reqXp,
      }));
    },
  },
});

export const { addXpPoints } = userSlice.actions;
export const userReducer = userSlice.reducer;
