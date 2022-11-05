function DessertsList({ data }) {
  const lowerCal = data.filter((item) => item.calories < 500).sort((a, b) => a.calories - b.calories);
  const listItems = lowerCal.map((item) => {
    const text = `${item.name} - ${item.calories}`;
    return <li>{text}</li>;
  });
  return (
    <div>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default DessertsList;
