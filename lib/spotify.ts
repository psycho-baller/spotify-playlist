const getAccessToken = async () => {
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
      // @ts-ignore
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });
  return response.json();
};


export const getPlaylists = async () => {
  const { access_token } = await getAccessToken();
  const user_id = process.env.SPOTIFY_USER_ID;
  return fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
