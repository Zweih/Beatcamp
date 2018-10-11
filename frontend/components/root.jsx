import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./app";
import * as AlbumApiUtil from "../util/album_api_util";

const Root = ({ store }) => {
  window.fetchHomeAlbums = AlbumApiUtil.fetchHomeAlbums;
  
  return (
    <Provider store={store}>
      <HashRouter>
        <App store={store}/>
      </HashRouter>
    </Provider>
  );
};

export default Root;