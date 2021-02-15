import "./styles.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Note from "../components/note";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Note />
      <Footer />
    </div>
  );
}
