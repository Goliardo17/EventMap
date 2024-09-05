type CatgoryType = {
    id: number,
    title: string,
}

type Props = {
    category: CatgoryType,
}

export const Label = ({ category }: Props) => <p>{category.title}</p>;