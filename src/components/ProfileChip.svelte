<script>
  export let name = "Shukmani Gambhir";
  export let image_url = "";
  export let index = 1;
  export let id = "Shukhmani Gambhir";

  const isEven = (index + 1) % 2 == 0;
</script>

<div class={`flex items-center ${isEven ? "flex-row-reverse" : ""}`} on:click>
  <div
    class="rounded-full border-4 border-dark-pink w-[77px] h-[77px] overflow-hidden z-30"
  >
    <a href={`/#${id}`}>
      <img src={image_url} loading="lazy" width="77" height="77" />
    </a>
  </div>
  <div
    class={`${
      isEven ? "-mr-[20px] pr-[10px]" : "-ml-[20px] pl-[20px]"
    } bg-dark-pink rounded-full`}
  >
    <a
      href={`/#${id}`}
      class="px-3 py-[6px] drop-shadow-xl flex gap-1 text-semi-bold w-max items-center"
    >
      {name}
      <span class="hidden w-min-4 h-min-4">
        <img
          src="/assets/shop-redirect-icon.svg"
          alt="redirect-icon"
          height={24}
          width={24}
        />
      </span>
      <span class="hidden w-min-4 h-min-4">
        <img src="/assets/shop-redirect-icon-md.svg" alt="redirect-icon" />
      </span>
    </a>
  </div>
</div>
