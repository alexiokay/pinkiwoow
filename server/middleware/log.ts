import { defineEventHandler } from "h3";

export default defineEventHandler((event) => {
  console.log("New request: ");
  console.log(event.node.req.headers);
});
