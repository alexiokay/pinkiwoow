<template lang="pug">
div#footer-wrapper(class=" bottom-0 w-full xl:w-3/4 h-[19rem] flex flex-col md:flex-row items-between justify-around mx-0 bg-white") 

        div(class="flex w-2/5  xl:w-full ml-2 mt-5 xl:ml-6 flex-col text-gray-600 xl:items-start text-sm ")
            div(class="items-start space-y-[0.4rem] ")
                h5(class="text-black text-base") {{ $t('components.footer.information.information').toUpperCase() }}
                p.footer-text  - {{ $t('components.footer.information.regulations') }}
                p.footer-text  - {{ $t('components.footer.information.cookies') }}
                p.footer-text  - {{ $t('components.footer.information.return') }}
                p.footer-text  - {{ $t('components.footer.information.delivery') }}
                p.footer-text  - {{ $t('components.footer.information.privacy_policy') }}
        div(class="w-2/5  xl:w-full flex mt-5 ml-2 xl:ml-6 flex-col xl:items-start text-gray-600 text-sm ")
            div(class="items-start space-y-[0.4rem] ")
                h5(class="text-black text-base") {{ $t('components.footer.account.your_account').toUpperCase() }}
                p.footer-text - {{ $t('components.footer.account.your_account') }}
                p.footer-text  - {{ $t('components.footer.account.login') }}
                p.footer-text  - {{ $t('components.footer.account.orders') }}
                p.footer-text  - {{ $t('components.footer.account.registration') }}
          
        div(class=" w-3/5 xl:w-full flex flex-col justify-start items-start h-full   ")
            div(class="flex flex-col items-center mt-2 ")
                div(class='w-1/6 h-[1px]  bg-gray-600')
                h5#newsletter-heading(class="text-[2.4rem] h-auto font-sans-serif font-bold tracking-wide ") NEWSLETTER
                div(class='w-1/6 h-[2px] mt-1 bg-gray-600')
            div(class="mt-3 text-sm w-3/5 xl:w-[89%] leading-4 text-gray-800")
                p {{ $t('components.footer.newsletter.description') }}
                    span(class="ml-1 text-gray-500 hover:underline hover:cursor-pointer") {{ $t('components.footer.newsletter.description2') }}
            div(class="flex w-full flex-row items-center mt-6 space-x-2")
                
                input(class="outline-0 border-[1px] h-7 text-sm px-2 text-gray-800" :placeholder="$t('components.footer.newsletter.placeholder')")
                button#newsletter-button(class="border-2 w-[7.5rem] h-[1.9rem] flex items-center justify-center border-gray-700 font-light text-gray-600")  {{ $t('components.footer.newsletter.button') }}
            div(class="flex hover:cursor-pointer  items-center space-x-3")
                div(class="flex justify-center ")
                    input(type="checkbox" class="mt-4 w-5 h-5")
                    p(class="absolute mt-4 text-sm font-extrabold ") X
                p(class="mt-3 text-xs") Marketing
</template>

<script setup lang="ts">
const { t } = useLang();
</script>

<style lang="sass">
.footer-text
    -webkit-transition: color 0.3s
    transition: color 0.3s
    cursor: pointer
    &:hover
        color: black
#newsletter-heading

    background: conic-gradient(#553c9a 0%, #553c9a 33%, #ee4b2b 33%, #ee4b2b 66%, #00c2cb 66%, #00c2cb 99%)
    color: transparent

    background-size: 50%
    background-clip: text
    -webkit-background-clip: text

    animation: expand-rev 0.5s ease forwards

    cursor: pointer

#newsletter-heading:hover
    animation: expand 0.5s ease forwards

#newsletter-button:hover
    background-color: #00c2cb
    color: white
    -webkit-transition-property: color, background-color
    transition-property: color, background-color, border
    -webkit-transition-duration: 0.4s
    transition-duration: 0.4s
    -moz-osx-font-smoothing: grayscale
    cursor: pointer
    animation: shake 0.5s ease forwards


@keyframes expand
    0%
        background-size: 50%
        background-position: 0 0

    20%
        background-size: 55%
        background-position: 0 1em

    100%
        background-size: 325%
        background-position: -13em -4em



@keyframes expand-rev
    0%
        background-size: 325%
        background-position: -10em -4em
    20%
        background-size: 55%
        background-position: 0 1em

    100%
        background-size: 50%
        background-position: 0 0

@keyframes shake
    0%
        transform: translate(1px, 1px) rotate(0deg)

    20%
        transform: translate(-3px, 0px) rotate(1deg)

    40%
        transform: translate(1px, -1px) rotate(1deg)

    60%
        transform: translate(-3px, 1px) rotate(0deg)

    80%
        transform: translate(-1px, -1px) rotate(1deg)

    100%
        transform: translate(1px, -2px) rotate(-1deg)
</style>
