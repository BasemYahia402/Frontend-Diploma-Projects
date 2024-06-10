import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useSearchContext } from "../../Context/SearchContext";

const Layout = () => {
  const { handleSearchItem } = useSearchContext();
  return (
    <>
      <Navbar
        onHandleSearch={(Value) => {
          handleSearchItem(Value);
        }}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
