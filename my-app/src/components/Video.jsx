import React from "react";
import PropTypes from "prop-types";
import YouTube from "react-youtube";

const Video = ({ product }) => {
  const { video } = product;

  // Extracts the youtube video ID
  const getVideoId = (videoLink) => {
    if (videoLink) {
      const videoId = videoLink.split("v=")[1];
      return videoId;
    }
  };

  return (
    <div className="flex flex-col w-full border border-[#E5E7EB] rounded-lg px-4 py-6 gap-8">
      <h1 className="font-bold">Video</h1>
      <div className="flex flex-col video-container mx-auto">
        <YouTube videoId={getVideoId(video)} />
      </div>
    </div>
  );
};

Video.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Video;
