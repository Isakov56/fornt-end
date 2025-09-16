import { motion } from 'framer-motion'
import {
  Code,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp,
  ExternalLink
} from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    program: [
      { label: 'Curriculum', href: '#curriculum' },
      { label: 'Instructors', href: '#instructors' },
      { label: 'Student Projects', href: '#projects' },
      { label: 'Success Stories', href: '#testimonials' },
      { label: 'FAQs', href: '#faq' }
    ],
    resources: [
      { label: 'Blog', href: '/blog' },
      { label: 'Free Tutorials', href: '/tutorials' },
      { label: 'Code Challenges', href: '/challenges' },
      { label: 'Study Groups', href: '/study-groups' },
      { label: 'Career Resources', href: '/career' }
    ],
    support: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'Technical Support', href: '/support' },
      { label: 'Admissions', href: '/admissions' },
      { label: 'Financial Aid', href: '/financial-aid' },
      { label: 'Accessibility', href: '/accessibility' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Refund Policy', href: '/refund' },
      { label: 'Code of Conduct', href: '/conduct' }
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/codepath', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/codepath', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/codepath', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/codepath', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com/codepath', label: 'YouTube' }
  ]

  const contactInfo = {
    email: 'hello@codepath.dev',
    phone: '+1 (555) 123-4567',
    address: '123 Tech Street, San Francisco, CA 94105'
  }

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-main"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="footer-brand">
              <div className="footer-logo">
                <Code className="logo-icon" />
                <span className="logo-text">CodePath</span>
              </div>
              <p className="footer-description">
                Empowering the next generation of frontend developers through
                comprehensive education, mentorship, and hands-on experience.
                Join thousands of students who have transformed their careers.
              </p>
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="footer-links">
              <motion.div
                className="link-group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="link-title">Program</h4>
                <ul className="link-list">
                  {footerLinks.program.map((link, index) => (
                    <li key={link.label}>
                      <a href={link.href} className="footer-link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="link-group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="link-title">Resources</h4>
                <ul className="link-list">
                  {footerLinks.resources.map((link, index) => (
                    <li key={link.label}>
                      <a href={link.href} className="footer-link">
                        {link.label}
                        <ExternalLink className="external-icon" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="link-group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="link-title">Support</h4>
                <ul className="link-list">
                  {footerLinks.support.map((link, index) => (
                    <li key={link.label}>
                      <a href={link.href} className="footer-link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="link-group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="link-title">Contact</h4>
                <div className="contact-info">
                  <div className="contact-item">
                    <Mail className="contact-icon" />
                    <a href={`mailto:${contactInfo.email}`} className="contact-link">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="contact-item">
                    <Phone className="contact-icon" />
                    <a href={`tel:${contactInfo.phone}`} className="contact-link">
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="contact-item">
                    <MapPin className="contact-icon" />
                    <span className="contact-text">{contactInfo.address}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="footer-bottom"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="footer-legal">
              <p className="copyright">
                © 2024 CodePath. All rights reserved.
              </p>
              <div className="legal-links">
                {footerLinks.legal.map((link, index) => (
                  <a key={link.label} href={link.href} className="legal-link">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <motion.button
              className="scroll-top"
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to top"
            >
              <ArrowUp />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer