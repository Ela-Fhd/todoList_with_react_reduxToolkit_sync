import { IoSunny } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/theme/themeSlice";

function Header() {
  const { darkMode } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between px-5 ">
      <h2 className="text-center my-10 text-3xl font-bold">Todo List</h2>
      <button>
        {darkMode === "dark" ? (
          <IoSunny
            className={`text-3xl cursor-pointer  ${
              darkMode === "dark" ? "text-white" : ""
            }`}
            onClick={() => dispatch(toggleTheme({ theme: "light" }))}
          />
        ) : (
          <FaRegMoon
            className="text-3xl cursor-pointer"
            onClick={() => dispatch(toggleTheme({ theme: "dark" }))}
          />
        )}
      </button>
    </div>
  );
}

export default Header;
