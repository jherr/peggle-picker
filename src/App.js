import React from "react";
import "./App.css";

const images = [
  "bjorn.png",
  "mountain.png",
  "berg.png",
  "gnorman.png",
  "luna.png",
  "windy.png",
  "jimmy.png",
];

function App() {
  const [selected, selectedSet] = React.useState([
    "luna.png",
    "gnorman.png",
    "jimmy.png",
  ]);
  const [chosen, chosenSet] = React.useState(null);
  return (
    <div
      style={{
        margin: "1em",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          width: "100%",
        }}
      >
        {images.map((img) => (
          <div
            style={{
              textAlign: "center",
            }}
            key={img}
          >
            <img
              src={img}
              style={{
                opacity: selected.includes(img) ? 1 : 0.2,
                margin: "0.25em",
                borderRadius: "0.25em",
                backgroundColor: chosen === img ? "lightblue" : null,
                padding: "0.25em",
              }}
              onClick={() => {
                if (selected.includes(img)) {
                  selectedSet(selected.filter((i) => i !== img));
                } else {
                  selectedSet([...selected, img]);
                }
              }}
            />
          </div>
        ))}
      </div>
      <button
        style={{
          width: "100%",
          fontSize: "xx-large",
          padding: "0.5em",
          borderRadius: "0.5em",
          border: 0,
          backgroundColor: "coral",
          marginTop: "0.5em",
        }}
        onClick={() => {
          chosenSet(selected[Math.floor(Math.random() * selected.length)]);
        }}
      >
        Choose
      </button>
    </div>
  );
}

export default App;
