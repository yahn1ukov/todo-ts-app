const TodoBtnDelete = () => {
    return (
        <button
            title="Delete"
            type="submit"
            className="border-2 transition border-red-600 rounded-md py-1 px-[9px] text-red-600 hover:bg-red-600 hover:text-slate-800 focus:ring focus:ring-red-600 focus:outline-none"
        >
            <i className="fa-solid fa-trash"></i>
        </button>
    );
}

export default TodoBtnDelete;
