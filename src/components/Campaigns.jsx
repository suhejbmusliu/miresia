import React from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Container, SectionTitle, Button } from './UI';

const Campaigns = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const shouldReduceMotion = useReducedMotion();

  const waysToHelp = [
    {
      icon: "🤝",
      title: "Bëhu Vullnetar",
      description:
        "Bashkohu me ekipin tonë për shpërndarjen e pakove dhe organizimin e aktiviteteve humanitare.",
    },
    {
      icon: "🌙",
      title: "Sponsorizo Iftar",
      description:
        "Ndihmo në organizimin e iftarëve gjatë Ramazanit për familjet në nevojë.",
    },
    {
      icon: "📦",
      title: "Dhuro Pako Ushqimore",
      description:
        "Kontribuo me produkte ushqimore ose financiare për të përgatitur pako për familjet.",
    },
    {
      icon: "💚",
      title: "Mbështetje Mujore",
      description:
        "Bëhu donator i rregullt dhe ndihmo në vazhdimësinë e projekteve tona.",
    },
  ];

  return (
    <section className="campaigns" id="campaigns" ref={ref}>
      <Container>
        <motion.div
          className="campaigns__header"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle align="center">
            Si Mund të Ndihmoni
          </SectionTitle>

          <p className="campaigns__subtitle">
            Edhe një veprim i vogël mund të bëjë ndryshim të madh në jetën e dikujt.
          </p>
        </motion.div>

        <div className="campaigns__grid">
          {waysToHelp.map((item, index) => (
            <motion.div
              key={index}
              className="help-card"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            >
              <div className="help-card__icon">{item.icon}</div>
              <h3 className="help-card__title">{item.title}</h3>
              <p className="help-card__description">{item.description}</p>

            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Campaigns;
