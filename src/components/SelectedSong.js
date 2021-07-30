import React from "react";
import { connect } from "react-redux";

const SelectedSongComponent = (props) => {
    const { selectedSong } = props;
    return <div>{selectedSong?.name ?? null}</div>;
};

const mapStateToProps = (state) => {
    return { selectedSong: state.selectedSong };
};

export const SelectedSong = connect(mapStateToProps)(SelectedSongComponent);
export default SelectedSong;
