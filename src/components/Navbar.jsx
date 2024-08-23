import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} alt="logo" />
    </div>
  );
};

export default Navbar;