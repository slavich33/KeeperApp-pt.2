import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((det) => (
        <Note key={det.key} title={det.title} content={det.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
