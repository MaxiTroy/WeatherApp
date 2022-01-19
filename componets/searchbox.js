import React from "react";

const searchbox = () => {
  const [query, setQuery] = React.useState("");
  const onChange = (e) => {};

  return (
    <div>
      <input type="text" placeholder="buscar" />
    </div>
  );
};

export default searchbox;
