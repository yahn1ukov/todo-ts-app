const TodoFilterSearch = () => {
    return (
        <div className="border-2 border-purple-400 rounded-md py-1 px-2.5">
            <i className="fa-solid fa-magnifying-glass mr-2.5 text-purple-400"></i>
            <input
                className="bg-slate-800 focus:outline-none placeholder:text-purple-400 placeholder:opacity-60 text-purple-400 text-sm"
                placeholder="Search"
            />
        </div>
    );
}

export default TodoFilterSearch;