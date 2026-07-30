export const selectCourses = (state) => state.courses?.items || [];

export const selectCompletedCoursesCount = (state) => (state.courses?.items || []).filter(c => c.progress === 100).length;

export const selectInProgressCoursesCount = (state) => (state.courses?.items || []).filter(c => c.progress > 0 && c.progress < 100).length;

export const selectUser = (state) => state.user || {};