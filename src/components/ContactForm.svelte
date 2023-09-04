<script lang="ts">
  let formEl: HTMLFormElement;

  let loading = false;
  let message = "";

  async function handleSubmit() {
    loading = true;

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: new FormData(formEl),
    });

    if (res.ok) {
      loading = false;
      message = "Thanks for reaching out, we will get back to you soon.";
      formEl.reset();
    } else {
      loading = false;
      message = "Something went wrong, please try again later.";
    }
  }
</script>

<div class="px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12">
  <h3 class="text-lg font-medium text-zinc-200">Send me a message</h3>
  <form
    on:submit|preventDefault={handleSubmit}
    bind:this={formEl}
    action="#"
    method="POST"
    class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
  >
    <input
      type="hidden"
      name="access_key"
      value="5bd044ff-f2c0-4fe4-baac-68b4b4c40c64"
    />
    <div>
      <label for="first-name" class="block text-sm font-medium text-zinc-300"
        >First name</label
      >
      <div class="mt-1">
        <input
          required
          type="text"
          name="first-name"
          id="first-name"
          autocomplete="given-name"
          class="block w-full rounded-md border border-zinc-300 px-4 py-3 text-zinc-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 bg-transparent"
        />
      </div>
    </div>
    <div>
      <label for="last-name" class="block text-sm font-medium text-zinc-300"
        >Last name</label
      >
      <div class="mt-1">
        <input
          required
          type="text"
          name="last-name"
          id="last-name"
          autocomplete="family-name"
          class="block w-full rounded-md border border-zinc-300 px-4 py-3 text-zinc-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 bg-transparent"
        />
      </div>
    </div>
    <div>
      <label for="email" class="block text-sm font-medium text-zinc-300"
        >Email</label
      >
      <div class="mt-1">
        <input
          required
          id="email"
          name="email"
          type="email"
          autocomplete="email"
          class="block w-full rounded-md border border-zinc-300 px-4 py-3 text-zinc-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 bg-transparent"
        />
      </div>
    </div>
    <div>
      <div class="flex justify-between">
        <label for="phone" class="block text-sm font-medium text-zinc-300"
          >Phone</label
        >
        <span id="phone-optional" class="text-sm text-zinc-500">Optional</span>
      </div>
      <div class="mt-1">
        <input
          type="text"
          name="phone"
          id="phone"
          autocomplete="tel"
          class="block w-full rounded-md border border-zinc-300 px-4 py-3 text-zinc-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 bg-transparent"
          aria-describedby="phone-optional"
        />
      </div>
    </div>
    <div class="sm:col-span-2">
      <label for="subject" class="block text-sm font-medium text-zinc-300"
        >Subject</label
      >
      <div class="mt-1">
        <input
          required
          type="text"
          name="subject"
          id="subject"
          class="block w-full rounded-md border border-zinc-300 px-4 py-3 text-zinc-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 bg-transparent"
        />
      </div>
    </div>
    <div class="sm:col-span-2">
      <div class="flex justify-between">
        <label for="message" class="block text-sm font-medium text-zinc-300"
          >Message</label
        >
        <span id="message-max" class="text-sm text-zinc-500"
          >Max. 500 characters</span
        >
      </div>
      <div class="mt-1">
        <textarea
          required
          id="message"
          name="message"
          rows="4"
          class="block w-full rounded-md border border-zinc-300 px-4 py-3 text-zinc-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 bg-transparent"
          aria-describedby="message-max"
        />
      </div>
    </div>
    <div class="sm:col-span-2 flex items-center justify-between">
      <p class="text-zinc-200 font-light text-sm pr-12 text-left">{message}</p>
      <button
        disabled={loading}
        type="submit"
        class="mt-2 inline-flex disabled:opacity-50 disabled:cursor-not-allowed w-full items-center justify-center rounded-md border border-transparent bg-primary-500 px-3 py-2 text-sm font-medium text-zinc-100 shadow-sm hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:w-auto"
        >{loading ? "Submitting..." : "Submit"}</button
      >
    </div>
  </form>
</div>
