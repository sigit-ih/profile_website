import Date from "../utils/dateDisplay";

export default function NavTop() {
  return (
    <header className="NavTop h-auto flex text-sm bg-violet-100 mt-0">
      <div className="w-1/2 text-left text-gray-500 p-2">
        <Date />
      </div>
      {/* <div className="w-1/2 text-right text-sm text-gray-500 p-4">
        Light Dark Mode & Language Option
      </div> */}
    </header>
  );
}