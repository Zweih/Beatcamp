import * as TrackApiUtil from "../util/track_api_util";

export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const RECEIVE_ALL_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK_ERRORS = "RECEIVE_TRACK_ERRORS";
export const REMOVE_TRACK_ERRORS = "REMOVE_TRACK_ERRORS";

// Normal Action Creators

const receiveTrack = (track) => {
  return {
    type: RECEIVE_TRACK,
    track,
  };
};

const receiveAllTracks = (tracks) => {
  return {
    type: RECEIVE_ALL_TRACKS,
    tracks,
  };
};

const receiveTrackErrors = (errors) => {
  return {
    type: RECEIVE_TRACK_ERRORS,
    errors,
  };
};

const removeTrackErrors = () => {
  return {
    type: REMOVE_TRACK_ERRORS,
  };
};

// Thunk Action Creators

export const createTrack = (track) => {
  return (dispatch) => {
    return TrackApiUtil.createTrack(track).then( (track) => {
      return dispatch(receiveTrack(track));
    }, (errors) => {
      return dispatch(receiveTrackErrors(errors.responseJSON));
    });
  }
};

export const fetchTrack = (trackId) => {
  return (dispatch) => {
    return TrackApiUtil.fetchTrack(trackId).then( (track) => {
      return dispatch(receiveTrack(track));
    }), (errors) => {
      return dispatch(receiveTrackErrors(errors.responseJSON));
    };
  }
}

export const fetchTracks = () => {
  return (dispatch) => {
    return TrackApiUtil.fetchTracks().then( (tracks) => {
      return dispatch(receiveAllTracks(tracks));
    }), (errors) => {
      return dispatch(receiveTrackErrors(errors.responseJSON));
    }
  }
}

export const clearTrackErrors = () => {
  return (dispatch) => {
    return dispatch(removeTrackErrors());
  };
};