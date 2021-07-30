export const selectedSong = (songName) => {
    return {
        type: "SELECT_SONG",
        payload: songName,
    };
};
