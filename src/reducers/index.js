import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        {
            title: "Satellite / Stealing Time",
            duration: "5:04",
            artist: "Above and Beyond",
        },
        { title: "All of Me", duration: "4:29", artist: "John Legend" },
        { title: "When We Were Young", duration: "4:50", artist: "Adele" },
        { title: "Piece By Piece", duration: "4:17", artist: "Kelly Clarkson" },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});
