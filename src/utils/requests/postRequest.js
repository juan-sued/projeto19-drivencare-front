import { axiosI } from '../../services/axios';
import { cleanSpecificsFields } from '../utils';

async function postRequest(
  object,
  setObject,
  { route, fieldsForClearCaseError, setObjectDataResponse }
) {
  axiosI
    .post(route)
    .then(({ data }) => {
      setObjectDataResponse(data);
    })
    .catch(err => {
      console.error(err);

      if (fieldsForClear) {
        setObject(cleanSpecificsFields(object, fieldsForClearCaseError));
      }
    });
}

export default postRequest;
