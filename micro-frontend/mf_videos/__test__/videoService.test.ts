import { searchVideos, getVideoById, Video } from "../videoService";

// Mock da função fetch
global.fetch = jest.fn();

const mockSearchResponse = {
  items: [
    {
      id: { videoId: "video1" },
      snippet: {
        title: "Video Title 1",
        thumbnails: { default: { url: "thumbnail1.jpg" } },
      },
    },
    {
      id: { videoId: "video2" },
      snippet: {
        title: "Video Title 2",
        thumbnails: { default: { url: "thumbnail2.jpg" } },
      },
    },
  ],
};

const mockGetVideoResponse = {
  items: [
    {
      id: "video1",
      snippet: {
        title: "Video Title 1",
        thumbnails: { default: { url: "thumbnail1.jpg" } },
      },
    },
  ],
};

describe("YouTube API", () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  test("searchVideos retorna a lista de vídeos", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockSearchResponse),
    });

    const videos: Video[] = await searchVideos("test query");

    expect(videos).toEqual([
      {
        videoId: "video1",
        title: "Video Title 1",
        thumbnail: "thumbnail1.jpg",
      },
      {
        videoId: "video2",
        title: "Video Title 2",
        thumbnail: "thumbnail2.jpg",
      },
    ]);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining("https://www.googleapis.com/youtube/v3/search")
    );
  });

  test("getVideoById retorna detalhes do vídeo", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockGetVideoResponse),
    });

    const video: Video = await getVideoById("video1");

    expect(video).toEqual({
      videoId: "video1",
      title: "Video Title 1",
      thumbnail: "thumbnail1.jpg",
    });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining("https://www.googleapis.com/youtube/v3/videos")
    );
  });
});
