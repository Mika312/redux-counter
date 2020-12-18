import Screen from "./screen";
import Button from "./button";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Screen />
      <Button />
    </div>
  );
}

export default App;
