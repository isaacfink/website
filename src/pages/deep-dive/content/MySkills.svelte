<script>
  import Skills from "../Skills.svelte";
  import { createCollapsible } from "@melt-ui/svelte";
  import { slide } from "svelte/transition";

  const {
    elements: { content, root, trigger },
    states: { open },
  } = createCollapsible();
</script>

<!-- My journey, like all the great ones, starts with the movies. As a kid, I was totally into those hacker movies and decided at 15 that I was going to learn how to hack. It didn't take long to figure out that movies stretched the truth, but by then, I was already hooked on programming. -->

<p>
  I am proficient in multiple languages including Python, Js/Ts and frameworks
  like React and Svelte, as well as various database and cloud services
</p>

{#if $open}
  <div class="" transition:slide {...$content} use:content>
    <p>
      My experience has spanned the entire web spectrum, including database
      management, frontend development, and complex backend projects. While I
      have a stronger preference for, and greater proficiency in, backend
      development I also find joy in frontend projects that present creative and
      genuine challenges.
    </p>
    <p>
      I have experience with multiple languages and frameworks, including
      Python, PHP, and JavaScript, and have utilized Django, Laravel, Svelte,
      and React in various projects. My work with databases extends to Postgres,
      MySQL, and SQLite, as well as no-sql options like MongoDB and Bigtable,
      alongside proficiency with tools such as Docker, Git, and various cloud
      services.
    </p>
    <p>
      Most of my professional work has been with React and Vue, but if I had to
      pick a favorite, it's Svelte all the way. Svelte's been my framework of
      choice for personal and client projects for a while now.
    </p>
  </div>
{/if}

<button
  {...$trigger}
  use:trigger
  class="block text-right w-full text-primary-300 hover:underline"
  >{$open ? "Close" : "Read more"}</button
>

<h3 class="font-bold">My approximate level for relevant skills:</h3>
<Skills />
<div class="h-4" />
