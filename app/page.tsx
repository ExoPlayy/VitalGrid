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
      <img src="/games/orbital-checkpoint.jpg" alt="Orbital Checkpoint gameplay showing an alien traveller and a galactic passport at the inspection desk" />
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
      <img src="/games/cratebreaker.jpg" alt="Cratebreaker Wasteland Workshop gameplay showing the workshop, salvage crates, and inventory" />
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
          <div><strong>04</strong><span>TITLES<br />IN PRODUCTION</span></div>
          <div><strong>∞</strong><span>IDEAS<br />IN THE QUEUE</span></div>
          <div><strong>01</strong><span>SHARED<br />VISION</span></div>
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="contact-signal" aria-hidden="true"><span /><span /><span /></div>
        <p>GOT A PROJECT, AN IDEA, OR JUST WANT TO TALK?</p>
        <h2 id="contact-title">LET&apos;S GET<br />ON THE <em>SAME GRID.</em></h2>
        <a className="contact-link" href="mailto:hello@vitalgrid.games">HELLO@VITALGRID.GAMES <span>↗</span></a>
      </section>

      <footer>
        <Logo />
        <p>© 2026 VITAL GRID. ALL RIGHTS RESERVED.</p>
        <div><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
