function DessertsList({ data }) {
  // Implement the component here.
  return (
    <ul>
      {data.filter((item) => item.calories < 500)
        .sort((a, b) => a.calories - b.calories)
        .map((item) => (<li key={ item.createdAt }>
        { item.name } - { item.calories } cal.
      </li>))}
    </ul>);
}

export default DessertsList;
