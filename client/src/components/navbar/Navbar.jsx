import logo from "../../../images/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import Button from "../../global/Button";

const Navbar = ({ isTopOfPage }) => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);
  const navbarBG = isTopOfPage
    ? ""
    : "blue-glassmorphism border-0 rounded-none";
  return (
    <nav className={`fixed w-full flex justify-center ${navbarBG} z-30`}>
      <div className="w-full md:w-4/5 flex justify-between items-center p-4">
        <div className="md:flex-[0.5] flex-initial justify-center items-center">
          <img src={logo} alt="logo" className="w-36 cursor-pointer" />
        </div>
        <div className="text-white md:flex flex-row justify-between items-center flex-initial gap-10">
          <AnchorLink
            className="text-white cursor-pointer hidden md:flex"
            href="#project"
          >
            Project
          </AnchorLink>
          <Button action={connectWallet}>
            {currentAccount ? (
              `${currentAccount.substring(0, 5)}...${currentAccount.substring(
                currentAccount.length,
                currentAccount.length - 6
              )}`
            ) : (
              <p>Connect Wallet</p>
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
