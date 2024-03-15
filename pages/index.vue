<template>
  <div un-prose="~" class="slide-enter-content" un-font="300" un-overflow="hidden">
    <h1 un-font="900" un-tracking="wider" un-m="b-8" un-animated="~ fade-in" un-duration="100">
      Johannes Eschricht
    </h1>

    <p un-animate-delay="90">
      Hej!<br>
      I’m Johannes Eschricht, living in one of the cozy corners of Småland, Sweden together with my wife and our 2 daughters.
      I’m a tech enthusiast and a software developer with a soft spot for frontend development.
    </p>

    <p un-animate-delay="180">
      I work at <a
        href="https://nortic.se"
        class="[&>.work-icon]:hover:(scale-120 text-artivue-accent/20)"
        un-text="artivue-text"
        un-font="400"
        un-decoration="none"
        un-border="b artivue-text/30 hover:artivue-text"
        un-transition="colors"
        un-duration="400"
        un-relative
      ><span
         class="work-icon"
         un-inline="block"
         un-vertical="text-top"
         un-i="nortic-icon"
         un-transition="all"
         un-duration="300"
         un-text="artivue-accent/10 5xl"
         un--translate="1/2"
         un-absolute
         un-left="1/2"
         un-top="1/2"
       />
        <span>Nortic AB</span></a> as a software developer.
    </p>

    <p un-animate-delay="270">
      I created this website mainly to try out <a
        href="https://content.nuxt.com/"
        un-text="artivue-text"
        un-font="400"
        un-decoration="none"
        un-border="b artivue-text/30 hover:artivue-text"
        un-transition="colors"
        un-duration="400"
      >Nuxt Content</a> but lets see what will come out of it. Hopefully it won't be just another unfinished project... 👀
    </p>

    <!-- <p un-animate-delay="360">
      I love to learn new things and I’m always up for a challenge. If you have a project or an idea you want to discuss, feel free to <a
        href="/contact"
        un-text="artivue-text"
        un-font="400"
        un-decoration="none"
        un-border="b artivue-text/30 hover:artivue-text"
        un-transition="colors"
        un-duration="400"
      >contact me</a>.
    </p> -->
  </div>
</template>

<style>
@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-enter-content > p {
  animation-name: slide-in;

  @apply animated animated-duration-1s;
}
</style>
