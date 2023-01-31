import { useState, useEffect } from "react";
import { Navbar, ProjectsPage, Welcome} from "./components/index";

const App = () => {
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      } 
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar isTopOfPage={isTopOfPage}/>
        <Welcome />
      </div>
        <ProjectsPage />
    </div>
  );
}

export default App;
