<script>
  import { createCollapsible } from "@melt-ui/svelte";
  import { slide } from "svelte/transition";

  const {
    elements: { content, root, trigger },
    states: { open },
  } = createCollapsible();
</script>

<!-- My journey, like all the great ones, starts with the movies. As a kid, I was totally into those hacker movies and decided at 15 that I was going to learn how to hack. It didn't take long to figure out that movies stretched the truth, but by then, I was already hooked on programming. -->

<p>
  I learned to code as a young teenager, I learned everything from free online
  resources starting with Python, and eventually web development and now low
  level stuff like C and Rust
</p>
{#if $open}
  <div class="" transition:slide {...$content} use:content>
    <p class="mt-0">
      Inspired by hacker movies, I began programming at 15, starting with Python
      to automate tasks, I was disappointed to find out that hacking wasn't as
      glamorous as the movies made it out to be, but I was already hooked on
      programming.
    </p>

    <p>
      <!-- My first entry into the world of programming was through Python, I used it to automate simple stuff at first but the real excitement came from creating something out of nothing. -->
    </p>

    <p>
      Given my limited time and almost no computer access, creativity wasn't
      just an asset, it was a necessity. For the first few years, a local
      library was my go-to source for learning. I'd then practice on a computer
      whenever I could. I remember coding on an old Samsung Galaxy Duo,
      transferring the code to an SD card, and later running it on an online
      interpreter
    </p>

    <p>
      Web development eventually caught my eye, and Django was my first real
      dive into that world. I worked on some cool projects, I always made a
      point to continue learning and I picked up a couple other languages and
      frameworks as well as different areas in Computer science like algorithms
      and databases
    </p>
  </div>
{/if}

<button
  {...$trigger}
  use:trigger
  class="block text-right w-full text-primary-300 hover:underline"
  >{$open ? "Close" : "Read more"}</button
>
