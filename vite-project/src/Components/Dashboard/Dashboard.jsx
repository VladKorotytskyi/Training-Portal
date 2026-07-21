import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCompletedCoursesCount, selectInProgressCoursesCount, selectCourses } from "../../Components/redux/selectors";

export const Dashboard = () => {
  const completedCount = useSelector(selectCompletedCoursesCount);
  const inProgressCount = useSelector(selectInProgressCoursesCount);
  const courses = useSelector(selectCourses);

  const lastActiveCourse = courses[0];

  return (
    <div>
      <h2>Дашборд статистики</h2>
      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "6px", flex: 1 }}>
          <h3>Завершено курсів</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>{completedCount}</p>
        </div>
        <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "6px", flex: 1 }}>
          <h3>Курсів у процесі</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>{inProgressCount}</p>
        </div>
      </div>

      {lastActiveCourse && (
        <div style={{ border: "1px solid #4CAF50", padding: "20px", borderRadius: "8px" }}>
          <h3>Продовжити навчання</h3>
          <h4>{lastActiveCourse.title}</h4>
          <div style={{ background: "#eee", borderRadius: "4px", height: "10px", width: "10px", minWidth: "100%", overflow: "hidden", marginBottom: "10px" }}>
            <div style={{ background: "#4CAF50", height: "100%", width: `${lastActiveCourse.progress}%`, transition: "width 0.3s" }}></div>
          </div>
          <p>Прогрес: {lastActiveCourse.progress}%</p>
          <Link to={`/lesson/${lastActiveCourse.id}`} style={{ display: "inline-block", padding: "8px 16px", background: "#4CAF50", color: "#fff", textDecoration: "none", borderRadius: "4px" }}>
            Перейти до уроків
          </Link>
        </div>
      )}
    </div>
  );
};