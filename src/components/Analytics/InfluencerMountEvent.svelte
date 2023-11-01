<script>
  import { onMount } from "svelte";

  let { name: influencerName = "", handle, description } = $$props;

  const className = `my-profile-section-${influencerName}`.replaceAll(" ", "-");
  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          window.mixpanel.track("Influencer In View", {
            influencerName,
            handle,
            description,
          });
          console.log("Influencer is now visible to the user", {
            influencerName,
          });
        }
      }
    });

    observer.observe(document.querySelector(`.${className}`));
  });
</script>

<div class={className} />
