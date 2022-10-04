const TodoBtnFilterAsc = () => {
    return (
        <button
            title="Sort by ascending"
            type="submit"
            className="mr-2.5 border-2 transition border-purple-400 text-purple-400 rounded-md py-1 px-2.5 hover:bg-purple-400 hover:text-slate-800 focus:ring focus:ring-purple-400 focus:outline-none flex-none"
        >
            <i className="fa-solid fa-arrow-up"></i>
        </button>
    );
}

export default TodoBtnFilterAsc;
