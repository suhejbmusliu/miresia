import React from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Container, SectionTitle, Button } from './UI';

const Contact = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="contact" id="contact" ref={ref}>
      <Container>
        <motion.div
          className="contact__grid"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          transition={{ duration: 0.8 }}
        >

          {/* LEFT SIDE - Quote */}
          <div className="contact__left">
            <SectionTitle>
              Na Kontaktoni
            </SectionTitle>

            <p className="contact__text">
              “Më i dashuri prej njerëzve tek Allahu është ai që është më i dobishëm për njerëzit.”
            </p>

            <p className="contact__subtext">
              Nëse dëshironi të dhuroni, të bëheni vullnetar ose të bashkëpunoni
              me ne, jemi gjithmonë të hapur për komunikim.
            </p>

            <Button variant="accent" size="large">
              Dërgo Mesazh
            </Button>
          </div>

          {/* RIGHT SIDE - Contact Info */}
          <div className="contact__right">
            <div className="contact__card">
              <div className="contact__item">
                <strong>📍 Adresa</strong>
                <p>Shkup / Maqedoni</p>
              </div>

              <div className="contact__item">
                <strong>📞 Telefoni</strong>
                <p>+389 72 605 665 <br /> +389 71 782 301</p>
              </div>

              <div className="contact__item">
                <strong>📧 Email</strong>
                <p>amar.ismailii@icloud.com</p>
              </div>

              <div className="contact__item">
                <strong>🕊️ DONATO PERMES IBAN</strong>
                <p>MK07270700120113109</p>
              </div>
            </div>
          </div>

        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
