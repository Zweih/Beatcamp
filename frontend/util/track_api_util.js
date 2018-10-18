export const createTrack = (track) => {
  return $.ajax({
    method: "POST",
    url: "/api/tracks",
    data: {
      track,
    },
  });
};

export const fetchTracks = () => {
  return $.ajax({
    method: "GET",
    url: "api/tracks",
  });
};

export const fetchTrack = (trackId) => {
  return $.ajax({
    method: "GET",
    url: `api/tracks/${trackId}`,
  });
};