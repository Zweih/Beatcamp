import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./app";
import * as TrackApiUtil from "../util/track_api_util";

const Root = ({ store }) => {
	window.createTrack = TrackApiUtil.createTrack;
	window.fetchTrack = TrackApiUtil.fetchTrack;
	window.fetchTracks = TrackApiUtil.fetchTracks;
  
  return (
    <Provider store={store}>
      <HashRouter>
        <App store={store}/>
      </HashRouter>
    </Provider>
  );
};

export default Root;