import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Aufgabe 1 - Button</h1>
      <button
        id="event-button"
        onClick={(e) => console.log(e.target.id)}
        onMouseEnter={() => console.log("Maus ist hier")}
        onMouseLeave={() => console.log("Maus ist weg")}
      >
        Klick mich
      </button>

      <h1>Aufgabe 2 - Checkbox</h1>
      <input
        type="checkbox"
        onChange={(e) => console.log(e.target.checked)}>
      </input>

    <h1>Aufgabe 3 - Textfeld</h1>
    <input
      type="text"
      onKeyDown={(e) => console.log(e.key)}>
    </input>

    </div>
  );
}
