<div class="w-full flex justify-center mb-12">
  <div
    class="w-90 h-24 px-4 py-3 bg-[#fff] rounded-xl border border-[#A96F61] justify-start items-center gap-4 inline-flex"
  >
    <div class="w-40 text-red-900 text-sm font-normal font-['Quicksand']">
      Tell us what you feel, we would love to hear your feedback.
    </div>
    <div class="justify-start items-start gap-5 flex">
      <a
        href="https://forms.gle/uvhEmdenU4QY58u17"
        target="_blank"
        on:click={() => {
          window.mixpanel.track("Feedback CTA Click");
        }}
      >
        <div
          class="h-9 px-3 py-2.5 bg-[#A96F61] text-white rounded-lg justify-center items-center gap-1.5 flex pointer"
        >
          <div class="text-[#fff] text-sm font-medium font-['Quicksand']">
            Give Feedback
          </div>
        </div>
      </a>
    </div>
  </div>
</div>
