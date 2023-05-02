// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();
app.use(express.json());

// Your code here
const deletedMsg = {
    "message": "Successfully deleted"
  };

// Get all the artists
app.get("/artists", (req, res) => {
  res.send(getAllArtists());
});

// Add a new artist
app.post("/artists", (req, res) => {
  res.statusCode = 201;
  res.send(addArtist(req.body));
});

// Get the latest artist added
app.get("/artists/latest", (req, res) => {
  res.send(getLatestArtist())
});

// Get all albums of the latest artist
app.get("/artists/latest/albums", (req, res) => {
  res.send(getAlbumsForLatestArtist());
});

// Get a specific artist's details based on artistId
app.get("/artists/:artistId", (req, res) => {
  const artistId = req.params.artistId;
  res.send(getArtistByArtistId(artistId));
});

// Edit a specified artist by artistId
app.put("/artists/:artistId", (req, res) => {
  const artistId = req.params.artistId;
  res.send(editArtistByArtistId(artistId, req.body));
});

// Edit a specified artist by artistId
app.patch("/artists/:artistId", (req, res) => {
  const artistId = req.params.artistId;
  res.send(editArtistByArtistId(artistId, req.body));
});

// Delete a specified artist by artistId
app.delete("/artists/:artistId", (req, res) => {
  const artistId = req.params.artistId;

  deleteArtistByArtistId(artistId);

  res.send(deletedMsg);
});

// Get all albums of a specific artist based on artistId
app.get("/artists/:artistId/albums", (req, res) => {
  const artistId = req.params.artistId;

  res.send(getAlbumsByArtistId(artistId));
});

// Get a specific album's details based on albumId
app.get("/albums/:albumId", (req, res) => {
  const albumId = req.params.albumId;

  res.send(getAlbumByAlbumId(albumId));
});

// Add an album to a specific artist based on artistId
app.post("/artists/:artistId/albums", (req, res) => {
  res.statusCode = 201;
  const artistId = req.params.artistId;
  res.send(addAlbumByArtistId(artistId, req.body));
});

// Edit a specified album by albumId
app.put("/albums/:albumId", (req, res) => {
  const albumId = req.params.albumId;

  res.send(editAlbumByAlbumId(albumId, req.body));
});

// Edit a specified album by albumId
app.patch("/albums/:albumId", (req, res) => {
  const albumId = req.params.albumId;

  res.send(editAlbumByAlbumId(albumId, req.body));
});

// Delete a specified album by albumId
app.delete("/albums/:albumId", (req, res) => {
  const albumId = req.params.albumId;
  deleteAlbumByAlbumId(albumId)

  res.send(deletedMsg);
});

// Get all albums with names filtered by first letter
app.get("/albums", (req, res) => {
  const query = req.query.startsWith;

  res.send(getFilteredAlbums(query));
});

// Get a specific song's details based on songId
app.get("/songs/:songId", (req, res) => {
  const songId = req.params.songId;

  res.send(getSongBySongId(songId));
});

// Add a song to a specific album based on albumId
app.post("/albums/:albumId/songs", (req, res) => {
  res.statusCode = 201;
  const albumId = req.params.albumId;

  res.send(addSongByAlbumId(albumId, req.body));
});

// Get all songs of a specific artist based on artistId
app.get("/artists/:artistId/songs", (req, res) => {
  const artistId = req.params.artistId;

  res.send(getSongsByArtistId(artistId));
});

// Get all songs of a specific album based on albumId
app.get("/albums/:albumId/songs", (req, res) => {
  const albumId = req.params.albumId;

  res.send(getSongsByAlbumId(albumId));
});

// Edit a specified song by songId
app.put("/songs/:songId", (req, res) => {
  const songId = req.params.songId;
  const data = req.body;

  res.send(editSongBySongId(songId, data));
});

// Edit a specified song by songId
app.patch("/songs/:songId", (req, res) => {
  const songId = req.params.songId;
  const data = req.body;

  res.send(editSongBySongId(songId, data));
});

// Delete a specified song by songId
app.delete("/songs/:songId", (req, res) => {
  const songId = req.params.songId;
  deleteSongBySongId(songId);

  res.send(deletedMsg);
});


// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}
