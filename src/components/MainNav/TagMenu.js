import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchTags } from "../../_actions/_postActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import React, { useState, useEffect } from "react";

export const TagMenu = () => {
  const dispatch = useDispatch();
  // dispatch(fetchTags());
  const taxonomy = useSelector((state) => state.taxonomy);
  console.log("terms", taxonomy);

  return (
    <NavDropdown
      onClick={() => dispatch(fetchTags())}
      title="Tags"
      id="basic-nav-dropdown"
    >
      <NavDropdown.Item as={Link} to="posts">
        All Posts
      </NavDropdown.Item>
      {taxonomy.terms
        .filter((e) => e != null)
        .map((term, key) => (
          <NavDropdown.Item
            key={key}
            as={Link}
            to={`/posts/tags/${term.entityLabel}`}
          >
            {term.entityLabel}
          </NavDropdown.Item>
        ))}
    </NavDropdown>
  );
};
