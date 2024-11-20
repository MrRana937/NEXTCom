export default function Payment() {
  return (
    <div className="footer-payment">
      <h3 className="footer-payment-heading">WE ACCEPT</h3>
      <div className="footer-payment-grid">
        <img
          src="../../../images/payment/visa.webp"
          alt="visa"
          className="footer-payment-image"
        />
        <img
          src="../../../images/payment/mastercard.webp"
          alt="mastercard"
          className="footer-payment-image"
        />
        <img
          src="../../../images/payment/paypal.webp"
          alt="paypal"
          className="footer-payment-image"
        />
      </div>
    </div>
  )
}
