interface CategoryProps {
  params: {
    category: string;
  };
}

export default function Store(props: CategoryProps) {
  return <h1>Categoría {props.params.category}</h1>;
}
