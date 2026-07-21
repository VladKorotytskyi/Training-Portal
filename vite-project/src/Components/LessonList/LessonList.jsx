import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCourses } from "../../Components/redux/selectors";

export const LessonList = () => {
  const courses = useSelector(selectCourses);
  return (
    <div>
      <h2>Ваші навчальні курси</h2>
      <div style={{ display: "grid", gap: "15px" }}>
        {courses.map(course => (
          <div key={course.id} style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "6px" }}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <div style={{ background: "#eee", height: "8px", borderRadius: "4px", overflow: "hidden", marginBottom: "10px" }}>
              <div style={{ background: "#2196F3", height: "100%", width: `${course.progress}%` }}></div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>Прогрес: {course.progress}%</span>
              <Link to={`/lesson/${course.id}`} style={{ color: "#2196F3", fontWeight: "bold" }}>Відкрити курс</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};