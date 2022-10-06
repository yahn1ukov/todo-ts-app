import TodoBtnFilterAsc from "../todo-btn-filter-asc/todo-btn-filter-asc";
import TodoBtnFilterDesc from "../todo-btn-filter-desc/todo-btn-filter-desc";
import TodoBtnFilterRefresh from "../todo-btn-filter-refresh/todo-btn-filter-refresh";

const TodoFilterPanel = () => {
    return (
        <div className="mb-5 flex">
            <TodoBtnFilterRefresh />
            <TodoBtnFilterAsc />
            <TodoBtnFilterDesc />
        </div>
    );
}

export default TodoFilterPanel;
