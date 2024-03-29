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
  I started my career as a freelancer which taught me a lot about client
  communication and solving problems on my own, it also gave me the
  opportunities to choose my own stack and experiment with new technologies and
  ideas
</p>

{#if $open}
  <div class="" transition:slide {...$content} use:content>
    <p class="mt-0">
      During my time as a freelancer, I've had the pleasure of working on a
      variety of projects for a diverse set of clients. My most memorable is
      definitely the POS mentioned above (You never forget your first), there
      have been several other noteworthy ventures:
    </p>
    <ul>
      <li>
        <b>An invitations platform with a custom image editor: </b> This project
        was particularly memorable because of the unique challenge it presented in
        integrating a user-friendly yet powerful image editing tool within the platform.
      </li>
      <li>
        <b>A portfolio website for a local photographer: </b> of my first projects
        and quite a challenge because both the client and the designer were very
        particular about the design, this project taught me a lot about pixel perfect
        design and working within a design system.
      </li>
      <li>
        <b>A low code-tool for a healthcare SaaS: </b> This was a tool designed to
        help the company roll out features through a low code interface, I designed
        and built the system which allowed them to create rule based proccesses based
        on specific triggers or on a cron job, they could run arbitrary code or call
        internal APIs, the project included a redis job queue with functionality
        for retries and error handling.
      </li>
    </ul>
  </div>
{/if}
<button {...$trigger} use:trigger class="block text-right w-full"
  >{$open ? "Close" : "Read more"}</button
>
