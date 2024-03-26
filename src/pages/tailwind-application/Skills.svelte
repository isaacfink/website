<script>
  import GrowingGraphic from "./GrowingGraphic.svelte";

  const skills = {
    "Js/Ts": "w-11/12",
    Python: "w-10/12",
    CSS: "w-11/12",
    Tailwind: "w-full",
    Git: "w-10/12",
    Rust: "w-2/12",
  };
</script>

<div
  class="grid grid-cols-9 p-3 rounded-xl bg-slate-800 items-center gap-y-2 relative"
>
  {#each Object.entries(skills) as skill}
    <div class="mt-2 lg:t-0">{skill[0]}</div>
    <div
      class="w-full rounded-full h-2 bg-slate-700 col-span-9 lg:col-span-8 relative"
    >
      <div
        class="absolute bg-primary-500 rounded-full inset-y-0 left-0 {skill[1]}"
      >
        {#if skill[0] === "Rust"}
          <GrowingGraphic />
        {/if}
      </div>
    </div>
  {/each}
</div>
