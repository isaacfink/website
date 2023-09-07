<script lang="ts">
  import Item from "./Item.svelte";

  import FastApiMono from "./icons/mono/Fastapi.svelte";
  import JavascriptMono from "./icons/mono/Javascript.svelte";
  import ReactMono from "./icons/mono/React.svelte";
  import svelteMono from "./icons/mono/Svelte.svelte";
  import PostgresqlMono from "./icons/mono/Postgresql.svelte";
  import NginxMono from "./icons/mono/Nginx.svelte";
  import TypescriptMono from "./icons/mono/Typescript.svelte";
  import TailwindcssMono from "./icons/mono/Tailwindcss.svelte";
  import NestjsMono from "./icons/mono/Nestjs.svelte";
  import PythonMono from "./icons/mono/Python.svelte";
  import DjangoMono from "./icons/mono/Django.svelte";
  import SupabaseMono from "./icons/mono/Supabase.svelte";
  import MongoMono from "./icons/mono/Mongo.svelte";
  import FirebaseMono from "./icons/mono/Firebase.svelte";
  import DockerMono from "./icons/mono/Docker.svelte";
  import PhpMono from "./icons/mono/Php.svelte";
  import LaravelMono from "./icons/mono/Laravel.svelte";
  import ViteMono from "./icons/mono/Vite.svelte";

  import FastApi from "./icons/regular/Fastapi.svelte";
  import Javascript from "./icons/regular/Javascript.svelte";
  import React from "./icons/regular/React.svelte";
  import svelte from "./icons/regular/Svelte.svelte";
  import Postgresql from "./icons/regular/Postgresql.svelte";
  import Nginx from "./icons/regular/Nginx.svelte";
  import Typescript from "./icons/regular/Typescript.svelte";
  import Tailwindcss from "./icons/regular/Tailwindcss.svelte";
  import Nestjs from "./icons/regular/Nestjs.svelte";
  import Python from "./icons/regular/Python.svelte";
  import Django from "./icons/regular/Django.svelte";
  import Supabase from "./icons/regular/Supabase.svelte";
  import Mongo from "./icons/regular/Mongo.svelte";
  import Firebase from "./icons/regular/Firebase.svelte";
  import Docker from "./icons/regular/Docker.svelte";
  import Php from "./icons/regular/Php.svelte";
  import Laravel from "./icons/regular/Laravel.svelte";
  import Vite from "./icons/regular/Vite.svelte";
  import { flip } from "svelte/animate";

  const items = [
    {
      logo: Python,
      mono: PythonMono,
      title: "Python",
      description:
        "One of the most popular general purpose programming languages used primarily for data science but also in many other industries",
      baseColor:
        "linear-gradient(90deg, rgba(56,126,184,1) 0%, rgba(255,224,82,1) 100%)",
    },
    {
      logo: Javascript,
      mono: JavascriptMono,
      title: "JavaScript",
      description:
        "Consistently ranked as one of the most used languages JavaScript is the main langauge powering the modern web as well as mobile applications",
      baseColor: "#F0DB4F",
    },
    {
      logo: Typescript,
      mono: TypescriptMono,
      title: "TypeScript",
      description:
        "A superset of JavaScript that adds static typing to the language. TypeScript is used to build large scale applications with type safety in mind",
      baseColor: "#007ACC",
    },
    {
      logo: Php,
      mono: PhpMono,
      title: "PHP",
      description:
        "A popular general-purpose scripting language that is especially suited to web development, PHP powers 80% of the web and is a popular choice for web development despite it's age",
      baseColor: "#777BB3",
    },
    {
      logo: Tailwindcss,
      mono: TailwindcssMono,
      title: "Tailwind CSS",
      description:
        "A utility-first CSS framework that allows you to build custom designs without leaving your HTML, Tailwind became very popular in recent years for it's flexibility and usefulness for creating design systems",
      baseColor:
        "linear-gradient(90deg, rgba(34,152,189,1) 0%, rgba(14,215,181,1) 100%)",
    },
    {
      logo: Nestjs,
      mono: NestjsMono,
      title: "NestJS",
      description:
        "A feature rich Node.js framework for building efficient, reliable and scalable server-side applications, NestJS uses the dependency injection pattern and is often used in enterprise applications",
      baseColor: "#E0234E",
    },
    {
      logo: Django,
      mono: DjangoMono,
      title: "Django",
      description:
        "A high-level Python Web framework that encourages rapid development and clean, pragmatic design, Django is easy to start with and has a great ecosystem of packages and libraries to extend the funcitonality",
      baseColor: "#2BA977",
    },
    {
      logo: Laravel,
      mono: LaravelMono,
      title: "Laravel",
      description:
        "A feature rich PHP framework for complex web development, Laravel supports regular web pages as well as APIs GraphQL and web socket communication, Laravel also has great support for modern JavaScript frontend frameworks",
      baseColor: "#FF2D20",
    },
    {
      logo: FastApi,
      mono: FastApiMono,
      title: "FastAPI",
      description:
        "A modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints",
      baseColor: "#05998B",
    },
    {
      logo: React,
      mono: ReactMono,
      title: "React",
      description:
        "The OG of Javascript frontend frameworks React is the most popular and most used framework for building modern interactive web applications",
      baseColor: "#61DAFB",
    },
    {
      logo: svelte,
      mono: svelteMono,
      title: "Svelte",
      description:
        "A newer approach to building web applications, powered by a compiler svelte has the flexibility to do things in a simpler and more efficient way than other frameworks",
      baseColor: "#FF3E00",
    },
    {
      logo: Vite,
      mono: ViteMono,
      title: "Vite",
      description:
        "The fastest build tool for JavaScript frontend applications, Vite powers some of the worlds best frontend frameworks like SvelteKit",
      baseColor:
        "linear-gradient(90deg, rgba(65,209,255,1) 0%, rgba(255,234,131,1) 50%, rgba(189,52,254,1) 100%)",
    },
    {
      logo: Postgresql,
      mono: PostgresqlMono,
      title: "PostgreSQL",
      description:
        "A powerful, open source object-relational database system with a strong reputation for reliability, feature robustness, and performance",
      baseColor: "#336791",
    },
    {
      logo: Mongo,
      mono: MongoMono,
      title: "MongoDB",
      description:
        "A general purpose, NoSQL Database, document oriented and is used for faster writes and/or denormalized data, MonogoDB became very popular among startups and otehr fast moving teams",
      baseColor: "#00ED64",
    },
    {
      logo: Nginx,
      mono: NginxMono,
      title: "Nginx",
      description:
        "A web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache, Nginx is mostly used for high availability and high demand web applications to manage traffic and load balance between multiple servers",
      baseColor: "#009900",
    },
    {
      logo: Docker,
      mono: DockerMono,
      title: "Docker",
      description:
        "A tool designed to make it easier to create, deploy, and run applications by using containers abstracting the underlying infrastructure so applications work as expected on every platform",
      baseColor: "#1D63ED",
    },
    {
      logo: Firebase,
      mono: FirebaseMono,
      title: "Firebase",
      description:
        "A backend as a service platform that provides managed services like databases, realtime, auth and serverless functions",
      baseColor: "#FCCA3F",
    },
    {
      logo: Supabase,
      mono: SupabaseMono,
      title: "Supabase",
      description:
        "An open source Firebase alternative. Supabase adds realtime and RESTful APIs as well as file storage and user management based on a postgres database and can be self hosted too",
      baseColor: "#3ECF8E",
    },
  ];

  let activeIndex: number | null = null;
</script>

<div
  class="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8 grid-flow-dense transition-all duration-1000 max-w-3xl mx-auto"
>
  {#each items as item, index (index)}
    {@const isActive = index === activeIndex}
    <button
      animate:flip={{ duration: 100 }}
      on:click={() => {
        activeIndex == index ? (activeIndex = null) : (activeIndex = index);
      }}
      class:active={isActive}
      class="py-8 px-5 bg-main-800 hover:bg-main-800/75 transition-colors rounded-md group relative flex flex-col overflow-hidden"
    >
      <div
        class="flex w-full {isActive
          ? 'justify-between items-center'
          : 'justify-center items-center'}"
      >
        <div
          class="h-12 w-12 flex items-center justify-center shrink-0 {isActive &&
            'animate-scale'}"
        >
          {#if isActive}
            <svelte:component this={item.logo} />
          {:else}
            <svelte:component this={item.mono} />
          {/if}
        </div>
        {#if isActive}
          <h3
            class="text-main-300 text-3xl text-right md:text-center w-full flex-grow animate-up opacity-0 font-mono"
            style="--anim-delay:0.1s"
          >
            {item.title}
          </h3>
          <div class="w-12 shrink-0 hidden md:block" />
        {/if}
      </div>
      {#if isActive}
        <p
          class="text-main-400 mt-5 animate-up opacity-0 text-left md:text-center w-full text-wrap-balance"
          style="--anim-delay:0.3s; --anim-duration:0.2s"
        >
          {item.description}
        </p>
      {/if}

      {#if isActive}
        <div class="absolute right-5 inset-y-5 opacity-20">
          <svelte:component this={item.mono} />
        </div>
        <div
          class="absolute -bottom-[22rem] left-1/2 -translate-x-1/2 w-[46rem] h-96 rounded-[50%] blur-3xl bg-base-color animate-light outline outline-white"
          style={`--base-color: ${item.baseColor}`}
        />
      {/if}
    </button>
    <!-- <Item
      isActive={activeIndex === index}
      logo={item.logo}
      monoLogo={item.mono}
      title={item.title}
      description={item.description}
      on:click={() =>
        activeIndex == index ? (activeIndex = null) : (activeIndex = index)}
    /> -->
  {/each}
</div>

<style>
  .active {
    grid-column: auto / span 2;
    grid-row: auto / span 2;
  }

  .animate-up {
    animation: up var(--anim-duration, 0.36s) ease-in-out forwards;
    animation-delay: var(--anim-delay);
  }

  .bg-base-color {
    background: var(--base-color);
    opacity: 0.1;
  }

  @keyframes up {
    0% {
      transform: translateY(1rem);
      opacity: 0%;
    }
    100% {
      transform: translateY(0);
      opacity: 100%;
    }
  }

  .animate-scale {
    animation: scale 0.2s ease-in-out forwards;
    animation-delay: 100;
  }
  @keyframes scale {
    0% {
      transform: scale(0.8);
      opacity: 0%;
    }
    100% {
      transform: scale(1);
      opacity: 100%;
    }
  }
</style>
