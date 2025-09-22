import {
  useLocation,
  useNavigate,
} from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


export default function PaginationNav({ navItems }) {
  const location = useLocation();
  const navigate = useNavigate();

  const currentIndex = navItems.findIndex(
    (item) => item.path === location.pathname
  );

  const goTo = (index) => {
    if (index >= 0 && index < navItems.length) {
      navigate(navItems[index].path);
    }
  };

  return (
    <div className="content-pagination absolute hidden lg:flex bottom-1 right-5 items-center justify-center space-x-4 opacity-70">
      <button
        onClick={() => goTo(currentIndex - 1)}
        disabled={currentIndex === 0}
        aria-label="Previous page"
        className="text-3xl p-2 hover:text-[#001f33] hover:dark:text-gray-300 disabled:opacity-40"
      >
        <FiChevronLeft />
      </button>
      <span className="font-semibold w-32 text-lg dark:text-white">
        {navItems[currentIndex]?.label}
      </span>
      <button
        onClick={() => goTo(currentIndex + 1)}
        disabled={currentIndex === navItems.length - 1}
        aria-label="Next page"
        className="text-3xl p-2 hover:text-[#001f33] hover:dark:text-gray-300 disabled:opacity-40"
      >
        <FiChevronRight />
      </button>
    </div>
  );
}