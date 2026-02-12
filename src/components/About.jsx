import React from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Container, SectionTitle } from './UI';
import aboutImage from '../assets/aboutimg.jpg';

const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const shouldReduceMotion = useReducedMotion();

  const tags = [
    'Transparencë',
    'Ndihmë Emergjente',
    'Veprim Lokal',
    'E Udhëhequr nga Komuniteti'
  ];

  return (
    <section className="about" id="about" ref={ref}>
      <Container>
        <div className="about__grid">
          <motion.div
            className="about__image"
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: shouldReduceMotion ? 0 : -40 }}
            transition={{ duration: 0.8 }}
          >
            <div className="about__image-card">
              <img
                src={aboutImage}
                alt="Ndihmë për komunitetin"
                className="about__image-img"
              />
              <div className="about__image-gradient"></div>
            </div>
          </motion.div>

          <motion.div
            className="about__content"
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: shouldReduceMotion ? 0 : 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="about__label">Kush Jemi Ne</div>

            <SectionTitle>
              Të udhëhequr nga mirësia,
              <br />
              të frymëzuar nga humanizmi
            </SectionTitle>

            <p className="about__text">
              Shoqata Humanitare <strong>Drita e Miresisë</strong> beson se
              dhurimi nuk është vetëm ndihmë — është një akt solidariteti dhe
              përgjegjësie ndaj njëri-tjetrit. Ne angazhohemi që çdo kontribut
              të arrijë tek ata që kanë më shumë nevojë, me transparencë të plotë
              dhe menaxhim të përgjegjshëm.
            </p>

            <p className="about__text">
              Misioni ynë është të ofrojmë ndihmë thelbësore për familjet në
              vështirësi, të mbështesim fëmijët në nevojë dhe të fuqizojmë
              komunitetet lokale për të ndërtuar ndryshim të qëndrueshëm dhe
              afatgjatë.
            </p>

            <div className="about__tags">
              {tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  className="about__tag"
                  initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: shouldReduceMotion ? 1 : 0.8 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;
