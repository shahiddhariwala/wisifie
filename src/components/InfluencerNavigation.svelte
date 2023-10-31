<script>
  import Modal from "./Modal.svelte";

  let showModal = false;
</script>

<button on:click={() => (showModal = true)}> show modal </button>

<Modal bind:showModal>
  <!-- <InformationLayout title="Infleuncers">
        {sortedInfluencers.map((each, index) => <InfluencerProfileChip image_url={each?.data?.image_url} 
        name={each?.data?.name} 
        index={index} 
        id={each?.data?.social_media_handle}/>)}
    </InformationLayout> -->
  Shahid Dhariwala Rocks
</Modal>
