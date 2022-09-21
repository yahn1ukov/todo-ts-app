import TodoBtnFilterAsc from "../todo-btn-filter-asc/todo-btn-filter-asc";
import TodoBtnFilterDesc from "../todo-btn-filter-desc/todo-btn-filter-desc";
import TodoFilterSearch from "../todo-filter-search/todo-filter-search";

const TodoFilterPanel = () => {
    return (
        <div className="mb-5 flex items-center">
            <TodoBtnFilterAsc />
            <TodoBtnFilterDesc />
            <TodoFilterSearch />
        </div>
    );
}

export default TodoFilterPanel;