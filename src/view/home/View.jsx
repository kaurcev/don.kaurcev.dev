import React, { useState, useEffect } from "react";
import { YoomoneyPanel } from "yoomoney-widget";


const Home = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const MINIMAL_DONATION = 50;

  useEffect(() => {
    document.title = "Помощь недоразработчику";
  }, []);

  return (
    <>
      <main>
        <h1>Помощь недоразработчику</h1>
        <p>Здесь собирается финансовая поддержка для меня, <del>программиста</del> недоразработчика, чьё будущее пока неясно.</p>
        <p className="mini">Минимальная сумма помощи: {MINIMAL_DONATION}₽</p>

        <button onClick={() => setIsPanelOpen(true)}>
          Сделать взнос
        </button>

        <p className="footer mini">
          Платежи принимаются через библиотеку{" "}
          <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/yoomoney-widget">
            <i>yoomoney-widget</i>
          </a> {" "}
          от разработчика kaurcev.
        </p>

        <YoomoneyPanel
          receiver="4100110853907883"
          isOpen={isPanelOpen}
          successURL="https://don.kaurcev.dev/success"
          onClose={() => setIsPanelOpen(false)}
          panelTitle="Донат моему проекту"
          defaultSum={100}
          minSum={MINIMAL_DONATION}
          showCloseButton={true}
        />
      </main>
    </>
  );
};

export default Home;