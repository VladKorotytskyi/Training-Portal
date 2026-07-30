import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
  baseURL: "https://6a624c4a1bffb2ffab8b2d3a.mockapi.io",
});

export const fetchItems = createAsyncThunk(
  "items/fetchItems",
  async (_, thunkAPI) => {
    try {
      const response = await api.get("/items");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchBadges = createAsyncThunk(
  "badges/fetchBadges",
  async (_, thunkAPI) => {
    try {
      const response = await api.get("/badges");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);