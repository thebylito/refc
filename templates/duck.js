module.exports = {
  content: ({ duckName }) => {
    const duckToUpper = duckName.charAt(0).toUpperCase() + duckName.slice(1);

    return `import Immutable from 'seamless-immutable';

export const Types = {
  GET_REQUEST: '${duckName}/GET_REQUEST',
  GET_SUCCESS: '${duckName}/GET_SUCCESS',
  GET_FAILURE: '${duckName}/GET_FAILURE',
};

const initialState = Immutable({
  data: [],
  loading: false,
  error: null,
});

export default function ${duckName}(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { data: action.payload, loading: false, error: null };
    case Types.GET_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export const Creators = {
  get${duckToUpper}Request: () => ({
    type: Types.GET_REQUEST,
  }),
  get${duckToUpper}Success: data => ({
    type: Types.GET_SUCCESS,
    payload: data,
  }),
  get${duckToUpper}Failure: error => ({
    type: Types.GET_FAILURE,
    payload: error,
  }),
};
`;
  },
};
