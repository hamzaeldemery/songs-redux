import React from "react";
import { connect } from "react-redux";

const renderList = (songs) => {
    return songs.map((song, idx) => {
        return (
            <div className=" item" key={idx}>
                <div className=" content">{song.name}</div>
                <div className=" right floated content">
                    <button className="ui button primary">View Song</button>
                </div>
            </div>
        );
    });
};

const SongListComponent = ({ songs }) => {
    console.log(songs);
    return <div className="ui divided list">{renderList(songs)}</div>;
};

const mapStateToProps = (state) => {
    console.log(state);
    return { songs: state.songs };
};

export const SongList = connect(mapStateToProps)(SongListComponent);
export default SongList;
