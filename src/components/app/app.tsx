import { todo } from "../../data/data";
import AppFooter from "../app-footer/app-footer";
import AppNavbar from "../app-navbar/app-navbar";
import ErrorBoundaries from "../error-boundaries/error-boundaries";
import TodoCreateForm from "../todo-create-form/todo-create-form";
import TodoFilterPanel from "../todo-filter-panel/todo-filter-panel";
import TodoList from "../todo-list/todo-list";

const App = () => {
  return (
    <div className="container mx-auto px-2 flex flex-col h-screen">

      <header>
        <ErrorBoundaries>
          <AppNavbar />
        </ErrorBoundaries>
      </header>

      <main className="mt-5 mb-auto">
        <ErrorBoundaries>
          <TodoCreateForm />
        </ErrorBoundaries>
        <ErrorBoundaries>
          <TodoFilterPanel />
        </ErrorBoundaries>
        <ErrorBoundaries>
          <TodoList todo={todo} />
        </ErrorBoundaries>
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