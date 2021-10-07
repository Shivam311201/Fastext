import React from 'react';
import Header from "./Header";
import List from "./List";
import Search from "./Search";

export default function Friends() {
  return (
    <div className="Friends">
      <Header />
      <Search />
      <List />
    </div>
  );
}
