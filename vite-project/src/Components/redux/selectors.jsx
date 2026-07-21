import { createSelector } from "@reduxjs/toolkit";

export const selectCourses = (state) => state.courses.items;
export const selectUser = (state) => state.user;

export const selectCompletedCoursesCount = createSelector(
  [selectCourses],
  (courses) => courses.filter(course => course.progress === 100).length
);

export const selectInProgressCoursesCount = createSelector(
  [selectCourses],
  (courses) => courses.filter(course => course.progress > 0 && course.progress < 100).length
);