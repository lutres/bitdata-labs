import { Navbar, Welcome, Proyect } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Proyect />
    </div>
  );
}

export default App;
