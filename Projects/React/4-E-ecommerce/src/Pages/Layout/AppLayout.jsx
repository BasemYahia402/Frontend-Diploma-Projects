import ScrollButton from "../../Components/ScrollButton";
import { SearchProvider } from "../../Context/SearchContext";
import Layout from "./Layout";

const AppLayout = () => {

  return (
    <SearchProvider>
      <Layout />
      <ScrollButton />
    </SearchProvider>
  );
};

export default AppLayout;
