export const selectSong = (songName) => {
    return {
        type: "SELECT_SONG",
        payload: songName,
    };
};
