import YouTube from "react-youtube";

const Video = ({ videoId }) => {
  return (
    <div className="flex flex-col w-full border border-[#E5E7EB] rounded-lg px-4 py-6 gap-8">
      <h1 className="font-bold">Video</h1>
      <div className="flex flex-col video-container mx-auto">
        <YouTube videoId={videoId} />
      </div>
    </div>
  );
};

export default Video;
