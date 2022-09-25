import AuthContext from "../../context/auth.context";
import { useAuth } from "../../hooks/auth.hook";
import { useRoutes } from "../../routes/routes";
import AppFooter from "../app-footer/app-footer";
import AppNavbar from "../app-navbar/app-navbar";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundaries from "../error-boundaries/error-boundaries";

const App = () => {
  const { token, login, logout } = useAuth();
    const isAuth = !!token;
    const routes = useRoutes(isAuth);

  return (
    <AuthContext.Provider value={{
      token, login, logout, isAuth 
    }}>
      <Router>
        <div className="container mx-auto px-2 flex flex-col h-screen">

        <header>
          <ErrorBoundaries>
            <AppNavbar />
          </ErrorBoundaries>
        </header>

        <main className="mt-5 mb-auto">
          {routes} 
        </main>

        <footer>
          <ErrorBoundaries>
            <AppFooter />
          </ErrorBoundaries>
        </footer>

        </div>
      </Router>
    </AuthContext.Provider> 
  );
}

export default App;