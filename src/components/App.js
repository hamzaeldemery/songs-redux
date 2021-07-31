import React from "react";
import SongList from "./SongList";
import SelectedSong from "./SelectedSong";

const App = () => {
    return (
        <div class="ui placeholder segment">
            <div class="ui two column very relaxed stackable grid">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SelectedSong />
                </div>
            </div>
            <div class="ui vertical divider">Song</div>
        </div>
    );
};

export default App;
