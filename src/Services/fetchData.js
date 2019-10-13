import { PRIMARY_SERVER } from "../Constants/ServerUrl";

const fetchData = route => {
  const requestUrl = PRIMARY_SERVER + route;

  return new Promise((resolve, reject) => {
    fetch(requestUrl)
      .then(response => response.json())
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const updateBooks = (route, method, body) => {
  const requestUrl = PRIMARY_SERVER + route;

  const headers = new Headers({
    "Content-Type": "application/json"
  });

  const requestConfig = {
    mode: "cors",
    method,
    headers,
    body: JSON.stringify(body)
  };

  return new Promise((resolve, reject) => {
    fetch(requestUrl, requestConfig)
      .then(response => response.json())
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default fetchData;
