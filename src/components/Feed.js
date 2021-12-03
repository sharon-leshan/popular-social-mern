import React, { useEffect, useState } from "react";
import Stories from "./Stories";
import styled from "styled-components";
import Messenger from "./Messenger";
import Post from "./Post";
import axios from "../axios";

const Feed = () => {
  const [postsData, setPostsData] = useState([]);
  const syncFeed = () => {
    axios.get("/posts").then((res) => {
      console.log(res.data);
      setPostsData(res.data);
    });
  };
  useEffect(() => {
    syncFeed();
  }, []);
  return (
    <FeedWrapper>
      <Stories />
      <Messenger />
      {postsData.map((entry) => (
        <Post
          profilePic={entry.avatar}
          message={entry.text}
          timestamp={entry.timestamp}
          imgName={entry.imgName}
          username={entry.user}
        />
      ))}
    </FeedWrapper>
  );
};

const FeedWrapper = styled.div`
  flex: 1;
  padding: 30px 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default Feed;
