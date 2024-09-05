import { Label } from "../../../shared/ui/label";
import { categories } from "../../../../mok/categories"
import "./style.css";

export const Categories = () => {
  return (
    <div className="header-categories">
      {categories.map((category) => {
        return <Label category={category} />;
      })}
    </div>
  );
};