// from react router dom
// what is the reason of this?
// what is loader in react router dom

import apiReq from "./apiReq";

export const singlePageLoader = async ({ request, params }) => {
  const res = await apiReq("/posts/" + params.id);
  return res.data;
};

export const listPageLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  const res = await apiReq("/posts?" + query);
  return res.date;
};
