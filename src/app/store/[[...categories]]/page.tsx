interface CategoryProps {
  params: {
    categories: string[];
  };
}

export default function Store(props: CategoryProps) {
  console.log(props.params);

  return <h1>Categoría {props.params.categories[0]}</h1>;
}
