import { Logo } from "../../shared/ui/logo";
import { Search } from "../../shared/ui/search";
import { LogIn } from "../../entities/components/logIn";
import { Categories } from "../../entities/components/categories";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-top">
        <Logo />
        <Search />
        <LogIn />
      </div>

      <Categories />
    </div>
  );
};