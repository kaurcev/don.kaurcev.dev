import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Ваша поддержка принята!";
  }, []);

  return (
    <main>
      <h1>Ура, твой донат прошел!</h1>
      <p>Теперь глупи и наивни котёнок постарается больше не ошибаться!</p>
       <button onClick={()=>navigate("/")}>Вернуться на главную</button>
    </main>
  );
}

export default Success;
