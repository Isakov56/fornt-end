import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  CheckCircle,
  Calendar,
  Clock,
  Users,
  Code,
  Palette,
  Zap,
  Database,
  Layout,
  Smartphone,
  Globe,
  Settings
} from 'lucide-react'
import './Curriculum.css'

const Curriculum = () => {
  const { t } = useTranslation()
  const modules = [
    {
      month: 1,
      title: 'HTML Foundations',
      icon: Globe,
      color: '#f59e0b',
      description: 'Master the building blocks of the web',
      topics: [
        'Internet & Web basics (client ↔ server, browsers, requests)',
        'Setting up tools: VS Code, Git/GitHub, Chrome DevTools',
        'HTML structure: headings, links, lists, images',
        'Semantic HTML: <header>, <nav>, <main>, <section>',
        'Tables & Forms'
      ],
      tools: ['VS Code', 'Git/GitHub', 'Chrome DevTools'],
      outcome: 'Build a multi-page semantic website with forms & navigation'
    },
    {
      month: 2,
      title: 'CSS Foundations',
      icon: Palette,
      color: '#8b5cf6',
      description: 'Style and layout your web pages',
      topics: [
        'CSS syntax, selectors, units',
        'Typography, colors, backgrounds',
        'Box model, display, positioning',
        'Flexbox basics, media queries',
        'Responsive design principles'
      ],
      tools: ['Live Server', 'Chrome DevTools CSS inspector'],
      outcome: 'Create a responsive personal portfolio website'
    },
    {
      month: 3,
      title: 'Advanced CSS + Intro to JavaScript',
      icon: Layout,
      color: '#10b981',
      description: 'Advanced styling and first steps into programming',
      topics: [
        'Advanced layout: flexbox deep dive, CSS grid',
        'Transitions, animations, variables, pseudo-classes/elements',
        'CSS Frameworks: Tailwind CSS or Bootstrap',
        'Intro to JavaScript: variables, data types, operators',
        'DOM intro: selectors, events'
      ],
      tools: ['Tailwind CSS or Bootstrap', 'GitHub Pages'],
      outcome: 'Group Project #1: Responsive multi-page website with JavaScript interactivity'
    },
    {
      month: 4,
      title: 'Core JavaScript + Debugging',
      icon: Code,
      color: '#f59e0b',
      description: 'Master JavaScript fundamentals',
      topics: [
        'Functions, arrays, objects, loops',
        'DOM manipulation, events in depth',
        'Debugging techniques: console.log, breakpoints, error messages',
        'Fetch API (GET requests)',
        'ES6+ features (let/const, arrow functions, template literals)'
      ],
      tools: ['Node.js runtime', 'Chrome DevTools debugger'],
      outcome: 'Build an interactive app (to-do list, weather app) with API calls'
    },
    {
      month: 5,
      title: 'Advanced JavaScript + APIs',
      icon: Database,
      color: '#3b82f6',
      description: 'Asynchronous programming and data handling',
      topics: [
        'Asynchronous JS: promises, async/await',
        'LocalStorage/sessionStorage',
        'Modular code & NPM basics',
        'APIs deep dive: REST APIs, GraphQL basics',
        'Data manipulation: filtering, sorting, handling large datasets'
      ],
      tools: ['Postman', 'Node.js + NPM'],
      outcome: 'Group Project #2: API-powered project (movie search, product catalog)'
    },
    {
      month: 6,
      title: 'React Fundamentals + Workflow',
      icon: Zap,
      color: '#06b6d4',
      description: 'Modern React development',
      topics: [
        'React setup (Vite/CRA)',
        'JSX, components, props, state',
        'Event handling, lists, forms',
        'Code reviews & pull requests',
        'GitHub collaboration (branches, PRs)'
      ],
      tools: ['GitHub Projects/Notion', 'Discord/Slack', 'React DevTools'],
      outcome: 'Build a React SPA with professional workflow practices'
    },
    {
      month: 7,
      title: 'Advanced React + State Management',
      icon: Settings,
      color: '#8b5cf6',
      description: 'Complex React applications',
      topics: [
        'React Router',
        'Context API, custom hooks',
        'State management: Redux Toolkit or Zustand',
        'API integration in React apps',
        'Component composition patterns'
      ],
      tools: ['Redux DevTools', 'Axios', 'Vercel/Netlify'],
      outcome: 'Group Project #3: Multi-page React app with state management'
    },
    {
      month: 8,
      title: 'Professional Skills + Capstone',
      icon: Users,
      color: '#ef4444',
      description: 'Career preparation and final project',
      topics: [
        'Advanced hooks (useReducer, useMemo, useCallback)',
        'Testing basics (Jest + React Testing Library)',
        'TypeScript basics',
        'Accessibility (a11y) fundamentals',
        'Performance monitoring (Lighthouse, Core Web Vitals)'
      ],
      tools: ['TypeScript', 'Jest', 'React Testing Library', 'Lighthouse'],
      outcome: 'Solo Capstone Project: Portfolio-ready full React application'
    }
  ]

  const schedule = {
    duration: t('curriculum.schedule.duration'),
    weeklyHours: t('curriculum.schedule.weeklyHours'),
    totalHours: t('curriculum.schedule.totalHours'),
    format: t('curriculum.schedule.format')
  }

  return (
    <section className="curriculum section" id="curriculum">
      <div className="container">
        <motion.div
          className="curriculum-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t('curriculum.title')}</h2>
          <p className="section-subtitle">
            {t('curriculum.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="schedule-overview"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="schedule-stats">
            <div className="schedule-stat">
              <Calendar className="schedule-icon" />
              <div>
                <span className="schedule-value">{schedule.duration}</span>
                <span className="schedule-label">{t('curriculum.schedule.labels.duration')}</span>
              </div>
            </div>
            <div className="schedule-stat">
              <Clock className="schedule-icon" />
              <div>
                <span className="schedule-value">{schedule.weeklyHours}</span>
                <span className="schedule-label">{t('curriculum.schedule.labels.weekly')}</span>
              </div>
            </div>
            <div className="schedule-stat">
              <Users className="schedule-icon" />
              <div>
                <span className="schedule-value">{schedule.totalHours}</span>
                <span className="schedule-label">{t('curriculum.schedule.labels.total')}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="modules-timeline">
          {modules.map((module, index) => (
            <motion.div
              key={module.month}
              className="module-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="module-header">
                <div
                  className="module-icon"
                  style={{ backgroundColor: module.color }}
                >
                  <module.icon />
                </div>
                <div className="module-info">
                  <div className="module-month">{t('curriculum.modules.month')} {module.month}</div>
                  <h3 className="module-title">{module.title}</h3>
                  <p className="module-description">{module.description}</p>
                </div>
              </div>

              <div className="module-content">
                <div className="module-topics">
                  <h4 className="topics-title">{t('curriculum.modules.topics')}</h4>
                  <ul className="topics-list">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="topic-item">
                        <CheckCircle className="topic-icon" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="module-details">
                  <div className="module-tools">
                    <h4 className="details-title">{t('curriculum.modules.tools')}</h4>
                    <div className="tools-list">
                      {module.tools.map((tool, toolIndex) => (
                        <span key={toolIndex} className="tool-tag">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="module-outcome">
                    <h4 className="details-title">{t('curriculum.modules.outcome')}</h4>
                    <p className="outcome-text">{module.outcome}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="curriculum-cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="cta-title">{t('curriculum.cta.title')}</h3>
          <p className="cta-description">
            {t('curriculum.cta.description')}
          </p>
          <motion.a
            href="#enrollment"
            className="btn btn-primary btn-large"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('curriculum.cta.button')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Curriculum