import * as actionTypes from './actionTypes';

// Action Creators
export function setFeature(text) {
  return {
    type: actionTypes.DUMMIE_ACTION,
    payload: text,
  };
}

export function setFeatureTwo(text) {
  return {
    type: actionTypes.DUMMIE_ACTION_TWO,
    payload: text,
  };
}

// Async Action
