<script>
  export let name;
  export let id;
  export let activeStep;
</script>

<a
  href="#{id}"
  class="py-2 px-3 border-l-2 flex items-center gap-x-2 {activeStep === id
    ? 'border-primary-300 text-slate-100'
    : 'border-slate-500 text-slate-500'}"
>
  <slot />
  {name}</a
>
