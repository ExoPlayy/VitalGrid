const games = [
  {
    number: "01",
    title: "NEX//GRID",
    type: "TACTICAL ROGUELITE",
    status: "IN DEVELOPMENT",
    copy: "Build your crew. Take the network. Every decision shifts the balance of power.",
    className: "game-nex",
    visual: (
      <div className="nex-visual" aria-hidden="true">
        <div className="nex-orb" />
        <div className="nex-cross nex-cross-one">+</div>
        <div className="nex-cross nex-cross-two">+</div>
        <div className="nex-coordinate">X 34.12 / Y 88.04</div>
      </div>
    ),
  },
  {
    number: "02",
    title: "BLIGHT",
    type: "SURVIVAL HORROR",
    status: "COMING SOON",
    copy: "The city breathes after dark. You just need to make it until dawn.",
    className: "game-blight",
    visual: (
      <div className="blight-visual" aria-hidden="true">
        <div className="blight-moon" />
        <div className="blight-tower" />
        <div className="blight-fog blight-fog-one" />
        <div className="blight-fog blight-fog-two" />
      </div>
    ),
  },
  {
    number: "03",
    title: "AEROSTEP",
    type: "ARCADE PLATFORMER",
    status: "PLAYABLE PROTOTYPE",
    copy: "Climb higher. Break the rules of gravity. Never look back.",
    className: "game-aero",
    visual: (
      <div className="aero-visual" aria-hidden="true">
        <div className="aero-sun" />
        <div className="aero-platform aero-platform-one" />
        <div className="aero-platform aero-platform-two" />
        <div className="aero-runner">↗</div>
      </div>
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
                <a href="#contact" aria-label={`Ask about ${game.title}`}>DISCOVER THE GAME <span>↗</span></a>
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
          <div><strong>03</strong><span>TITLES<br />IN PRODUCTION</span></div>
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
