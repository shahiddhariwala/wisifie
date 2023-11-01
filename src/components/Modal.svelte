<script>
  export let showModal;

  let dialog;

  $: {
    if (dialog && showModal) dialog.showModal();
    else if (dialog) dialog.close();
  }
</script>

<dialog
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
>
  <div on:click|stopPropagation>
    <slot name="header" />
    <hr />
    <slot />
    <hr />
    <!-- svelte-ignore a11y-autofocus -->
    <button autofocus on:click={() => dialog.close()}
      ><img
        height="50"
        width="50"
        src="/assets/hamburger-menu.svg"
        alt="hamburger"
      /></button
    >
  </div>
</dialog>

<style>
  dialog {
    max-width: 100vw;
    min-height: 100dvh;

    border: none;
    padding: 0;
  }
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }

  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  button {
    all: unset;
    width: max-content;
    position: fixed;
    right: 10px;
    top: 10px;
    z-index: 9999999;
  }
</style>
