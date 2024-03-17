export const isTitleEmpty = (songTitle: string): boolean => {
  return songTitle.length === 0;
};

export const doesTitleExist = (
  songTitle: string,
  songTitles: string[]
): boolean => {
  return songTitles.includes(songTitle);
};

export const isTitleShort = (songTitle: string): boolean => {
  return songTitle.length < 3;
};

export const isPlaylistFull = (songTitles: string[]): boolean => {
  return songTitles.length >= 5;
};

export const addSong = (songTitle: string, songTitles: string[]): void => {
  songTitles.push(songTitle);
};

export const sortSongs = (songTitles: string[]): void => {
  songTitles.sort();
};

export const getSongsCount = (songTitles: string[]): number => {
  return songTitles.length;
};

export const removeSongByPosition = (
  songTitles: string[],
  position: number
): void => {
  songTitles.splice(position, 1);
};

export const getErrorMessage = (errorCode: string): string => {
  let errorMessage: string;
  switch (errorCode) {
    case "required":
      errorMessage = "No has introducido ningún título";
      break;
    case "exists":
      errorMessage = "La canción ya existe";
      break;
    case "too-short":
      errorMessage = "El título es demasiado corto";
      break;
    case "limit":
      errorMessage = "La playlist está llena";
      break;
    default:
      errorMessage = "Codigo de error Desconocido :S";
  }
  return errorMessage;
};
