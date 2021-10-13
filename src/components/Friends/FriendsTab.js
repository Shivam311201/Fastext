import React from 'react';
import Header from "./Header";
import List from "./List";
import Search from "./Search";

export default function FriendsTab() {
  return (
    <div className="FriendsTab">
      <Header />
      <Search />
      <List />
    </div>
  );
}
