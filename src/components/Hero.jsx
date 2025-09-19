import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Play, Star, Users, Clock, Trophy, Code } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const { t } = useTranslation()

  const stats = [
    { icon: Code, value: 'HTML to React', label: t('hero.courseDetails.techStack') },
    { icon: Clock, value: '192+ Hours', label: t('hero.courseDetails.content') },
    { icon: Trophy, value: 'Real Projects', label: t('hero.courseDetails.projects') }
  ]

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge">
              <Star className="badge-icon" />
              <span>{t('hero.badge')}</span>
            </div>

            <h1 className="hero-title">
              {t('hero.title')}
              <span className="hero-title-accent"> {t('hero.titleAccent')}</span>
            </h1>

            <p className="hero-description">
              {t('hero.description')}
            </p>

            <div className="hero-stats">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="stat-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <stat.icon className="stat-icon" />
                  <div className="stat-content">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href="#enrollment"
                className="btn btn-primary btn-large"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.buttons.startJourney')}
                <ArrowRight className="btn-icon" />
              </motion.a>

              <motion.button
                className="btn btn-secondary btn-large"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="btn-icon" />
                {t('hero.buttons.watchDemo')}
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="code-mockup">
              <div className="code-header">
                <div className="code-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="code-title">App.jsx</span>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="code-keyword">import</span>
                  <span className="code-text"> React </span>
                  <span className="code-keyword">from</span>
                  <span className="code-string"> 'react'</span>
                </div>
                <div className="code-line">
                  <span className="code-keyword">function</span>
                  <span className="code-function"> App</span>
                  <span className="code-text">() {`{`}</span>
                </div>
                <div className="code-line code-indent">
                  <span className="code-keyword">return</span>
                  <span className="code-text"> (</span>
                </div>
                <div className="code-line code-indent-2">
                  <span className="code-tag">&lt;div</span>
                  <span className="code-attr"> className</span>
                  <span className="code-string">="app"</span>
                  <span className="code-tag">&gt;</span>
                </div>
                <div className="code-line code-indent-3">
                  <span className="code-tag">&lt;h1&gt;</span>
                  <span className="code-text">Hello World!</span>
                  <span className="code-tag">&lt;/h1&gt;</span>
                </div>
                <div className="code-line code-indent-2">
                  <span className="code-tag">&lt;/div&gt;</span>
                </div>
                <div className="code-line code-indent">
                  <span className="code-text">)</span>
                </div>
                <div className="code-line">
                  <span className="code-text">{`}`}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero