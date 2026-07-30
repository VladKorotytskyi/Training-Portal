import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCourses } from "../redux/selectors.jsx";
import { toggleLessonCompletion } from "../redux/coursesSlice.jsx";
import { addXpPoints } from "../redux/userSlice.jsx";

export const CourseCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const courses = useSelector(selectCourses);
  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return <h3>Курс не знайдено</h3>;
  }

  const handleCheckboxChange = (lessonId, currentStatus) => {
    dispatch(toggleLessonCompletion({ courseId: id, lessonId }));

    const xpChange = currentStatus ? -15 : 15;
    dispatch(addXpPoints(xpChange));
  };

  return (
    <div
      style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px" }}
    >
      <button
        onClick={() => navigate("/lesson-list")}
        style={{ marginBottom: "15px" }}
      >
        ← Назад до списку
      </button>
      <h2>{course.title}</h2>
      <p>{course.description}</p>

      <h3>Список уроків:</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        {course.lessons.map((lesson) => (
          <label
            key={lesson.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px",
              border: "1px solid #eee",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              checked={lesson.isCompleted}
              onChange={() =>
                handleCheckboxChange(lesson.id, lesson.isCompleted)
              }
            />
            <span
              style={{
                textDecoration: lesson.isCompleted ? "line-through" : "none",
                color: lesson.isCompleted ? "#aaa" : "#000",
              }}
            >
              {lesson.title}
            </span>
          </label>
        ))}
      </div>

      <div
        style={{
          background: "#eee",
          borderRadius: "4px",
          height: "15px",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            background: "#ddff00",
            height: "100%",
            width: `${course.progress}%`,
            transition: "width 0.3s",
          }}
        ></div>
      </div>
      <p>
        Загальний прогрес курсу: <strong>{course.progress}%</strong>
      </p>
    </div>
  );
};
