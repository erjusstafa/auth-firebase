import React, { ReactElement, useState } from "react";

interface ISearch {
  search: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Search({ handleSearch, search }: ISearch): ReactElement {
  return (
    <input
      type="text"
      value={search}
      placeholder="Search..."
      onChange={handleSearch}
      className="srch"
    />
  );
}

export default Search;
