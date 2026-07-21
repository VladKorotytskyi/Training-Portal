import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      title: "Основи стайлінгу",
      description: "Колористика, підбір аксесуарів та базові тренди.",
      progress: 0,
      lessons: [
        { id: 101, title: "Колористика", isCompleted: false },
        { id: 102, title: "Робота з аксесуарами", isCompleted: false },
        { id: 103, title: "Форми та силуети", isCompleted: false }
      ]
    },
    {
      id: 2,
      title: "Просунутий React",
      description: "Глибоке занурення в хуки, контекст та стейт-менеджери.",
      progress: 0,
      lessons: [
        { id: 201, title: "Custom Hooks", isCompleted: false },
        { id: 202, title: "Redux Architecture", isCompleted: false }
      ]
    }
  ]
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    toggleLessonCompletion: (state, action) => {
      const { courseId, lessonId } = action.payload;
      const course = state.items.find(c => c.id === Number(courseId));
      
      if (course) {
        const lesson = course.lessons.find(l => l.id === lessonId);
        if (lesson) {
          lesson.isCompleted = !lesson.isCompleted;
          
          const completedCount = course.lessons.filter(l => l.isCompleted).length;
          course.progress = Math.round((completedCount / course.lessons.length) * 100);
        }
      }
    }
  }
});

export const { toggleLessonCompletion } = coursesSlice.actions;
export const coursesReducer = coursesSlice.reducer;