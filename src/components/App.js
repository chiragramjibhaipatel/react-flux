import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";

function App() {
  function getPage() {
    const pathName = window.location.pathname;
    if (pathName === "/about") {
      return <AboutPage />;
    }
    if (pathName === "/courses") {
      return <CoursesPage />;
    }
    return <HomePage />;
  }

  return (
    <div>
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
