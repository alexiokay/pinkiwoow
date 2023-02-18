export default defineNuxtRouteMiddleware((to) => {
  console.log(to);

  const _to = to.path.toString().split("/").slice(-1).pop();
  return `/products/${_to}/1`;
});
