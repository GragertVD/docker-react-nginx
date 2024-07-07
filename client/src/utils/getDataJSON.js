import { reduserData_actionType } from "../Context/reduserData";

const getData = (dispatchData) => {
  fetch('data.json'
    , {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      // setData(myJson);
      // localStorage.setItem('dataBoards', JSON.stringify(myJson));
      dispatchData({ type: reduserData_actionType.getData, payload: myJson });
    });
}

export default getData;