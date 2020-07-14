import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

const App = () => {
    return (
        <div className="ui container" style={{ marginTop: "30px" }}>
            <div className="ui grid">
                <div className="ui row">
                    <div className="ten wide column">
                        <SongList />
                    </div>
                    <div className="six wide column">
                        <SongDetail />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
