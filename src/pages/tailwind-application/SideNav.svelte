<script lang="ts">
  import Link from "./Link.svelte";

  export let activeStep: string;
</script>

<Link name="Who am I" {activeStep} id="who-am-i"></Link>
<Link name="My journey" {activeStep} id="my-journey"></Link>
<Link {activeStep} id="my-abilities" name="My skills"></Link>
<Link {activeStep} id="team-experience" name="Team experience"></Link>
<Link {activeStep} id="freelance-experience" name="Freelance experience"></Link>
<Link {activeStep} id="why-tailwind-labs" name="Why Tailwind Labs"></Link>
<Link {activeStep} id="why-me" name="Why me"></Link>
<Link {activeStep} id="the-future" name="The future"></Link>
