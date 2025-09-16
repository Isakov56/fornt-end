import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Menu, X, Code, ChevronDown } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'
import './Header.css'

const Header = () => {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: t('header.nav.home'), href: '#home' },
    { label: t('header.nav.curriculum'), href: '#curriculum' },
    { label: t('header.nav.features'), href: '#features' },
    { label: t('header.nav.contact'), href: '#contact' }
  ]

  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Code className="logo-icon" />
            <span className="logo-text">{t('header.logo')}</span>
          </div>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="nav-link"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <div className="header-actions">
            <LanguageSwitcher />

            <motion.a
              href="#enrollment"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('header.enrollButton')}
            </motion.a>

            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header