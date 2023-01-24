<template lang="pug">
div#login-page(class="flex w-[95rem] h-full px-12 items-start gap-x-24 justify-center" )
        form(class="bg-white w-2/6 h-[23rem] shadow-[0px_0px_2px_1px_rgb(0,0,0,0.15)] rounded-xl px-8 pt-6 pb-8 mb-4")
            h1(class="mb-7 text-3xl  font-itim -ml-2") Login
            input#username(class="focus:outline-none focus:shadow-outline shadow appearance-none border rounded-full  w-full py-2 px-3 text-gray-700 leading-tight" type="text", placeholder="E-mail or login")
            p(class="text-xs text-red-700 mt-2 mb-2") Podaj login lub email
            input#password.shadow.appearance-none.border.border-red-500.rounded-full.w-full.py-2.px-3.text-gray-700.leading-tight(class="mt-3 focus:outline-none focus:shadow-outline" type="password", placeholder="Password")
            p(class="text-xs text-red-700 mt-2") Wpisz hasło. Pole nie może być puste
            p(class="text-xs text-red-700 mt-1") Sprawdź, czy adres e-mail i hasło są poprawne
            p(class="text-xs text-blue-600 mt-2") Forgot Password?
            button.bg-blue-500(class="hover:bg-blue-700 mt-4 text-white font-base text-sm py-[0.6rem] w-full px-4 rounded-full focus:outline-none focus:shadow-outline" type="button")
                p Sign In
        div(class="text-center w-[25rem] h-auto flex items-start justify-start flex-col mt-6")
            h2(class="mb-7 text-3xl  font-itim ") Dont have an account?
            NuxtLink#register(to="/register" class="w-full h-10 md:h-10 hover:bg-blue-600 smooth-color hover:text-white  rounded-full bg-white text-blue-600 border-[1px] border-blue-600 text-sm  flex items-center justify-center")
                p Zarejestruj się

            h3(class="mb-7 text-xl text-gray-800 text-start mt-8 font-itim ") Why is it worth to have an account in pinkiwoow?
            div(class="flex flex-col space-y-2 text-gray-800")

                div(class="flex w-full items-center space-x-4")
                    nuxt-img(src="/images/login/fast_order.png", format="webp" width="120", height="120" class="w-20 h-20")
                    p zamawiaj szybciej
                div(class="flex w-full items-center space-x-4")
                    nuxt-img(src="/images/login/order_review.png", format="webp" width="120", height="120" class="w-20 h-20")
                    p sprawdzaj poprzednie zamówienia
                div(class="flex w-full items-center space-x-4")
                    nuxt-img(src="/images/login/order_status.png", format="webp" width="120", height="120" class="w-20 h-20")
                    p śledź status zamówienia
                div(class="flex w-full items-center space-x-4")
                    nuxt-img(src="/images/login/price_tag.png", format="webp" width="120", height="120" class="w-20 h-20")
                    p korzystaj z rabatów i promocji
                
        ButtonBack    
                

        
    
        
</template>

<script setup lang="ts"></script>

<style lang="sass"></style>
