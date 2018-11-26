module.exports = {
  content: ({ sagaName }) => {
    const sagaToUpper = sagaName.charAt(0).toUpperCase() + sagaName.slice(1);
    return `import { call, put, all, takeLatest } from 'redux-saga/es/effects';
import { Creators as ${sagaToUpper}Actions, Types as ${sagaToUpper}Types } from '../ducks/${sagaName}';
import api from '../../services/api';

function* get${sagaToUpper}({ payload: { field1, field2 } }) {
  try {
    const response = yield call(api.post, '/myApi', {
      field1,
      field2
    });
    yield put(${sagaToUpper}Actions.get${sagaToUpper}Success(response.data));
  } catch (err) {
    yield put(${sagaToUpper}Actions.get${sagaToUpper}Failure('Erro ao buscar dados da API'));
  }
}

export default function* ${sagaToUpper}Sagas() {
  yield all([takeLatest(BooksTypes.GET_REQUEST, get${sagaToUpper})]);
}
`;
  },
};
