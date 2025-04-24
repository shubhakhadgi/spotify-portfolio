import { Play } from "lucide-react";

// Section 1 – Greeting + Recently Played
const recentlyPlayed = [
  { title: "Lo-Fi Chill", image: "https://picsum.photos/300/300?random=1" },
  { title: "Jazz Nights", image: "https://picsum.photos/300/300?random=2" },
  { title: "Focus Flow", image: "https://picsum.photos/300/300?random=3" },
  {
    title: "Synthwave",
    image: "https://picsum.photos/300/300?random=4",
  },
  {
    title: "Code & Coffee",
    image: "https://picsum.photos/300/300?random=5",
  },
  { title: "Indie Pop", image: "https://picsum.photos/300/300?random=6" },
];

// Section 2 – Daily Mix
const dailyMix = [
  {
    title: "Daily Mix 1",
    subtitle: "Artist blend",
    image: "https://picsum.photos/400/400?random=7",
  },
  {
    title: "Daily Mix 2",
    subtitle: "Lo-fi beats",
    image: "https://picsum.photos/400/400?random=8",
  },
  {
    title: "Daily Mix 3",
    subtitle: "Chillhop",
    image: "https://picsum.photos/400/400?random=9",
  },
];

// Section 3 – Jump Back In (Horizontal scroll)
const jumpBack = [
  {
    title: "Evening Vibes",
    image: "https://picsum.photos/400/400?random=10",
  },
  {
    title: "Afrobeats",
    image: "https://picsum.photos/400/400?random=11",
  },
  {
    title: "Late Night Drive",
    image: "https://picsum.photos/400/400?random=12",
  },
];

// Section 4 – Top Artists (Circle cards)
const topArtists = [
  {
    name: "Arctic Monkeys",
    image: "https://picsum.photos/300/300?random=13",
  },
  {
    name: "Kendrick Lamar",
    image: "https://picsum.photos/300/300?random=14",
  },
  { name: "ODESZA", image: "https://picsum.photos/300/300?random=15" },
];

// Section 5 – Featured Album Banner
const featuredAlbum = {
  title: "Midnights",
  artist: "Taylor Swift",
  image: "https://picsum.photos/1600/400?random=16",
};

// Section 6 – New Releases
const newReleases = [
  { title: "New Wave", image: "https://picsum.photos/300/300?random=17" },
  { title: "Hype Trap", image: "https://picsum.photos/300/300?random=18" },
  { title: "Drill Heat", image: "https://picsum.photos/300/300?random=19" },
];

// Section 7 – Mood Playlists (emoji + titles)
const moods = [
  { title: "💤 Sleep", image: "https://picsum.photos/300/300?random=20" },
  { title: "🔥 Hype", image: "https://picsum.photos/300/300?random=21" },
  { title: "🎨 Art Flow", image: "https://picsum.photos/300/300?random=22" },
];

const Home = () => {
  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12
      ? "Good Morning"
      : currentHour < 18
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <main className="flex flex-col gap-12 px-6 py-8 overflow-y-auto">
      {/* SECTION: Greeting & Intro */}
      <section className="mb-8">
        <div className="flex items-center justify-between">
          {/* Left: Greeting text */}
          <div className="flex flex-col items-start">
            <h1 className="text-4xl text-white font-bold">{greeting}, User!</h1>
            <p className="text-white/80 mt-2 text-lg max-w-2xl">
              Welcome to your personalized music experience. Dive into a world
              of curated playlists, fresh releases, and mood-specific tracks
              tailored just for you. Whether you’re here to focus, unwind, or
              discover something new, we’ve got you covered.
            </p>
          </div>

          {/* Right: Circle Image (Larger size like Spotify) */}
          <div className="flex-shrink-0">
            <img
              src="https://picsum.photos/200/200?random=23"
              alt="User"
              className="w-36 h-36 object-cover rounded-full border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* SECTION: Recently Played */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Recently Played</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {recentlyPlayed.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 hover:bg-white/10 transition rounded-xl p-4"
            >
              <img
                src={item.image}
                className="w-full h-36 object-cover rounded mb-4"
                alt={item.title}
              />
              <p className="text-white font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: Daily Mix */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Your Daily Mix</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {dailyMix.map((mix, idx) => (
            <div
              key={idx}
              className="bg-white/5 hover:bg-white/10 transition rounded-xl p-4"
            >
              <img
                src={mix.image}
                alt={mix.title}
                className="w-full h-36 object-cover rounded mb-4"
              />
              <p className="text-white font-semibold">{mix.title}</p>
              <p className="text-white/60">{mix.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: Jump Back In (Horizontal scroll) */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Jump Back In</h2>
        <div className="flex gap-4 overflow-x-auto py-4">
          {jumpBack.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-48 bg-white/5 rounded-xl p-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-36 object-cover rounded mb-4"
              />
              <p className="text-white font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: Top Artists (Circle cards) */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Top Artists</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {topArtists.map((artist, idx) => (
            <div
              key={idx}
              className="bg-white/5 hover:bg-white/10 transition p-4 flex flex-col items-center"
            >
              {/* Ensure the image is a circle */}
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-white text-center">{artist.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: Featured Album Banner */}
      <section>
        <div className="relative bg-white/5 hover:bg-white/10 rounded-xl p-6">
          <img
            src={featuredAlbum.image}
            alt={featuredAlbum.title}
            className="absolute inset-0 w-full h-full object-cover opacity-20 rounded-xl"
          />
          <div className="relative z-10 text-center">
            <h2 className="text-3xl text-white font-bold">
              {featuredAlbum.title}
            </h2>
            <p className="text-white/60 text-lg">{featuredAlbum.artist}</p>
          </div>
        </div>
      </section>

      {/* SECTION: New Releases */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">New Releases</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {newReleases.map((release, idx) => (
            <div
              key={idx}
              className="bg-white/5 hover:bg-white/10 transition rounded-xl p-4"
            >
              <img
                src={release.image}
                alt={release.title}
                className="w-full h-36 object-cover rounded mb-4"
              />
              <p className="text-white font-semibold">{release.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: Mood Playlists */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Mood Playlists</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {moods.map((mood, idx) => (
            <div
              key={idx}
              className="bg-white/5 hover:bg-white/10 transition rounded-xl p-4"
            >
              <img
                src={mood.image}
                alt={mood.title}
                className="w-full h-36 object-cover rounded mb-4"
              />
              <p className="text-white text-center">{mood.title}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
