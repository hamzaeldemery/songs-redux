import { combineReducers } from "redux";

export const selectedSongReducer = (selectedSong = null, action) => {
    if (action !== undefined && action.type === "SELECT_SONG")
        return action.payload;
    return selectedSong;
};

export const songReducer = () => {
    return [
        { name: "lalala", duration: "2:30" },
        { name: "Mirror", duration: "3:40" },
        { name: "Diamonds", duration: "4:10" },
    ];
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer,
});
