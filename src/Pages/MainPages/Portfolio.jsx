import { useContext, useEffect } from "react";
import { ThemeContext } from "../../App";
import { Outlet } from "react-router-dom";

function Portfolio() {
  const { setHeaderShow } = useContext(ThemeContext);

  useEffect(() => {
    setHeaderShow(true);
  }, []);

  return (
    <div className="w-full flex flex-col items-center pt-20 text-[#E6E6E6]">
      <Outlet />
    </div>
  );
}

export default Portfolio;
