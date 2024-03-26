<script>
  import { createEventDispatcher } from "svelte";

  export let isActive;
  export let monoLogo;
  export let logo;

  export let title;
  export let description;

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("click");
  }
</script>

<button
  on:click={handleClick}
  class:active={isActive}
  class="py-3 px-5 bg-main-800 hover:bg-main-800/75 transition-colors rounded group relative"
>
  <div
    class="flex {isActive
      ? 'justify-between items-center'
      : 'justify-center items-center'}"
  >
    <div class="h-12 w-12 flex items-center justify-center">
      {#if isActive}
        <svelte:component this={logo} />
      {:else}
        <svelte:component this={monoLogo} />
      {/if}
    </div>
    {#if isActive}
      <h3 class="text-main-300 text-xl">{title}</h3>
      <div class="w-12" />
    {/if}
  </div>
  {#if isActive}
    <p class="text-main-500 mt-3">
      {description}
    </p>
  {/if}

  {#if isActive}
    <div class="absolute right-2 inset-y-2 opacity-20">
      <svelte:component this={monoLogo} />
    </div>
  {/if}
</button>

<style>
  .active {
    grid-column: auto / span 2;
    grid-row: auto / span 2;
  }
</style>
