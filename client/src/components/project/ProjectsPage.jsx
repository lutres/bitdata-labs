import ProjectComponent from "./ProjectComponent";
import { TransactionContext } from "../../context/TransactionContext";
import { useContext } from "react";

const ProjectsPage = () => {
  const { currentAccount } = useContext(TransactionContext);
  return (
    <section className=" flex flex-col items-center w-full" id="project">
      <div className="flex flex-col justify-center items-center gradient-bg-services pt-[125px] w-full">
        {currentAccount ? (
          <div className="flex flex-col items-center">
            <h1 className="text-4xl mf:text-5xl text-center text-white text-gradient mb-10 font-bold w-9/12">
              Welcome to Blockchain
            </h1>
            <ProjectComponent />
          </div>
        ) : (
          <div className="flex flex-col md:p-12 mf:py-12 py-10 w-11/12 mf:w-10/12 mb-10 blue-glassmorphism text-white text-center leading-10">
            <h1 className="text-4xl mf:text-5xl text-white py-1 font-bold px-5">
              Please connect your MetaMask account <br/> <br/> to continue to the project
            </h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;
