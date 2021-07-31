import React from "react";
import { connect } from "react-redux";

const SelectedSongComponent = (props) => {
    const { selectedSong } = props;
    return selectedSong ? (
        <div>
            <div>
                <h1>Song Details:</h1>
                <div>
                    <h4>Name:</h4>
                    <h2> {selectedSong?.name}</h2>
                </div>
                <div>
                    <h4>Duration:</h4>
                    <h2> {selectedSong?.duration}</h2>
                </div>
            </div>
        </div>
    ) : (
        <div>Select a song</div>
    );
};

const mapStateToProps = (state) => {
    return { selectedSong: state.selectedSong };
};

export const SelectedSong = connect(mapStateToProps)(SelectedSongComponent);
export default SelectedSong;
