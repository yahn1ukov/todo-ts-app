const AppNavbar = () => {
    return (
        <div className="py-3 flex items-center justify-between">
            <div>
                <h1 className="px-2 py-1 border-2 border-purple-400 rounded-md">
                    <span className="font-bold text-purple-400">Todo</span>
                </h1>
            </div>
            <div>
                <button
                    type="button"
                    className="border-2 border-slate-800 rounded-md py-1 px-2"
                >
                    <i className="fa-solid fa-sun text-slate-800"></i>
                </button>
                {/* <button
                    type="button"
                    className="border-2 border-white rounded-md py-1 px-2.5"
                >
                    <i className="fa-solid fa-moon text-white"></i>
                </button> */}
            </div>
        </div>
    );
}

export default AppNavbar;