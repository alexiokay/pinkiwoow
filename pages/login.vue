<template lang="pug">
div#login-page(class="flex w-[1440px] h-full px-12 items-start gap-x-28 justify-center" )
        form(class="bg-white w-2/6 h-[23rem] shadow-[0px_0px_2px_1px_rgb(0,0,0,0.15)] rounded-xl px-8 pt-6 pb-8 mb-4")
            h1(class="mb-7 text-3xl  font-itim -ml-2") Login
            input#username(class="focus:outline-none focus:shadow-outline shadow appearance-none border rounded-full  w-full py-2 px-3 text-gray-700 leading-tight" type="email", v-model="email" placeholder="E-mail or login")
            p(class="text-xs text-red-700 mt-2 mb-2") Podaj login lub email
            input#password.shadow.appearance-none.border.border-red-500.rounded-full.w-full.py-2.px-3.text-gray-700.leading-tight(class="mt-3 focus:outline-none focus:shadow-outline" type="password", v-model="password" placeholder="Password")
            p(class="text-xs text-red-700 mt-2") Wpisz hasło. Pole nie może być puste
            p(class="text-xs text-red-700 mt-1") Sprawdź, czy adres e-mail i hasło są poprawne
             div(class="flex items-center justify-between mt-4")
                div(class="flex items-center space-x-2 text-black")
                    input#remember-me(type="checkbox" class="hover:cursor-pointer")
                    label(for="remember-me") Remember me
                NuxtLink(to="/forgot-password" class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 hover:cursor:pointer") Forgot Password?
            button.bg-blue-500(@click="signIn" class="hover:bg-blue-700 mt-4 text-white font-base text-sm py-[0.6rem] w-full px-4 rounded-full focus:outline-none focus:shadow-outline" type="button")
                p Sign In
        div(class='w-[29rem] h-auto')
            div(class="text-center w-[25rem] h-auto flex items-start justify-start flex-col mt-6")
                h2(class="mb-7 text-3xl  font-itim ") Dont have an account?
                NuxtLink#register(to="/register" class="w-full h-10 md:h-10 hover:bg-blue-600 smooth-color hover:text-white  rounded-full bg-white text-blue-600 border-[1px] border-blue-600 text-sm  flex items-center justify-center")
                    p Zarejestruj się

                h3(class="mb-7 text-xl text-gray-800 text-start mt-8 font-itim ") Why is it worth to have an account in pinkiwoow?
                LoginWhy
                
        ButtonBack   
                

        
    
        
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/User";
const userStore = useUserStore();

const email = ref("");
const password = ref("");
const config = useRuntimeConfig();
const router = useRouter();

const signIn = () => {
  const data = {
    username: "",
    email: `${email.value}`,
    password: `${password.value}`,
  };
  fetch(`${config.API_URL}auth/login/`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
      Host: "localhost",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          userStore.setToken(data.key);
          userStore.setUsername(data.username);
          userStore.setEmail(data.email);
          userStore.setIsLogged(true);

          router.push("/");
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<style lang="sass"></style>
