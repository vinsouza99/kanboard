import Board from "./components/Board";
import Header from "./components/Header";
import TechStackSection from "./components/TechStackSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main id="main" className="text-gray-800 min-h-lvh pt-24 px-2">
        <Board />
      </main>
      <TechStackSection />
      <Footer />
    </>
  );
}

export default App;
