function DataList({ data }) {
  const renderValue = (value) => {
    if (Array.isArray(value)) {
      return (
        <ul>
          {value.map((item, index) => (
            <li key={index}>{renderValue(item)}</li>
          ))}
        </ul>
      );
    } else if (typeof value === "object") {
      return (
        <ul>
          {Object.entries(value).map(([key, nestedValue], index) => (
            <li key={index}>
              <strong>{key}:</strong> {renderValue(nestedValue)}
            </li>
          ))}
        </ul>
      );
    } else {
      return JSON.stringify(value);
    }
  };

  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>
          <ul>
            {Object.entries(item).map(([key, value], subIndex) => (
              <li key={subIndex}>
                <strong>{key}:</strong> {renderValue(value)}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default DataList;
