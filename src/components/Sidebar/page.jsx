import Category from "./components/Category";
import Colors from "./components/Colors";
import Price from "./components/Price";

function Sidebar({ handleChange, open, toggleSidebar }) {
  return (
    <>
      {open && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}

      <section
        className={`fixed top-0 left-0 h-full w-[250px] bg-slate-200 shadow-lg z-50 transition-transform duration-300 ease-in-out border-r-2 border-b-slate-800 ${
          open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <div className="p-4">
          <h1 className="mb-6 text-2xl font-semibold text-center">
            🛒 Sidebar
          </h1>
          <Category handleChange={handleChange} />
          <Price handleChange={handleChange} />
          <Colors handleChange={handleChange} />
        </div>
      </section>
    </>
  );
}

export default Sidebar;
