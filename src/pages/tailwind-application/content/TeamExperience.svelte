<!-- A standout moment during my time at Triple Whale involved tackling the categorization of transactions—a component the project manager identified as particularly challenging due to several unique obstacles:

- The data was coming in from multiple sources which required some extra steps to normalize everything.
- Merchant names were inconsistent, with some in foreign languages.
- The provided categories, when available, did not match our intended framework.

As the newest member of the team, I volunteered to spearhead this challenge. My solution incorporated setting sensible defaults (with options for admin adjustments) and soliciting user input for unclassifiable transactions. Although effective, this approach initially placed a heavy load on the browser due to real-time category regeneration with each user modification. To address this, I reevaluated our strategy and transitioned most of the categorization logic to Postgres. This adjustment significantly improved performance by enabling caching at the API level, thereby optimizing the user experience. -->
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
  I have worked with big and small teams both in office and remotely, I have
  learned how to navigate different environments and communicate effectively
  when distance is a factor
</p>

{#if $open}
  <div class="" transition:slide {...$content} use:content>
    <p class="mt-0">
      Throughout my career, I've had the opportunity to collaborate with teams
      of various sizes across multiple organizations. My first job was at a
      local payment processing company, which, at the time, was coordinating
      with an offshore team to meet some pressing deadlines. The urgency was due
      to some of our vendors updating their APIs and their encryption protocols,
      and the company needed someone on-site to address this swiftly.
    </p>
    <p>
      The primary technology stack at this company was PHP/Laravel, with which I
      had no prior experience (a fact the company was aware of). Despite this, I
      quickly familiarized myself with both the technologies and the existing
      codebase, contributing meaningfully within my first week.
    </p>
    <p>
      My next job was working for a startup called <a
        href="https://www.triplewhale.com">Triple whale</a
      > the focus was to build a financial analytics platform, I was put on the team
      in the very early stages of the product and I was involved in some early decisions
    </p>
    <p>
      Triple whale taught me a lot about teamwork and communication, I was
      working remotely which presented additional challenges that I had to
      overcome, I found pair programming to be an effective way of staying on
      the same page with other teammates.
    </p>
  </div>
{/if}

<button
  {...$trigger}
  use:trigger
  class="block text-right w-full text-primary-300 hover:underline"
  >{$open ? "Close" : "Read more"}</button
>
