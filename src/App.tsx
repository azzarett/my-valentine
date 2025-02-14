import { useState } from "react";

const NO_PHRASES = [
  "Нет 💔",
  "Ну пожалуйста? 🥺",
  "Мы бы так мило смотрелись вместе! 💕",
  "Еще один шанс, булочка?",
  "Не разбивай мне сердце :(",
  "А как насчет «может быть»?",
  "Пожалуйста, не делай этого со мной, я ранимый(ая)",
];

export function App() {
  const [noClicks, setNoClicks] = useState(0);
  const [isValentine, setIsValentine] = useState(false);
  const yesButtonSize = noClicks * 20 + 16;

  const firstImg =
    "https://media.tenor.com/VIChDQ6ejRQAAAAj/jumping-bear-hearts-no-png.gif";
  const secondImg = "public/1.gif";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      {!isValentine ? (
        <>
          <img src={firstImg} />
          <h1>Ты будешь моей валентинкой? 💘</h1>
          <div>
            <button
              onClick={() => setIsValentine(true)}
              style={{
                fontSize: `${yesButtonSize}px`,
                margin: "10px",
                padding: "10px 20px",
                backgroundColor: "green",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Даааа
            </button>
            <button
              onClick={() => setNoClicks((prev) => prev + 1)}
              style={{
                fontSize: "16px",
                margin: "10px",
                padding: "10px 20px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {noClicks === 0
                ? "Нет"
                : NO_PHRASES[Math.min(noClicks - 1, NO_PHRASES.length - 1)]}
            </button>
          </div>
        </>
      ) : (
        <>
          <img src={secondImg} style={{width: "350px"}}/>
          <div style={{ fontSize: "48px", color: "pink", fontWeight: "bold" }}>
            Ураааааааааааааааааа!!! 💖🎉
          </div>
        </>
      )}
    </div>
  );
}

export default App;
