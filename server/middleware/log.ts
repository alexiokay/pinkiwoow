import { defineEventHandler } from "h3";

export default defineEventHandler((event) => {
  console.log("New request: ");
  console.log(event.node.req.headers);
  const headers = event.node.req.headers;
  setCookie(event, "headers", JSON.stringify(headers));

  console.log("state headers:");
  console.log(getCookie(event, "headers"));
});
