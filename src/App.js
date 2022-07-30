import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SectionForm from "./components/SectionForm/SectionForm";
import SectionProject from "./components/SectionProject/SectionProject";

const App = () => {
  return (
    <div className="App">
      <Header />
      <SectionProject />
      <SectionForm />
      <Footer />
    </div>
  );
}

export default App;
