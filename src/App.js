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
  const [spinner, spinnerSet] = React.useState({
    rotation: 0,
    selectedIndex: 0,
    selected: null,
    selectedImages: ["luna.png", "gnorman.png", "jimmy.png"],
  });

  React.useEffect(() => {
    window.setInterval(() => {
      spinnerSet((sp) => {
        if (sp.rotation > 0) {
          const out = {
            ...sp,
          };
          out.rotation -= 1;
          out.selectedIndex = out.selectedIndex + 1;
          out.selected =
            out.selectedImages[out.selectedIndex % out.selectedImages.length];
          return out;
        }
        return sp;
      });
    }, 400);
  }, []);

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
                opacity: spinner.selectedImages.includes(img) ? 1 : 0.2,
                margin: "0.25em",
                borderRadius: "1em",
                backgroundColor: spinner.selected === img ? "lightblue" : null,
                padding: "0.75em",
              }}
              onClick={() => {
                const selectedImages = spinner.selectedImages.includes(img)
                  ? spinner.selectedImages.filter((i) => i !== img)
                  : [...spinner.selectedImages, img];
                spinnerSet({
                  ...spinner,
                  selectedImages,
                });
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
          spinnerSet({
            ...spinner,
            rotation: Math.floor(Math.random() * 20 + 5),
            selectedIndex: Math.floor(
              Math.random() * spinner.selectedImages.length
            ),
          });
        }}
      >
        Choose
      </button>
    </div>
  );
}

export default App;
