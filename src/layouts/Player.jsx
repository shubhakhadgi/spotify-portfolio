import React from "react";

const Player = () => {
  return (
    <section className="fixed bottom-0 left-0 w-full z-50 flex justify-between items-center px-24 py-3 bg-neutral-900">
      <article className="flex gap-3 items-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/5ddfaefcd9f744cea40eeb0f5b7e6dc8/1f73c9c9a0d361ed81800b5fe707c64342b03bec?placeholderIfAbsent=true"
          alt="Album cover"
          className="object-contain shrink-0 self-stretch my-auto w-14 aspect-square"
        />
        <div className="flex gap-7 items-center self-stretch my-auto">
          <div className="flex flex-col items-start self-stretch my-auto">
            <h2 className="text-sm text-white">Snooze</h2>
            <p className="mt-1 text-xs text-white">SZA</p>
          </div>
          <button aria-label="Like song">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/5ddfaefcd9f744cea40eeb0f5b7e6dc8/c3af12a10e162eabf81b7728ccb0102d5232bc3c?placeholderIfAbsent=true"
              alt="Like"
              className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[38px] w-[21px]"
            />
          </button>
        </div>
      </article>
      <div className="flex flex-col items-center max-w-[50%] flex-grow">
        <div className="flex gap-4 justify-center items-center">
          <button aria-label="Previous track">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/5ddfaefcd9f744cea40eeb0f5b7e6dc8/254eb5026d416a8af68abe97eb0ccc088735767e?placeholderIfAbsent=true"
              alt="Previous"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square rounded-[43px]"
            />
          </button>
          <button aria-label="Skip back">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/5ddfaefcd9f744cea40eeb0f5b7e6dc8/03f3faf51e389bfd3686eb9695c87caa71831f81?placeholderIfAbsent=true"
              alt="Skip back"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square rounded-[43px]"
            />
          </button>
          <button aria-label="Play/Pause">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/5ddfaefcd9f744cea40eeb0f5b7e6dc8/f245bd4cf8f34708fd6dd68f607ca7a89a965bdf?placeholderIfAbsent=true"
              alt="Play"
              className="object-contain shrink-0 self-stretch my-auto w-14 aspect-square rounded-[100px]"
            />
          </button>
          <button aria-label="Skip forward">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/5ddfaefcd9f744cea40eeb0f5b7e6dc8/fb120c30304383240903ac7ea558b2bc5d9e4bcb?placeholderIfAbsent=true"
              alt="Skip forward"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square rounded-[43px]"
            />
          </button>
          <button aria-label="Next track">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/5ddfaefcd9f744cea40eeb0f5b7e6dc8/33b09e142f5a79b183ecd56f0bb611b4f6c681b1?placeholderIfAbsent=true"
              alt="Next"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square rounded-[43px]"
            />
          </button>
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center max-md:max-w-full">
          <time className="self-stretch my-auto text-xs text-white">3:00</time>
          <div className="self-stretch my-auto min-w-60 rounded-[100px] w-[552px] max-md:max-w-full">
            <div className="flex flex-col items-start bg-white bg-opacity-30 rounded-[100px] max-md:pr-5 max-md:max-w-full">
              <div
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
                className="flex shrink-0 h-1 bg-zinc-300 rounded-[100px] max-md:max-w-full"
              />
            </div>
          </div>
          <time className="self-stretch my-auto text-xs text-white">3:22</time>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex gap-4 items-start self-stretch my-auto">
          <button aria-label="Lyrics">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/5ddfaefcd9f744cea40eeb0f5b7e6dc8/e4e3de70a300ad3233fc1ce104b827572cf640c7?placeholderIfAbsent=true"
              alt="Lyrics"
              className="object-contain shrink-0 w-6 aspect-square rounded-[43px]"
            />
          </button>
          <button aria-label="Queue">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/5ddfaefcd9f744cea40eeb0f5b7e6dc8/2cd7ab88169307d2ae8613a21704788136a96e3e?placeholderIfAbsent=true"
              alt="Queue"
              className="object-contain shrink-0 w-6 aspect-square rounded-[43px]"
            />
          </button>
          <button aria-label="Connect to device">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/5ddfaefcd9f744cea40eeb0f5b7e6dc8/f44c1e9ad8625322cf40bad6ee5d870245691034?placeholderIfAbsent=true"
              alt="Connect"
              className="object-contain shrink-0 w-6 aspect-square rounded-[43px]"
            />
          </button>
          <button aria-label="Volume">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/5ddfaefcd9f744cea40eeb0f5b7e6dc8/ac8151f8c8b7e0fbbfa3b7a81d11a0fc69eb474b?placeholderIfAbsent=true"
              alt="Volume"
              className="object-contain shrink-0 w-6 aspect-square rounded-[43px]"
            />
          </button>
        </div>
        <button aria-label="Expand view">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/5ddfaefcd9f744cea40eeb0f5b7e6dc8/ea6b1d841cf827117b1864f09e8c29eb6b1778ce?placeholderIfAbsent=true"
            alt="Expand"
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square rounded-[43px]"
          />
        </button>
      </div>
    </section>
  );
};

export default Player;
