import React from 'react';
import { useContext } from "react";
import { filteredFriendsContext } from "../../contexts/filteredFriendsContext";
import { friendsContext } from "../../contexts/friendsContext";

export default function Search() {

  const [friends, setFriends] = useContext(friendsContext);
  const [filteredFriends, setFilteredFriends] = useContext(filteredFriendsContext);

  function searchContact(query) {
    if (query) setFilteredFriends(friends.filter((friend) => friend.userName >= query || friend.name >= query));
    else setFilteredFriends(friends);
  };

  return (
    <div className="Search">
      <input
        type="text"
        id="search"
        className="SearchInput"
        placeholder="Search for a Friend"
        onChange={(event) => searchContact(event.currentTarget.value)}
      />
    </div>
  );
}
