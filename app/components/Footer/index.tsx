import LinkButton from "../LinkButtons";

export default function Footer() {
  return (
    <footer className="w-full text-amber-950 bg-amber-100 p-8 flex justify-between">
      {/* Left side */}
      <div className="flex font-bold p-4 text-center">
        🎲 DungeonTrack {new Date().getFullYear()}
      </div>

      {/* Right side */}
      <div className="flex gap-4 p-4">
        <LinkButton
          href="https://github.com/brunomachadors/dungeontrack"
          text="Github"
          external
        ></LinkButton>
        <LinkButton
          href="/Documentation"
          text="Documentation"
        ></LinkButton>

        <LinkButton
          href="/Contact"
          text="Contact"
        ></LinkButton>
      </div>
    </footer>
  );
}
