import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Globe, ChevronDown } from 'lucide-react'
import './LanguageSwitcher.css'

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' }
  ]

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0]

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode)
    setIsOpen(false)
  }

  return (
    <div className="language-switcher">
      <motion.button
        className="language-button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={t('language.switchLanguage')}
      >
        <Globe className="language-icon" />
        <span className="language-flag">{currentLanguage.flag}</span>
        <span className="language-text">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDown
          className={`chevron-icon ${isOpen ? 'chevron-open' : ''}`}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="language-dropdown"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {languages.map((language) => (
              <motion.button
                key={language.code}
                className={`language-option ${
                  language.code === i18n.language ? 'language-active' : ''
                }`}
                onClick={() => changeLanguage(language.code)}
                whileHover={{ backgroundColor: 'var(--color-primary-50)' }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="option-flag">{language.flag}</span>
                <span className="option-name">{language.name}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <div
          className="language-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}

export default LanguageSwitcher