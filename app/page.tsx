const games = [
  {
    number: "01",
    title: "ORBITAL CHECKPOINT",
    type: "SCI-FI BORDER CONTROL SIM",
    status: "RELEASE · AUG 27, 2026",
    copy: "Inspect alien documents, scan suspicious luggage, uncover contraband, and keep station GSA-42 running — one shift at a time.",
    className: "game-orbital",
    href: "https://store.steampowered.com/app/3594540/Orbital_Checkpoint/",
    cta: "WISHLIST ON STEAM",
    visual: (
      <img src="/games/orbital-checkpoint-key-art-v2.png" alt="Orbital Checkpoint key art showing an alien traveller presenting documents at an orbital inspection desk" />
    ),
  },
  {
    number: "02",
    title: "CRATEBREAKER: WASTELAND WORKSHOP",
    type: "IDLE CLICKER / STRATEGY",
    status: "RELEASE · NOV 16, 2026",
    copy: "Smash crates, salvage relics, automate a wasteland workshop, and turn a broken shelter into a machine built to survive.",
    className: "game-cratebreaker",
    href: "https://store.steampowered.com/app/4924680/Cratebreaker_Wasteland_Workshop/",
    cta: "WISHLIST ON STEAM",
    visual: (
      <img src="/games/cratebreaker-key-art-v2.png" alt="Cratebreaker Wasteland Workshop key art showing a survivor breaking open a glowing salvage crate" />
    ),
  },
  {
    number: "03",
    title: "FORMONS FARM",
    type: "COZY CREATURE-COLLECTING RPG",
    status: "DEMO READY · REVEAL SOON",
    copy: "Restore a forgotten homestead, befriend and train magical Formons, and put their unique abilities to work across farming, exploration, and turn-based battles.",
    className: "game-formons",
    href: "#contact",
    cta: "REVEAL INCOMING",
    visual: (
      <img src="/games/formons-farm.jpg" alt="Formons Farm key art showing magical creatures on a cozy farm at sunset" />
    ),
  },
  {
    number: "04",
    title: "MINISTRY OF APOCALYPSE PREPAREDNESS",
    type: "INCREMENTAL STRATEGY / DARK COMEDY",
    status: "IN DEVELOPMENT",
    copy: "Build bunkers, manage national crises, expand government departments, and make impossible decisions to keep the country prepared — at least on paper.",
    className: "game-ministry",
    href: "#contact",
    cta: "MORE SOON",
    visual: (
      <img src="/games/ministry-of-apocalypse-preparedness.png" alt="Ministry of Apocalypse Preparedness key art showing an underground government crisis room and strategic map" />
    ),
  },
  {
    number: "05",
    title: "PHARMA CORPORATION",
    type: "MANAGEMENT / INCREMENTAL STRATEGY",
    status: "IN DEVELOPMENT",
    copy: "Build a pharmaceutical empire from the ground up. Produce supplements, secure pharmacy contracts, develop new formulations, manage research and clinical trials, and expand into global markets.",
    className: "game-pharma",
    href: "#contact",
    cta: "MORE SOON",
    visual: (
      <img src="/games/pharma-corporation.jpg" alt="Pharma Corporation key art showing an automated pharmaceutical production line and global research facility" />
    ),
  },
  {
    number: "06",
    title: "BASTION-9",
    type: "SCI-FI BORDER INSPECTION / MORAL CHOICES",
    status: "IN DEVELOPMENT",
    copy: "Decide who enters the last shelter. Inspect documents, interrogate travelers, uncover mutants, smugglers, and synthetic infiltrators — then live with every consequence.",
    className: "game-bastion",
    href: "#contact",
    cta: "MORE SOON",
    visual: (
      <img src="/games/bastion-9-key-art-v2.png" alt="Bastion-9 key art showing a synthetic infiltrator being inspected at the last shelter checkpoint" />
    ),
  },
  {
    number: "07",
    title: "CLEAN CASH: SYNDICATE FRONT",
    type: "NEON-NOIR IDLE CLICKER",
    status: "IN DEVELOPMENT",
    copy: "Build a laundering empire in New Carthage. Run street operations, earn Dirty Cash, automate fronts, and scale the network while keeping Federal Heat under control.",
    className: "game-clean-cash",
    href: "#contact",
    cta: "MORE SOON",
    visual: (
      <img src="/games/clean-cash-key-art-v2.png" alt="Clean Cash Syndicate Front key art showing a neon-noir laundering operation as federal agents close in" />
    ),
  },
  {
    number: "08",
    title: "ALIEN INVASION INC.",
    type: "GLOBAL INVASION STRATEGY SIMULATOR",
    status: "IN DEVELOPMENT",
    copy: "Command an alien operation to destabilize Earth. Choose priority regions, evolve invasion methods, spread panic, infiltrate humanity, and enslave the planet before global defense is complete.",
    className: "game-alien-invasion",
    href: "#contact",
    cta: "MORE SOON",
    visual: (
      <img src="/games/alien-invasion-key-art-v2.png" alt="Alien Invasion Inc. key art showing alien strategists directing an invasion around a holographic Earth" />
    ),
  },
  {
    number: "09",
    title: "PARADISE CONTROL",
    type: "AIRPORT CUSTOMS INSPECTION GAME",
    status: "IN DEVELOPMENT",
    copy: "Run a chaotic customs checkpoint on a paradise island. Inspect passports, scan baggage, question suspicious travelers, and expose contraband networks before they reach Europe or the USA.",
    className: "game-paradise-control",
    href: "#contact",
    cta: "MORE SOON",
    visual: (
      <img src="/games/paradise-control-key-art-v2.png" alt="Paradise Control key art showing a chaotic luggage inspection at a tropical island airport" />
    ),
  },
  {
    number: "10",
    title: "WASTELAND COUNTER",
    type: "POST-APOCALYPTIC TRADING / MANAGEMENT",
    status: "IN DEVELOPMENT",
    copy: "Run the last trading counter in the wasteland. Bargain with dangerous strangers, collect rare relics, survive raids and moral dilemmas, and turn a rusted shack into the region’s most powerful trading post.",
    className: "game-wasteland-counter",
    href: "#contact",
    cta: "MORE SOON",
    visual: (
      <img src="/games/wasteland-counter.webp" alt="Wasteland Counter key art showing a dangerous trader offering rare relics across a post-apocalyptic counter" />
    ),
  },
];

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Vital Grid — back to top">
      <span className="logo-mark" aria-hidden="true"><i /><i /><i /><i /></span>
      <span>VITAL GRID</span>
    </a>
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <Logo />
        <nav aria-label="Main navigation">
          <a href="#games">GAMES</a>
          <a href="#studio">STUDIO</a>
          <a href="#contact">CONTACT</a>
        </nav>
        <a className="header-cta" href="#contact">LET&apos;S TALK <span>↗</span></a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-signal" aria-hidden="true">
          <span className="signal-ring signal-one" />
          <span className="signal-ring signal-two" />
          <span className="signal-ring signal-three" />
          <span className="signal-core" />
        </div>
        <div className="eyebrow"><span /> INDEPENDENT GAME STUDIO · POLAND</div>
        <h1 id="hero-title">WE BUILD<br />WORLDS WORTH<br /><em>GETTING LOST IN.</em></h1>
        <div className="hero-bottom">
          <p>We craft games with character —<br />from the first idea to the final pixel.</p>
          <a className="text-link" href="#games">EXPLORE OUR GAMES <span>↓</span></a>
        </div>
        <div className="scroll-note" aria-hidden="true">SCROLL TO DISCOVER</div>
      </section>

      <section className="games-section" id="games" aria-labelledby="games-title">
        <div className="section-kicker"><span>01</span><p>OUR GAMES</p></div>
        <div className="section-heading">
          <h2 id="games-title">EVERY GAME.<br /><em>A NEW PULSE.</em></h2>
          <p>We create distinctive experiences that stay with players long after the screen goes dark.</p>
        </div>

        <div className="games-list">
          {games.map((game) => (
            <article className={`game-card ${game.className}`} key={game.title}>
              <div className="game-image">
                {game.visual}
                <div className="game-number">/{game.number}</div>
                <div className="game-status"><span /> {game.status}</div>
              </div>
              <div className="game-copy">
                <div>
                  <p className="game-type">{game.type}</p>
                  <h3>{game.title}</h3>
                </div>
                <p>{game.copy}</p>
                <a
                  href={game.href}
                  target={game.href.startsWith("http") ? "_blank" : undefined}
                  rel={game.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={`${game.cta}: ${game.title}`}
                >{game.cta} <span>↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto" id="studio" aria-labelledby="manifesto-title">
        <div className="section-kicker light"><span>02</span><p>VITAL GRID</p></div>
        <div className="manifesto-copy">
          <p className="manifesto-label">SMALL TEAM / BIG ENERGY</p>
          <h2 id="manifesto-title">WE DON&apos;T MAKE GAMES<br />FOR EVERYONE.<br /><em>WE MAKE THEM FOR PLAYERS.</em></h2>
          <div className="manifesto-note">
            <span>+</span>
            <p>We&apos;re an independent studio from Poland. We combine bold design, powerful stories, and technology that lets us push one step further.</p>
          </div>
        </div>
        <div className="stats" aria-label="Studio facts">
          <div><strong>10</strong><span>TITLES<br />IN PRODUCTION</span></div>
          <div><strong>∞</strong><span>IDEAS<br />IN THE QUEUE</span></div>
          <div><strong>01</strong><span>SHARED<br />VISION</span></div>
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="contact-signal" aria-hidden="true"><span /><span /><span /></div>
        <p>GOT A PROJECT, AN IDEA, OR JUST WANT TO TALK?</p>
        <h2 id="contact-title">LET&apos;S GET<br />ON THE <em>SAME GRID.</em></h2>
        <a className="contact-link" href="mailto:victor@vitalgrid.com">VICTOR@VITALGRID.COM <span>↗</span></a>
      </section>

      <footer>
        <Logo />
        <p>© 2026 VITAL GRID. ALL RIGHTS RESERVED.</p>
        <div><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
