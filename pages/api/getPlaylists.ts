import { getPlaylists } from "../../lib/spotify";
import type { NextApiRequest, NextApiResponse } from 'next'
async function handle(req: NextApiRequest, res: NextApiResponse) {
  const response = await getPlaylists();
  console.log(response);
  const { list } = await response.json();

// @ts-ignore
  const playlists = list.slice(0, 5).map((playlist) => ({
    title: playlist.name,
    artist: playlist.artists.map((_artist: { name: any; }) => _artist.name).join(", "),
    url: playlist.external_urls.spotify,
    coverImage: playlist.album.images[1],
  }));

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );

  return res.status(200).json( playlists );
}
