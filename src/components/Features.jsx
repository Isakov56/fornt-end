import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  Code2,
  Users,
  Trophy,
  Clock,
  BookOpen,
  Laptop,
  Github,
  Zap,
  Award,
  Video
} from 'lucide-react'
import './Features.css'

const Features = () => {
  const { t } = useTranslation()

  const features = [
    {
      icon: Code2,
      title: t('features.items.curriculum.title'),
      description: t('features.items.curriculum.description')
    },
    {
      icon: Users,
      title: t('features.items.mentorship.title'),
      description: t('features.items.mentorship.description')
    },
    {
      icon: Laptop,
      title: t('features.items.projects.title'),
      description: t('features.items.projects.description')
    },
    {
      icon: Github,
      title: t('features.items.workflow.title'),
      description: t('features.items.workflow.description')
    },
    {
      icon: Clock,
      title: t('features.items.schedule.title'),
      description: t('features.items.schedule.description')
    },
    {
      icon: Award,
      title: t('features.items.support.title'),
      description: t('features.items.support.description')
    }
  ]

  const benefits = [
    {
      icon: Video,
      title: t('features.benefits.items.classes.title'),
      description: t('features.benefits.items.classes.description')
    },
    {
      icon: BookOpen,
      title: t('features.benefits.items.resources.title'),
      description: t('features.benefits.items.resources.description')
    },
    {
      icon: Zap,
      title: t('features.benefits.items.learning.title'),
      description: t('features.benefits.items.learning.description')
    },
    {
      icon: Trophy,
      title: t('features.benefits.items.certificate.title'),
      description: t('features.benefits.items.certificate.description')
    }
  ]

  return (
    <section className="features section" id="features">
      <div className="container">
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t('features.title')}</h2>
          <p className="section-subtitle">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <div className="features-grid grid grid-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="feature-card card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="feature-icon">
                <feature.icon />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="benefits-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="benefits-title">{t('features.benefits.title')}</h3>
          <div className="benefits-grid grid grid-2">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="benefit-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="benefit-icon">
                  <benefit.icon />
                </div>
                <div className="benefit-content">
                  <h4 className="benefit-title">{benefit.title}</h4>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features