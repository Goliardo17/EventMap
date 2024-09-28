import { SelectPage } from "../../features/selectPage"
import { pages } from "./consts/pages"
import { categories } from "./consts/categories"
import "./style.css"
import { SelectCategory } from "../../features/selectCategory";
import { CategoryType } from "../../entities/category/types";

export const Header: React.FC = () => {
  return (
    <header className="container header">
      <div className="row header-navigation">
        <div className="row pages">
          {
            pages.length ?
              pages.map((title: string) => (
                <SelectPage key={`page-${title}`} title={title} />
              ))
              : <>Loading...</>
          }
        </div>
        <div className="header-search">
          <input />
        </div>
        <div className="header-user">
          <img alt="Аватар пользователя" />
        </div>
      </div>

      <div className="row header-categories">
        {
          categories.length ? 
          categories.map((category: CategoryType) => (
            <SelectCategory key={`category-${category.id}`} category={category}/>
          ))
          : <>Loading...</>
        }
      </div>
    </header>
  );
};