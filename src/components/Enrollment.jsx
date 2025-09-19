import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { emailjsConfig } from '../config/emailjs'
import {
  ArrowRight,
  Check,
  Star,
  Calendar,
  DollarSign,
  Users,
  Clock,
  Mail,
  Phone,
  User,
  CreditCard
} from 'lucide-react'
import './Enrollment.css'

const Enrollment = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    goals: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submittedEmails, setSubmittedEmails] = useState(() => {
    // Load previously submitted emails from localStorage
    const saved = localStorage.getItem('submittedEmails')
    return saved ? JSON.parse(saved) : []
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitError('')

    // Check if email was already submitted
    if (submittedEmails.includes(formData.email.toLowerCase())) {
      setSubmitError('You have already submitted an application with this email address. Please wait for our response or contact us directly if you need to update your information.')
      setIsLoading(false)
      return
    }

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          experience: formData.experience,
          goals: formData.goals,
          submission_date: new Date().toLocaleString()
        },
        emailjsConfig.publicKey
      )

      console.log('Email sent successfully:', result)

      // Add email to submitted list and save to localStorage
      const newSubmittedEmails = [...submittedEmails, formData.email.toLowerCase()]
      setSubmittedEmails(newSubmittedEmails)
      localStorage.setItem('submittedEmails', JSON.stringify(newSubmittedEmails))

      setIsSubmitted(true)

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        experience: '',
        goals: ''
      })

      // Hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)

    } catch (error) {
      console.error('Failed to send email:', error)
      setSubmitError('Failed to submit application. Please try again or contact us directly.')
    } finally {
      setIsLoading(false)
    }
  }

  const plans = [
    {
      name: 'Full Payment',
      price: '5,000,000 сум',
      originalPrice: '5,600,000 сум',
      savings: 'Save 600,000 сум',
      description: 'One-time payment for the complete program',
      features: [
        'Complete 8-month curriculum',
        'Live interactive classes',
        'Personal mentor assignment',
        'Career support & job placement',
        'Lifetime access to materials',
        'Certificate of completion',
        'Portfolio review sessions',
        'Alumni network access'
      ],
      popular: true
    },
    {
      name: 'Monthly Payment',
      price: '700,000 сум',
      description: 'Split into 8 monthly payments',
      features: [
        'Complete 8-month curriculum',
        'Live interactive classes',
        'Personal mentor assignment',
        'Career support & job placement',
        'Lifetime access to materials',
        'Certificate of completion',
        'Portfolio review sessions'
      ],
      popular: false
    }
  ]

  const cohortInfo = {
    nextStart: 'January 15, 2025',
    spotsLeft: 12,
    totalSpots: 25,
    earlyBird: 'December 20, 2024'
  }

  return (
    <section className="enrollment section" id="enrollment">
      <div className="container">
        <motion.div
          className="enrollment-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Join the Next Cohort</h2>
          <p className="section-subtitle">
            Transform your career in just 8 months. Limited spots available for our
            next cohort starting {cohortInfo.nextStart}.
          </p>
        </motion.div>

        <motion.div
          className="cohort-alert"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="alert-content">
            <div className="alert-icon">
              <Calendar />
            </div>
            <div className="alert-text">
              <span className="alert-title">Next Cohort: {cohortInfo.nextStart}</span>
              <span className="alert-subtitle">
                Only {cohortInfo.spotsLeft} spots left out of {cohortInfo.totalSpots}
              </span>
            </div>
          </div>
          <div className="spots-progress">
            <div
              className="spots-filled"
              style={{ width: `${((cohortInfo.totalSpots - cohortInfo.spotsLeft) / cohortInfo.totalSpots) * 100}%` }}
            ></div>
          </div>
        </motion.div>

        <div className="enrollment-content">
          <motion.div
            className="pricing-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="pricing-title">Choose Your Payment Plan</h3>
            <div className="pricing-plans">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  className={`pricing-plan ${plan.popular ? 'plan-popular' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  {plan.popular && (
                    <div className="popular-badge">
                      <Star className="badge-star" />
                      Most Popular
                    </div>
                  )}

                  <div className="plan-header">
                    <h4 className="plan-name">{plan.name}</h4>
                    <div className="plan-pricing">
                      <span className="plan-price">{plan.price}</span>
                      {plan.originalPrice && (
                        <span className="plan-original">{plan.originalPrice}</span>
                      )}
                      {plan.savings && (
                        <span className="plan-savings">{plan.savings}</span>
                      )}
                    </div>
                    <p className="plan-description">{plan.description}</p>
                  </div>

                  <ul className="plan-features">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="plan-feature">
                        <Check className="feature-check" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} btn-large plan-button`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Choose Plan
                    <ArrowRight className="btn-icon" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="enrollment-form-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="form-container">
              <h3 className="form-title">Reserve Your Spot</h3>
              <p className="form-subtitle">
                Fill out the form below to secure your place in the next cohort.
                We'll contact you within 24 hours to complete your enrollment.
              </p>

              {submitError && (
                <motion.div
                  className="error-message"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    color: '#ef4444',
                    backgroundColor: '#fef2f2',
                    border: '1px solid #fecaca',
                    borderRadius: '8px',
                    padding: '12px',
                    marginBottom: '20px',
                    textAlign: 'center'
                  }}
                >
                  {submitError}
                </motion.div>
              )}

              {isSubmitted ? (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <Check className="success-icon" />
                  <h4>Application Submitted!</h4>
                  <p>We'll contact you within 24 hours to discuss your enrollment.</p>
                </motion.div>
              ) : (
                <form className="enrollment-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName" className="form-label">
                        <User className="label-icon" />
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName" className="form-label">
                        <User className="label-icon" />
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        <Mail className="label-icon" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        <Phone className="label-icon" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="experience" className="form-label">
                      Programming Experience
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="form-select"
                      required
                    >
                      <option value="">Select your experience level</option>
                      <option value="none">Complete beginner</option>
                      <option value="basic">Some HTML/CSS knowledge</option>
                      <option value="intermediate">Some JavaScript experience</option>
                      <option value="advanced">Experienced but want to level up</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="goals" className="form-label">
                      Career Goals
                    </label>
                    <textarea
                      id="goals"
                      name="goals"
                      value={formData.goals}
                      onChange={handleInputChange}
                      className="form-textarea"
                      placeholder="Tell us about your career goals and what you hope to achieve..."
                      rows="4"
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="btn btn-primary btn-large form-submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Sending...' : 'Reserve My Spot'}
                    {!isLoading && <ArrowRight className="btn-icon" />}
                  </motion.button>

                  <p className="form-note">
                    By submitting this form, you agree to our terms and conditions.
                    No payment required to reserve your spot.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Enrollment