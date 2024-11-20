export default function Newsletter() {
  return (
    <div className="footer-newsletter">
      <h3 className="footer-payment-heading">NEWSLETTER</h3>
      <div className="footer-newsletter-form">
        <input
          type="text"
          placeholder="Email Address"
          className="footer-newsletter-input"
        />
        <button className="bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition-colors">
          Subscribe
        </button>
      </div>
      <p className="footer-newsletter-text">
        By clicking the SUBSCRIBE button, you are agreeing to our{' '}
        <a href="#" className="text-blue-600 underline">
          Privacy & Cookie Policy
        </a>
      </p>
    </div>
  )
}
