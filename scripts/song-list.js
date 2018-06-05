{
  album.songs.forEach((song, index)=>{
    song.element = $("<tr><td>Song</td></tr>");
    $("#song-list").append(song.element);
  });
}
