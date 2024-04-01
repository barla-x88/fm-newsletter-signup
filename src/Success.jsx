import successImg from './assets/images/icon-success.svg';

const Success = ({ email, setEmail }) => {
  return (
    <div className="success-container">
      <div className="success-text">
        <div>
          <img src={successImg} alt="Sucess" />
          <p className="success-heading">Thanks for subscribing!</p>
        </div>
        <div>
          <p className="success-msg">
            A confirmation email has been sent to
            <span className="email"> {email}</span>. Please open it and click
            the button inside to confirm your subscription.
          </p>
        </div>
      </div>
      <div className="success-btn">
        <button onClick={() => setEmail(false)}>Dismiss message</button>
      </div>
    </div>
  );
};
export default Success;
