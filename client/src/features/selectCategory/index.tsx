import { SelectCategoryPropsType } from "./types"
import { Label } from "../../shared/ui/label"

export const SelectCategory: React.FC<SelectCategoryPropsType> = ({ category }) => {
    return <Label title={category.title} />
}