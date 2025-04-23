// pages/index.tsx
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>WanderSpots</title>
        <meta
          name="description"
          content="Discover hidden gems in your free time"
        />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-[#0F0F0F] text-[#E0E0E0] px-6">
        <h1
          className="text-[4rem] md:text-[6rem] font-bold mb-4"
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          WanderSpots
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-xl text-center">
          Discover hidden gems in your free time - no more FOMO, just delight.
        </p>

        <a
          href="#"
          className="px-8 py-4 bg-[#00FFF0] text-[#0F0F0F] font-semibold rounded-full text-lg
                     shadow-[0_0_10px_rgba(0,255,240,0.7)] hover:shadow-[0_0_20px_rgba(0,255,240,0.7)]
                     transition"
        >
          Get Started
        </a>

        <footer className="absolute bottom-4 text-sm text-[#777]">
          © 2025 WanderSpots. Coming soon.{" "}
          <a
            href="https://github.com/your-repo"
            className="underline hover:text-[#00FFF0]"
          >
            GitHub
          </a>
        </footer>
      </main>
    </>
  );
}
