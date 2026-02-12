import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Button, Container } from './UI';

const Hero = () => {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, shouldReduceMotion ? 0 : 80]);

  return (
    <section className="hero" ref={containerRef} id="hero">
      <Container>
        <div className="hero__content">

          {/* LEFT SIDE */}
          <motion.div
            className="hero__text"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="hero__title"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Shoqata Humanitare <br />
              <span style={{ color: "var(--accent)" }}>
                Drita e Miresisë
              </span>
            </motion.h1>

            <motion.p
              className="hero__subtitle"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Çdo veprim i vogël i mirësisë krijon dritë në jetën e dikujt tjetër.
              Bashkë mund të ndërtojmë shpresë, dinjitet dhe një të ardhme më të mirë.
            </motion.p>

            <motion.blockquote
              style={{
                fontStyle: "italic",
                marginBottom: "var(--space-xl)",
                color: "var(--muted)",
                borderLeft: "3px solid var(--accent)",
                paddingLeft: "var(--space-md)"
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              “Mirësia është gjuha që të gjithë e kuptojnë.”
            </motion.blockquote>

            <motion.div
              className="hero__buttons"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button variant="accent" size="large">
                Dhuro Tani
              </Button>
              <Button variant="outline" size="large">
                Mëso më shumë
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            className="hero__media"
            style={{ y }}
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="hero__media-card">
              <img
                src="/heroimg.jpg" 
                alt="Humanitarian Support"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
              <div className="hero__media-gradient"></div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default Hero;
