export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,

  //REMOVE after finish developing
  // token:
  //   "BQAF6FvQyQWEMosQ_SlNRKwaHZLxB8uNx2df-teKsxJgyteopcDdSWSaxOgLUf22fsebtytuyDZgfgX7kYKKetGyuTgWJZz23AfdmsbMqvWAZlu4x2TuRwv3AZMTa8F4VLPdAx3s9lproAVR8g4gjyVcbNw3JQebPBwwRZg5f2YVQ4kv",
};

const reducer = (state, action) => {
  // Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
