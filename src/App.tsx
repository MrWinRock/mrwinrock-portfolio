import "./App.css";
import Header from "./components/header/Header";
import ScrollToTop from "./components/hooks/ScrollToTop";
import AppRoutes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <Header />
          <AppRoutes />
        </div>
      </ScrollToTop>
    </Router>
  );
};

export default App;
