import ProjectComponent from "./ProjectComponent";
import { TransactionContext } from "../../context/TransactionContext";
import { useContext } from "react";

const ProjectsPage = () => {
    const { currentAccount } = useContext(TransactionContext);
  return (
    <section className=" flex flex-col items-center w-full" id="project">
      <div className="flex flex-col justify-center items-center gradient-bg-services pt-[125px]">
      {currentAccount ? (
        <h1 className="text-4xl mf:text-5xl text-center text-white text-gradient mb-10 font-bold w-9/12">
          Welcome to Blockchain
        </h1>
      ) : (
        <h1 className="text-4xl mf:text-5xl text-white py-1 font-bold px-5">
          Please connect your MetaMask accoount to continue to the project
        </h1>
      )}
        <ProjectComponent />
      </div>
    </section>
  );
};

export default ProjectsPage;
