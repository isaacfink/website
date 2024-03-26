<script lang="ts">
  import SideNav from "./SideNav.svelte";
  import Skills from "./Skills.svelte";

  let activeStep = "who-am-i";

  function intersectionobserver(el: HTMLElement, step: string) {
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
    class="mt-6 space-y-7 text-base text-main-400 dark:text-main-300 col-span-3 scroll-smooth"
  >
    <h2
      use:intersectionobserver={"who-am-i"}
      class="text-main-200 text-lg font-ibm scroll-mt-6"
      id="who-am-i"
    >
      Who am I?
    </h2>
    <p class="leading-relaxed font-nunito tracking-wide">
      I'm a passionate and dedicated software developer with a love for turning
      ideas into functional, elegant, and user-friendly digital solutions. With
      over 5 years of experience in the ever-evolving world of technology, I'm
      here to share my journey, skills, and how I can contribute to the success
      of Tailwind and other tailwind labs projects.
    </p>
    <h3 class="font-bold">Some highlighted memories</h3>
    <div class="grid lg:grid-cols-2 gap-4">
      <div class="rounded-xl p-3 bg-slate-800">
        <p class="leading-relaxed font-nunito tracking-wide text-sm">
          The time I learned PHP and Laravel in two days for a pressing
          deadline, that is when I realized that I work best when I need to
          study and adapt quickly
        </p>
      </div>
      <div class="rounded-xl p-3 bg-slate-800">
        <p class="leading-relaxed font-nunito tracking-wide text-sm">
          A complete restaurant management system built for a client, the
          requirements kept changing and went from a shopify template to a full
          blown toast like system, interestingly Tailwind was the only tech that
          kept up with the changing requirements
        </p>
      </div>
    </div>
    <h2
      use:intersectionobserver={"my-journey"}
      id="my-journey"
      class="text-main-200 text-lg font-ibm scroll-mt-6"
    >
      My journey
    </h2>
    <p class="leading-relaxed font-nunito tracking-wide">
      My journey, like all the great ones, starts with the movies. As a kid, I
      was totally into those hacker movies and decided at 15 that I was going to
      learn how to hack. It didn't take long to figure out that movies stretched
      the truth, but by then, I was already hooked on programming.
    </p>
    <p class="leading-relaxed font-nunito tracking-wide">
      My first entry into the world of programming was through Python, I used it
      to automate simple stuff at first but the real excitement came from
      creating something out of nothing.
    </p>
    <p class="leading-relaxed font-nunito tracking-wide">
      Given my limited time and almost no internet access, creativity wasn't
      just an asset; it was a necessity. For the first few years, a local
      library was my go-to source for learning. I'd then practice on a computer
      whenever I could. I remember coding on an old Samsung Galaxy Duo,
      transferring the code to an SD card, and later running it on an online
      interpreter
    </p>
    <p class="leading-relaxed font-nunito tracking-wide">
      Web development eventually caught my eye, and Django was my first real
      dive into that world. I worked on some cool projects, but the highlight
      was this gig I landed for a local restaurant. What started as a custom
      Shopify template for their online orders quickly evolved into a full-blown
      custom POS system. This project was my introduction to Tailwind, and
      honestly, it was a game-changer. As the project's demands and designs kept
      shifting, Tailwind's flexibility allowed me to adapt quickly and
      efficiently.
    </p>
    <h2
      use:intersectionobserver={"my-abilities"}
      id="my-abilities"
      class="text-main-200 text-lg font-ibm scroll-mt-6"
    >
      My skills
    </h2>
    <p class="leading-relaxed font-nunito tracking-wide"></p>
    <p class="leading-relaxed font-nunito tracking-wide">
      When I first looked at the previous tasks for this role, my initial
      thought was that I am not good enought to do this job, I don't have
      sufficient experience with parts of the stack and I haven't worked much on
      tooling, However I remembered that I had the same feeling at some of my
      previous jobs and those were the ones where I was able to make the biggest
      impact in the shortest time, I find that I work better in unkown territory
      ebcause it forces me to not become complacent and to keep learning
    </p>
    <p class="leading-relaxed font-nunito tracking-wide">
      My experience has spanned the entire web spectrum, including database
      management, frontend development, and complex backend projects. While I
      have a stronger preference for, and greater proficiency in, backend
      development — which closely aligns with tooling and working directly on
      Tailwind — I also find joy in frontend projects that present creative and
      genuine challenges.
    </p>

    <p class="leading-relaxed font-nunito tracking-wide">
      I have experience with multiple languages and frameworks, including
      Python, PHP, and JavaScript, and have utilized Django, Laravel, Svelte,
      and React in various projects. My work with databases extends to Postgres,
      MySQL, and SQLite, as well as no-sql options like MongoDB and Bigtable,
      alongside proficiency with tools such as Docker, Git, and various cloud
      services.
    </p>
    <p class="leading-relaxed font-nunito tracking-wide">
      Most of my professional work has been with React and Vue, but if I had to
      pick a fav, it's Svelte all the way. Svelte's been my sidekick for
      personal and client projects for a while now. There's something about its
      simplicity and speed that just gets me.
    </p>

    <h3 class="font-bold">My approximate level for relevant skills:</h3>
    <Skills />
    <div class="h-4"></div>
    <!-- team experience -->
    <h2
      use:intersectionobserver={"team-experience"}
      id="team-experience"
      class="text-main-200 text-lg font-ibm scroll-mt-6"
    >
      My experience working with teams
    </h2>
    <p class="leading-relaxed font-nunito tracking-wide">
      Throughout my career, I've had the opportunity to collaborate with teams
      of various sizes across multiple organizations. My journey began at a
      local payment processing company, which, at the time, was coordinating
      with an offshore team to meet some pressing deadlines. The urgency was due
      to some of our vendors updating their APIs and their encryption protocols,
      and the company needed someone on-site to address this swiftly.
    </p>

    <p class="leading-relaxed font-nunito tracking-wide">
      The primary technology stack at this company was PHP/Laravel, with which I
      had no prior experience (a fact the company was aware of). Despite this, I
      quickly familiarized myself with both the technologies and the existing
      codebase, contributing meaningfully within my first week.
    </p>
    <p class="leading-relaxed font-nunito tracking-wide">
      My next job was working for a startup called <a
        class="text-slate-200 hover:underline"
        href="https://www.triplewhale.com/">Triple whale</a
      > the focus was to build a financial analytics platform, I was put on the team
      in the very early stages of the product and I was involved in some early decisions
    </p>

    <p class="leading-relaxed font-nunito tracking-wide">
      A standout moment during my time at Triple Whale involved tackling the
      categorization of transactions—a component the project manager identified
      as particularly challenging due to several unique obstacles:
    </p>
    <ul class="ml-6 list-disc">
      <li class="leading-relaxed font-nunito tracking-wide">
        The data was coming in from multiple sources which required some extra
        steps to normalize everything.
      </li>
      <li class="leading-relaxed mt-2 font-nunito tracking-wide">
        Merchant names were inconsistent, with some in foreign languages.
      </li>
      <li class="leading-relaxed mt-2 font-nunito tracking-wide">
        The provided categories, when available, did not match our intended
        framework.
      </li>
    </ul>
    <p class="leading-relaxed font-nunito tracking-wide">
      As the newest member of the team, I volunteered to spearhead this
      challenge. My solution incorporated setting sensible defaults (with
      options for admin adjustments) and soliciting user input for
      unclassifiable transactions. Although effective, this approach initially
      placed a heavy load on the browser due to real-time category regeneration
      with each user modification. To address this, I reevaluated our strategy
      and transitioned most of the categorization logic to Postgres. This
      adjustment significantly improved performance by enabling caching at the
      API level, thereby optimizing the user experience.
    </p>
    <!-- freelance experience -->
    <h2
      use:intersectionobserver={"freelance-experience"}
      id="freelance-experience"
      class="text-main-200 text-lg font-ibm scroll-mt-6"
    >
      My experience as a freelancer
    </h2>
    <p class="leading-relaxed font-nunito tracking-wide">
      During my time as a freelancer, I've had the pleasure of working on a
      variety of projects for a diverse set of clients. My most memorable is
      definitely the POS mentioned above (You never forget your first), there
      have been several other noteworthy ventures:
    </p>
    <ul class="ml-6 list-disc">
      <li class="leading-relaxedfont-nunito tracking-wide">
        <span class="font-bold"
          >An Invitations Platform with a Custom Image Editor:</span
        > This project was particularly memorable because of the unique challenge
        it presented in integrating a user-friendly yet powerful image editing tool
        within the platform.
      </li>
      <li class="mt-2 leading-relaxed font-nunito tracking-wide">
        <span class="font-bold"
          >A Portfolio Website for a Local Photographer:</span
        > This task was both challenging and exhilarating, as the client had very
        specific design and style preferences for their website. Striving for pixel-perfect
        design and adhering closely to Figma designs taught me a great deal about
        meticulous attention to detail in web design.
      </li>
      <li class="leading-relaxed mt-2 font-nunito tracking-wide">
        <span class="font-bold"
          >Various Automations and Solutions for Businesses:</span
        > These projects were invaluable in teaching me about building scalable solutions
        and collaborating closely with stakeholders to precisely define project requirements.
      </li>
    </ul>
    <!-- why tailwind labs -->
    <h2
      use:intersectionobserver={"why-tailwind-labs"}
      id="why-tailwind-labs"
      class="text-main-200 text-lg font-ibm scroll-mt-6"
    >
      Why Tailwind Labs?
    </h2>

    <p class="leading-relaxed font-nunito tracking-wide">
      Tailwind has revolutionized my approach to design and design systems. As
      an early adopter, I have assisted several teams in transitioning to
      Tailwind, significantly boosting developer productivity.
    </p>
    <p class="leading-relaxed font-nunito tracking-wide">
      Although my focus has always been on web development, I've recently
      developed an interest in tooling. This includes developer tools and some
      internal tools for companies. I appreciate the complexity involved in
      building these tools and find the challenges they present to be
      particularly rewarding.
    </p>

    <!-- why me -->
    <h2
      use:intersectionobserver={"why-me"}
      id="why-me"
      class="text-main-200 text-lg font-ibm scroll-mt-6"
    >
      Why me?
    </h2>
    <p class="leading-relaxed font-nunito tracking-wide">
      I am a motivated developer with a passion for learning and growing, I
      believe my experience and speed of learning will help me contribute to the
      success of tailwind and future projects
    </p>
    <h3 class="font-bold">
      A perfect fit: My skills and the application requirements:
    </h3>
    <ul class="ml-6 list-disc">
      <li class="leading-relaxedfont-nunito tracking-wide">
        <span class="font-semibold">You like to pair on problems.</span> At triple
        whale I got the opportunity to pair program with some team members, this
        was my own initiative after seeing the benefits, we would usually jump on
        a call for a couple of hours and knock out bug after bug, I found it enjoyable
        as well as extremely productive, as much as I like coding on my own this
        realization made me appreciate the benefits of pair programming and I worked
        on some of the skills required to do so effectively like better communication
        and effective documentation
      </li>
      <!-- <li class="mt-2 leading-relaxed font-nunito tracking-wide">
        <span class="font-bold"
          >You hold people to a high standard, and inspire them to do their best
          work.</span
        > I like to think I have high standards for myself, while I don't expect
        anyone to do their best work I do expect people to try their best and reach
        out when they need some guidance, I do appreciate well written code and briliant
        solutions to problems.
      </li> -->
      <li class="leading-relaxed mt-2 font-nunito tracking-wide">
        <span class="font-bold">You're fanatical about polish.</span> I have worked
        with professional designers and experienced tech leads who wouldn't let a
        single pixel be off, I have learned to appreciate the difference between
        99% and 100% and I always strive to get as close to 100% as possible, in
        the past this has been a source of feedback from my managers when sometimes
        they felt (rightfully so) that I was spending too much time on finishing
        touches
      </li>
      <li class="leading-relaxed mt-2 font-nunito tracking-wide">
        <span class="font-bold">You miss when software used to be fast.</span> Recently
        I have been studying up on how to make software more efficient, I had the
        opportunity to put this to work when I had to optimize some internal tools
        for a company that was processing close to a million files a day on a very
        low budget setup, it was a challenge which I appreciated and I learned a
        lot from it
      </li>
      <li class="leading-relaxed mt-2 font-nunito tracking-wide">
        <span class="font-bold">You're energized by unfamiliar territory.</span>
        Very few things excite me more than jumping into an unfamiliar codebase,
        add an unfamiliar stack on top and I am in heaven, my best experiences involved
        unfamiliar territory including a job I took which required PHP and Laravel
        and I didn't know either, those two days I spent learning PHP and going through
        the codebase were some of the best of my entire career
      </li>
      <!-- <li class="leading-relaxed mt-2 font-nunito tracking-wide">
        <span class="font-bold">You're a great writer.</span> I have always enjoyed
        writing, especially technical writing, english is not my first language but
        I am fluent in both writing and speaking, I sometimes require a little help
        from tools like ChatGPT for finishing touchups but I am always looking to
        improve
      </li> -->
      <li class="elading-relaxed font-nunito mt-2 tracking-wide">
        <span class="font-bold">You're good at breaking down projects.</span> My
        experience freelancing has taught me how to break down a project in way that
        is clear from a technical perspective but also easy for stakeholders to understand,
        when freelancing this is one of the most important skills, one of my gigs
        had a very simple requirement, they wanted a feature that would allow them
        to add features to their software without wiriting code (?) I had no idea
        what that even means but after a couple of hours with the client we were
        able to break the project down and after a few months they got exactly that
      </li>
      <li class="leading-relaxed mt-2 font-nunito tracking-wide">
        <span class="font-bold">You love great design.</span> Who doesn't? but besides
        loving the final design i enjoy the process of refining a web page until
        it is perfect, I have worked with some amazing designers who have taught
        me a lot about design and I have learned to appreciate the difference between
        a good design and a great one, i took some courses on UX to learn basic theory
        but I am by no means a designer, I stick to what I am good at which is to
        make the designers look good
      </li>
    </ul>
    <p class="leading-relaxed">
      And I am a fast learner which will help me quickly fill the gaps
    </p>
    <!-- the future -->
    <h2
      use:intersectionobserver={"the-future"}
      id="the-future"
      class="text-main-200 text-lg font-ibm scroll-mt-6"
    >
      The future...
    </h2>
    <p class="leading-relaxed font-nunito tracking-wide">
      The evolving landscape of frontend development excites me, particularly
      the strategic shifts Tailwind is making — moving away from
      JavaScript-based configuration and runtime. This could lead to much wider
      adaptation and usage for developers working outside the typical React/Vue
      space, my time working with Django has shown me the need for something
      like this
    </p>
    <p class="leading-relaxed font-nunito tracking-wide">
      I envision creating adapters for frameworks like Django, which would
      incorporate the Tailwind compiler within their development and build
      scripts. This adaptation would streamline the process, making Tailwind
      more accessible to a wider range of developers, while community solutions
      already exist, the new tailwind compiler makes it much easier to support
      with minimal effort
    </p>
    <p class="leading-relaxed font-nunito tracking-wide">
      I also see the potential for a more robust ecosystem, extending headlessui
      to include frameworks like svelte and even vanilla JS components which
      will make tailwindui/catalyst easier for more developers to use.
    </p>
    <p class="leading-relaxed font-nunito tracking-wide">
      One area I was hoping to explore more recently is better tooling around
      code reviews for UI changes, I think projects built with tailwind have an
      advantage since it's easier to see what changed and there is usually a
      strong design system in place which removes some of the overhead for the
      reviewers.
    </p>
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
