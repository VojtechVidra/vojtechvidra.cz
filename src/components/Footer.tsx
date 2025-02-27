export const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="max-w-[520px] m-auto px-6 py-8 border-t-2 border-neutral-backgroundSubtle">
        <ul>
          <li>
            <a
              href="https://github.com/VojtechVidra"
              target="_blank"
              rel="noreferrer"
              className="text-label text-neutral-textSubtle p-2 inline-block hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/vojt%C4%9Bch-vidra-4b474a10b"
              target="_blank"
              rel="noreferrer"
              className="text-label text-neutral-textSubtle p-2 inline-block hover:underline"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
