<script>
  import Modal from "./Modal.svelte";
  import InformationLayout from "./InfluencerLayout.svelte";
  import ProfileChip from "./ProfileChip.svelte";
  let showModal = false;

  const sortedInfluencers = $$props?.sortedInfluencers;
  console.log({ props: $$props });
</script>

<div />
<button on:click={() => (showModal = true)}> Show Modal </button>

<Modal bind:showModal>
  <InformationLayout title="Infleuncers">
    {#each sortedInfluencers as influencer, index}
      <ProfileChip
        image_url={influencer?.data?.image_url}
        name={influencer?.data?.name}
        {index}
        id={influencer?.data?.social_media_handle}
      />
    {/each}
  </InformationLayout>

  Test Shahid Dhariwala Rocks
</Modal>

<style>
  div {
    width: 100vw;
    background-color: red;
    height: 100px;
  }
</style>
