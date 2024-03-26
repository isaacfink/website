<script>
  import BrowserProject from "./BrowserProject.svelte";
  import SideNav from "./SideNav.svelte";
  import Skills from "./Skills.svelte";
  import VitePluginProject from "./VitePluginProject.svelte";
  import WhoAmI from "./content/WhoAmI.svx";
  import MyJourney from "./content/MyJourney.svx";
  import MySkills from "./content/MySkills.svx";
  import TeamExperience from "./content/TeamExperience.svx";
  import FreelanceExperience from "./content/FreelanceExperience.svx";
  import WhyTailwind from "./content/WhyTailwind.svx";
  import WhyMe from "./content/WhyMe.svx";
  import TheFuture from "./content/TheFuture.svx";

  let activeStep = "who-am-i";

  function intersectionobserver(el, step) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // check if ratio is above 0.5 to prevent flickering
          if (entry.intersectionRatio > 0.1) {
            activeStep = step;
          }
        }
      });
    });
    observer.observe(el);

    return {
      destroy() {
        observer.disconnect();
      },
    };
  }
</script>

<div class="grid gap-5 grid-cols-3 md:grid-cols-5 mt-20 relative scroll-smooth">
  <div class="col-span-2 sticky top-12 hidden md:block">
    <div class="sticky top-12 scroll-mt-6 h-screen">
      <SideNav {activeStep} />
    </div>
  </div>
  <div
    class="mt-6 space-y-7 text-base text-main-400 dark:text-main-300 col-span-3 scroll-smooth prose prose-a:text-slate-200 prose-a:font-semibold hover:prose-a:underline prose-a:no-underline prose-p:tracking-wide prose-invert"
  >
    <h2
      use:intersectionobserver={"who-am-i"}
      class="text-main-200 text-lg font-ibm scroll-mt-6"
      id="who-am-i"
    >
      Who am I?
    </h2>
    <WhoAmI />
    <!-- <h3 class="font-bold">Projects for this application</h3>
    <div class="grid lg:grid-cols-2 gap-4">
      <VitePluginProject />
      <BrowserProject />
    </div> -->
    <h2
      use:intersectionobserver={"my-journey"}
      id="my-journey"
      class="text-main-200 text-lg font-ibm scroll-mt-6"
    >
      My journey
    </h2>
    <slot name="myJourney" />

    <MyJourney />
    <h2
      use:intersectionobserver={"my-abilities"}
      id="my-abilities"
      class="text-main-200 text-lg font-ibm scroll-mt-6"
    >
      My skills
    </h2>
    <MySkills />

    <!-- team experience -->
    <h2
      use:intersectionobserver={"team-experience"}
      id="team-experience"
      class="text-main-200 text-lg font-ibm scroll-mt-6"
    >
      My experience working with teams
    </h2>

    <TeamExperience />
    <!-- freelance experience -->
    <h2
      use:intersectionobserver={"freelance-experience"}
      id="freelance-experience"
      class="text-main-200 text-lg font-ibm scroll-mt-6"
    >
      My experience as a freelancer
    </h2>
    <FreelanceExperience />
    <!-- why tailwind labs -->
    <h2
      use:intersectionobserver={"why-tailwind-labs"}
      id="why-tailwind-labs"
      class="text-main-200 text-lg font-ibm scroll-mt-6"
    >
      Why Tailwind Labs?
    </h2>

    <WhyTailwind />

    <!-- why me -->
    <h2
      use:intersectionobserver={"why-me"}
      id="why-me"
      class="text-main-200 text-lg font-ibm scroll-mt-6"
    >
      Why me?
    </h2>
    <WhyMe />
    <!-- the future -->
    <h2
      use:intersectionobserver={"the-future"}
      id="the-future"
      class="text-main-200 text-lg font-ibm scroll-mt-6"
    >
      The future...
    </h2>
    <TheFuture />
    <!-- in conclusion -->
    <h2 class="text-main-200 text-lg font-ibm scroll-mt-6">In conclusion</h2>
    <p class="leading-relaxed font-nunito tracking-wide">
      Thanks for sticking with me till here, I am excited about the possibility
      of joining such a high impact team and I believe I could be a valuable
      asset, I am looking forward to hearing back from you, let's make the web a
      better place, one feature at a time.
    </p>
  </div>
</div>
