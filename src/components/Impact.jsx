import React from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Container, SectionTitle, StatCard } from './UI';

const Impact = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const shouldReduceMotion = useReducedMotion();

  const whatWeDo = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M6 14h20v10a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V14z"
            stroke="var(--accent)"
            strokeWidth="2"
          />
          <path
            d="M10 14V10a6 6 0 0 1 12 0v4"
            stroke="var(--accent)"
            strokeWidth="2"
          />
          <path d="M12 22h8" stroke="var(--accent)" strokeWidth="2" />
        </svg>
      ),
      value: 'Iftarë',
      label: 'Organizojmë iftarë gjatë Ramazanit për familje dhe komunitetin.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M8 12h16v14a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V12z"
            stroke="var(--accent)"
            strokeWidth="2"
          />
          <path d="M12 12V8h8v4" stroke="var(--accent)" strokeWidth="2" />
          <path d="M12 18h8" stroke="var(--accent)" strokeWidth="2" />
          <path d="M12 22h6" stroke="var(--accent)" strokeWidth="2" />
        </svg>
      ),
      value: 'Paketa',
      label: 'Shpërndajmë pako ushqimore dhe higjienike për familjet në nevojë.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 3l10 6v7c0 7-4.6 12.8-10 13.9C10.6 28.8 6 23 6 16V9l10-6z"
            stroke="var(--accent)"
            strokeWidth="2"
          />
          <path d="M16 10v10" stroke="var(--accent)" strokeWidth="2" />
          <path d="M11 15h10" stroke="var(--accent)" strokeWidth="2" />
        </svg>
      ),
      value: 'Emergjencë',
      label: 'Reagojmë shpejt me ndihmë urgjente kur një familje mbetet pa mundësi.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 28s10-6 10-14a6 6 0 0 0-10-4 6 6 0 0 0-10 4c0 8 10 14 10 14z"
            stroke="var(--accent)"
            strokeWidth="2"
          />
          <path
            d="M12.5 16.5l2.3 2.3 4.7-5.3"
            stroke="var(--accent)"
            strokeWidth="2"
          />
        </svg>
      ),
      value: 'Mbështetje',
      label: 'Ndihmojmë jetimët, të moshuarit dhe familjet e rrezikuara me kujdes të vazhdueshëm.',
    },
  ];

  return (
    <section className="impact" ref={ref} id="impact">
      <Container>
        <motion.div
          className="impact__header"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle align="center">Çfarë bëjmë si organizatë</SectionTitle>

          <p className="impact__subtitle">
            Ne punojmë me zemër dhe me transparencë — çdo kontribut kthehet në ndihmë reale për njerëzit.
          </p>

          {/* Small intro text BEFORE cards */}
          <p
            style={{
              maxWidth: 820,
              margin: '0 auto',
              marginTop: 'var(--space-md)',
              textAlign: 'center',
              color: 'var(--muted)',
              lineHeight: 1.7,
            }}
          >
            Aktivitetet tona fokusohen në ndihmë direkte: iftarë në Ramazan, pako ushqimore/higjienike,
            reagim në raste emergjente dhe mbështetje të vazhdueshme për jetimë, të moshuar dhe familje
            në vështirësi. Qëllimi ynë është i thjeshtë: të sjellim dritë aty ku mungon.
          </p>
        </motion.div>

        <div className="impact__grid">
          {whatWeDo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <StatCard {...item} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Impact;
