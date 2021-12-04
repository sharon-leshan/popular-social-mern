import React from "react";
import Story from "./Story";
import styled from "styled-components";

const Stories = () => {
  return (
    <StoriesWrapper>
      <Story
        image="https://i.postimg.cc/qBFpFzFd/restaurant2.png"
        profileSrc=""
        title="Maleo"
      />
      <Story
        image="https://i.postimg.cc/dtTJcJMZ/restaurant.png"
        profileSrc="https://i.postimg.cc/Z56Cq6zv/Whats-App-Image-2021-11-09-at-5-47-15-PM.jpg"
        title="Sharon"
      />
      <Story
        image="https://i.postimg.cc/65WXZRZG/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg"
        profileSrc="https://i.postimg.cc/g0vR1f25/Whats-App-Image-2021-11-09-at-5-43-16-PM.jpg"
        title="Maleo"
      />
    </StoriesWrapper>
  );
};
const StoriesWrapper = styled.div`
  display: flex;
`;
export default Stories;
