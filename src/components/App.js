import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Route path="/" exact component={HomePage} />
      <Route path="/courses" component={CoursesPage} />
      <Route path="/about" component={AboutPage} />
    </div>
  );
}

export default App;
