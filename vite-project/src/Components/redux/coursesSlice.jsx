import { createSlice } from "@reduxjs/toolkit";
import { fetchItems } from "./operations.jsx";

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    toggleLessonCompletion: (state, action) => {
      const { courseId, lessonId } = action.payload;
      const course = state.items.find((c) => c.id === Number(courseId));

      if (course) {
        const lesson = course.lessons.find((l) => l.id === lessonId);
        if (lesson) {
          lesson.isCompleted = !lesson.isCompleted;

          const completedCount = course.lessons.filter(
            (l) => l.isCompleted
          ).length;
          course.progress = Math.round(
            (completedCount / course.lessons.length) * 100
          );
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const coursesReducer = coursesSlice.reducer;
export const { toggleLessonCompletion } = coursesSlice.actions;