import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Страница не найдена";
  }, []);

  return (
    <>
      <main>
        <h1>404</h1>
        <p>Страница не найдена</p>
        <p className="mini">Данная страница была перемещена или не существовала вовсе</p>
        <div className="buttons-container">
          <button onClick={() => navigate(-1)}>Вернуться назад</button>
          <br/>
          <button onClick={() => navigate("/")}>Вернуться на главную</button>
        </div>
      </main>
    </>
  );
};

export default NotFound;