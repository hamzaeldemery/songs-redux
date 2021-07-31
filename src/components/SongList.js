import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongListComponent = ({ songs, selectSong }) => {
    const renderList = (songs) => {
        return songs.map((song, idx) => {
            return (
                <div className=" item" key={idx}>
                    <div className=" content">{song.name}</div>
                    <div className=" right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => {
                                selectSong(song);
                            }}
                        >
                            View Song
                        </button>
                    </div>
                </div>
            );
        });
    };

    return <div className="ui divided list">{renderList(songs)}</div>;
};

const mapStateToProps = (state) => {
    return { songs: state.songs };
};

export const SongList = connect(mapStateToProps, { selectSong })(
    SongListComponent
);
export default SongList;
