import { useUserStore } from "@/stores/User";
export default defineNuxtRouteMiddleware((to) => {
  const userStore = useUserStore();
  if (userStore.getIsLogged) {
    return "/";
  }
});
