import request from "../request";

const ENDPOINT = "api/book";

export const searchBook = (searchText) => {
  const url = `${ENDPOINT}/search?keyword=${searchText}`;
  return request.get(url).then((res) => {
    return res;
  });
};

export const getAllBooks = () => {
  const url = `${ENDPOINT}/all`;
  return request.get(url).then((res) => {
    return res;
  });
};
