import AppFooter from "../app-footer/app-footer";
import AppNavbar from "../app-navbar/app-navbar";
import ErrorBoundaries from "../error-boundaries/error-boundaries";

const App = () => {
  return (
    <div className="container mx-auto px-2">

      <header>
        <ErrorBoundaries>
          <AppNavbar />
        </ErrorBoundaries>
      </header>

      <main>

      </main>

      <footer>
        <ErrorBoundaries>
          <AppFooter />
        </ErrorBoundaries>
      </footer>

    </div>
  );
}

export default App;