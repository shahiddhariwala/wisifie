<script>
  export let title = "Influencers";
</script>

<section class="relative min-h-[100dvh] bg-light-pink z-20">
  <div
    class="bg-cover bg-hero-pattern absolute top-[-10px] w-full min-h-[220px] mix-blend-overlay -z-10"
  />
  <header
    class="bg-cover absolute w-full top-0 -mt-[4px] bg-section-red bg-hero-pattern min-h-[77px] flex justify-center items-center text-white-follower text-[15px ]"
  >
    {title}
  </header>

  <section class="px-9 py-24 w-full h-max">
    <slot />
  </section>

  <div class="bottom-fade fixed bottom-0 w-full h-[10%]" />
</section>

<style>
  section {
    width: 100vw;
  }
  .bottom-fade {
    opacity: 0.6;
    background: linear-gradient(
      188deg,
      rgba(163, 98, 97, 0) -7.64%,
      rgba(163, 98, 97, 0.71) 22.13%,
      rgba(163, 98, 97, 0) 50.68%
    );

    filter: blur(29.949581146240234px);
  }
</style>
