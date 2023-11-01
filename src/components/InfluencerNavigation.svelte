<script>
  import Modal from "./Modal.svelte";
  import InformationLayout from "./InfluencerLayout.svelte";
  import ProfileChip from "./ProfileChip.svelte";
  let showModal = false;

  const sortedInfluencers = $$props?.sortedInfluencers;
</script>

<button on:click={() => (showModal = true)}>
  <img
    height="50"
    width="50"
    src="/assets/hamburger-menu.svg"
    alt="hamburger"
  /></button
>

<Modal bind:showModal>
  <InformationLayout title="Influencers">
    {#each sortedInfluencers as influencer, index}
      <ProfileChip
        image_url={influencer?.data?.image_url}
        name={influencer?.data?.name}
        {index}
        id={influencer?.data?.social_media_handle}
        on:click={() => {
          showModal = false;
          window.mixpanel.track("Navigation Click", {
            image_url: influencer?.data?.image_url,
            influencerName: influencer?.data?.name,
          });
        }}
      />
    {/each}
  </InformationLayout>
</Modal>

<style>
  button {
    all: unset;
    width: max-content;
    position: fixed;
    right: 10px;
    top: 10px;
    z-index: 9999999;
  }
</style>
