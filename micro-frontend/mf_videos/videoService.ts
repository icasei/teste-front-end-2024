export interface Video {
  videoId: string;
  title: string;
  thumbnail: string;
}

const API_KEY = "AIzaSyBdaSOOL3HWcDJBhj59ukJjFSpqiH0-UIg";

export const searchVideos = async (query: string): Promise<Video[]> => {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${API_KEY}`
  );
  const data = await response.json();
  return data.items.map((item: any) => ({
    videoId: item.id.videoId,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.default.url,
  }));
};

export const getVideoById = async (videoId: string): Promise<Video> => {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`
  );
  const data = await response.json();
  const item = data.items[0];
  return {
    videoId: item.id,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.default.url,
  };
};
