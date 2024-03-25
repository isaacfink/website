<script lang="ts">
  type Step =
    | "who-am-i"
    | "my-journey"
    | "the-future"
    | "my-abilities"
    | "team-experience"
    | "why-tailwind-labs"
    | "why-me"
    | "freelance-experience"
    | "soft-skills";
  let activeStep = "who-am-i";
</script>

<div class="grid gap-5 grid-cols-5 mt-20 relative scroll-smooth">
  <div class="col-span-2 sticky top-12">
    <div class="sticky top-12 scroll-mt-12">
      <a
        href="#who-am-i"
        class="py-2 px-3 border-l-2 block {activeStep === 'who-am-i'
          ? 'border-primary-500 text-slate-100'
          : 'border-slate-300 text-slate-500'}">Who am I</a
      >
      <a
        href="#my-journey"
        class="py-2 px-3 border-l-2 block {activeStep === 'my-journey'
          ? 'border-primary-500 text-slate-100'
          : 'border-slate-500 text-slate-500'}">My journey</a
      >

      <a
        href="#my-abilities"
        class="py-2 px-3 border-l-2 block {activeStep === 'my-abilities'
          ? 'border-primary-500 text-slate-100'
          : 'border-slate-500 text-slate-500'}">My skills</a
      >
      <a
        href="#team-experience"
        class="py-2 px-3 border-l-2 block {activeStep === 'team-experience'
          ? 'border-primary-500 text-slate-100'
          : 'border-slate-500 text-slate-500'}">Team experience</a
      >
      <a
        href="#freelance-experience"
        class="py-2 px-3 border-l-2 block {activeStep === 'freelance-experience'
          ? 'border-primary-500 text-slate-100'
          : 'border-slate-500 text-slate-500'}">Freelance experience</a
      >
      <a
        href="#why-tailwind-labs"
        class="py-2 px-3 border-l-2 block {activeStep === 'why-tailwind-labs'
          ? 'border-primary-500 text-slate-100'
          : 'border-slate-500 text-slate-500'}">Why Tailwind Labs</a
      >
      <a
        href="#why-me"
        class="py-2 px-3 border-l-2 block {activeStep === 'why-me'
          ? 'border-primary-500 text-slate-100'
          : 'border-slate-500 text-slate-500'}">Why me</a
      >
      <a
        href="#the-future"
        class="py-2 px-3 border-l-2 block {activeStep === 'the-future'
          ? 'border-primary-500 text-slate-100'
          : 'border-slate-500 text-slate-500'}">The future</a
      >
    </div>
  </div>
  <div
    class="mt-6 space-y-7 text-base text-main-600 dark:text-main-400 col-span-3"
  >
    <h2 class="text-main-200 text-lg font-ibm">Who am I?</h2>
    <p class="leading-relaxed font-nunito tracking-wide">
      I'm a passionate and dedicated software developer with a love for turning
      ideas into functional, elegant, and user-friendly digital solutions. With
      over 5 years of experience in the ever-evolving world of technology, I'm
      here to share my journey, skills, and how I can contribute to the success
      of Tailwind and other tailwind labs projects.
    </p>
    <h3 class="font-bold">Some hightlighted memories</h3>
    <div class="grid grid-cols-2 gap-4">
      <div class="rounded-xl p-3 bg-slate-800">
        <p class="leading-relaxed font-nunito tracking-wide">
          The time I learned PHP and Laravel in two days for a pressing
          deadline, that is when I realized that I work best when I need to
          study and adapt quickly
        </p>
      </div>
      <div class="rounded-xl p-3 bg-slate-800">
        <p class="leading-relaxed font-nunito tracking-wide">
          A complete reatsaurant management system built for a client, the
          requirements kept changing and went from a shopify template to a full
          blown toast like system, interestingly Tailwind was the only tech that
          kept upu with the changing requirements
        </p>
      </div>
    </div>
    <h2 id="my-journey" class="text-main-200 text-lg font-ibm">My journey</h2>
    <p class="leading-relaxed font-nunito tracking-wide">
      My journey, like all the great ones, starts with the movies. As a kid, I
      was totally into those hacker movies and decided at 15 that I was going to
      learn how to hack. It didn't take long to figure out that movies stretched
      the truth, but by then, I was already hooked on programming.
    </p>
    <p class="leading-relaxed font-nunito tracking-wide">
      My journey into the world of programming began as a curiosity-driven
      adventure, and it has since evolved into a full-blown passion. I've always
      been drawn to the endless possibilities that coding offers, and I've had
      the privilege of working on a diverse range of projects that have
      challenged me and allowed me to grow both personally and professionally.
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
    <h2 id="my-abilities" class="text-main-200 text-lg font-ibm">My skills</h2>
    <p class="leading-relaxed font-nunito tracking-wide"></p>
    <p class="leading-relaxed font-nunito tracking-wide">
      When I first looked at the previous tasks for this role, my initial
      thought was that I am not good enought to do this job, I don't have
      sufficient experience with parts of the stack and I haven't worked much on
      tooling, However I remembered that I had the same feeling at some of my
      previous jobs and those were the ones where I was able to make the bigegst
      impact in teh shortest time, I find that I work better in unkown territory
      ebcause it forces me to not become complacent and to keep learning
    </p>
    <p class="leading-relaxed font-nunito tracking-wide">
      My experience has spanned the entire web spectrum, including database
      management, frontend development, and complex backend projects. While I
      have a stronger preference for, and greater proficiency in, backend
      development—which closely aligns with tooling and working directly on
      Tailwind—I also find joy in frontend projects that present creative and
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
    <!-- team experience -->
    <h2 id="team-experience" class="text-main-200 text-lg font-ibm">
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
      My subsequent role was with a startup named <a
        href="https://www.triplewhale.com/">Triple whale</a
      >, where I was tasked with contributing to the development of a financial
      analytics platform. Joining the team in the early stages of the product, I
      played a part in some of the foundational decisions.
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
    <h2 id="freelance-experience" class="text-main-200 text-lg font-ibm">
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
        <span class="font-semibold"
          >An Invitations Platform with a Custom Image Editor:</span
        > This project was particularly memorable because of the unique challenge
        it presented in integrating a user-friendly yet powerful image editing tool
        within the platform.
      </li>
      <li class="leading-relaxed font-nunito tracking-wide">
        <span class="font-semibold"
          >A Portfolio Website for a Local Photographer:</span
        > This task was both challenging and exhilarating, as the client had very
        specific design and style preferences for their website. Striving for pixel-perfect
        design and adhering closely to Figma designs taught me a great deal about
        meticulous attention to detail in web design.
      </li>
      <li class="leading-relaxed mt-2 font-nunito tracking-wide">
        <span class="font-semibold"
          >Various Automations and Solutions for Businesses:</span
        > These projects were invaluable in teaching me about building scalable solutions
        and collaborating closely with stakeholders to precisely define project requirements.
      </li>
    </ul>
    <!-- why tailwind labs -->
    <h2 id="why-tailwind-labs" class="text-main-200 text-lg font-ibm">
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
    <h2 id="why-me" class="text-main-200 text-lg font-ibm">Why me?</h2>
    <p class="leading-relaxed font-nunito tracking-wide">
      I am a motivated developer with a passion for learning and growing, I
      believe my experience and speed of learning will help me contribute to the
      success of tailwind and future projects
    </p>
    <!-- the future -->
    <h2 id="the-future" class="text-main-200 text-lg font-ibm">
      The future...
    </h2>
    <p class="leading-relaxed font-nunito tracking-wide">
      The evolving landscape of frontend development excites me, particularly
      the strategic shifts Tailwind is making—moving away from JavaScript-based
      configuration and runtime. This pivot promises to broaden Tailwind's
      applicability, enabling its integration into a variety of frameworks
      without the necessity of initiating a Vite project. My enthusiasm extends
      beyond merely contributing to such a pioneering product; I foresee
      opportunities for expansion beyond typical frontend territories.
    </p>
    <p class="leading-relaxed font-nunito tracking-wide">
      I envision creating adapters for frameworks like Django, which would
      incorporate the Tailwind compiler within their development and build
      scripts. This adaptation would streamline the process, making Tailwind
      more accessible to a wider range of developers.
    </p>
    <p class="leading-relaxed font-nunito tracking-wide">
      I also see the potential for a more robust ecosystem, extending headlessui
      to include frameworks like svelte and even vanilla JS components which
      will make tailwindui/catalyst easier for more developers to use.
    </p>
    <p class="leading-relaxed font-nunito tracking-wide">
      Beyond viewing Tailwind as merely a CSS framework, I believe there are
      opportunities to enhance the overall developer experience for frontend
      teams. The control over generated CSS that Tailwind offers opens up
      exciting possibilities for testing utilities. These could prove to be
      transformative, especially for larger teams, by facilitating more
      efficient and effective testing of UI specific tasks. My aim is to explore
      these avenues, contributing to the innovation and expansion of Tailwind's
      capabilities.
    </p>
  </div>
</div>
