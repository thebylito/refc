module.exports = {
  content: ({ sagaName }) => {
    const sagaToUpper = sagaName.charAt(0).toUpperCase() + sagaName.slice(1);
    return `import { call, put } from 'redux-saga/es/effects';
import { Creators as ${sagaToUpper}Actions } from '../ducks/${sagaName}';
import api from '../../services/api';

export default function* get${sagaToUpper}({ payload: { field1, field2 } }) {
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
`;
  },
};
