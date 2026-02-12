import React from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Container, Button } from './UI';

const CTA = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="cta" ref={ref}>
      <Container>
        <motion.div
          className="cta__card"
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
          transition={{ duration: 0.8 }}
        >
          <div className="cta__content">
            <motion.h2
              className="cta__title"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Jep për hir të Allahut,
              <br />
              dhe shumëfisho shpërblimin tënd
            </motion.h2>

            <motion.p
              className="cta__text"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Profeti ﷺ ka thënë: 
              <br />
              <em>
                “Sadakaja nuk e pakëson pasurinë.”
              </em>
              <br /><br />
              Çdo kontribut i juaji është sadaka, është mëshirë dhe është dritë
              për ata që kanë nevojë. Bashkohuni me ne për të sjellë shpresë
              në zemrat e familjeve në vështirësi.
            </motion.p>

            <motion.div
              className="cta__buttons"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button variant="accent" size="large">
                Dhuro Sadaka
              </Button>

              <Button variant="outline-light" size="large">
                Bëhu Vullnetar
              </Button>
            </motion.div>
          </div>

          <div className="cta__decoration"></div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTA;
