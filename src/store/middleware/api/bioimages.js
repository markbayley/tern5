import axios from "axios";
import { CANCEL } from "redux-saga";
// import { getConfig } from '../config';
import { CONFIG } from "../../../config";

let client;

// axios client factory ...
// useful in case we want to setup custom interceptors for e.g. regular token refresh etc...
function getClient() {
  if (!client) {
    client = axios.create({
      baseURL: CONFIG.API_BASE_URL,
      validateStatus: (status) => {
        return status === 200 || status === 403;
      },
    });
  }
  return client;
}

// helper method to invoke ajax call via axios, and set up a cancel token to cancel pending requests if needed.
function callAPI(options) {
  // returns a cancelable promise
  const cancel = axios.CancelToken.source();
  const opts = {
    ...options,
    cancelToken: cancel.token,
  };
  const promise = getClient().request(opts);
  promise[CANCEL] = cancel.cancel;
  return promise;
}

export function fetchFavourites() {
  // Where we're fetching data from
  return callAPI({
    url: "favourites",
  });
}

// fetch(CONFIG.API_BASE_URL + "favourites")
//       // We get the API response and receive data in JSON format...
//       .then((response) => response.json())
//       // ...then we update the users state
//       .then((data) =>
//         this.setState({
//           favourites: data,
//           isLoading: false,
//         })
//       )
//       // Catch any errors we hit and update the app
//       .catch((error) => this.setState({ error, isLoading: false }));
//   }

export function fetchSearch(params) {
  // Where we're fetching data from
  // const { selectedFilter } = params;
  console.log("in API fetchSearch(). selectedFilter=", params);
  return callAPI({
    url: "search",
    params: params,
  });
}

//     fetch(search_url)
//       // We get the API response and receive data in JSON format...
//       .then((response) => response.json())
//       // ...then we update the users state
//       .then((data) =>
//         this.setState({
//           search: data,
//           hits: data["hits"],
//           filters: data["aggregations"],
//           isLoadingSearch: false,
//           aggregation: data["aggregation"],
//         })
//       )
//       // Catch any errors we hit and update the app
//       .catch((error) => this.setState({ error, isLoading: false }));
//   }
