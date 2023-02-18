import { useUserStore } from "~~/stores/User";

export const addToFavourites = (id: number) => {
  const userStore = useUserStore();
  const config = useRuntimeConfig();
  const router = useRouter();
  // adds or removes product from favourites and set userStore.favourites again
  if (userStore.getToken === null) {
    router.push("/login");
  } else {
    fetch(`${config.API_URL}api/v1/favourites/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + userStore.getToken,
      },
      body: JSON.stringify({
        product_id: id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        userStore.setFavourites(data.favourites);
      });
  }
};
