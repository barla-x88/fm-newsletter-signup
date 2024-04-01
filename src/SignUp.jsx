import { useEffect, useRef } from 'react';

const SignUp = ({ setEmail }) => {
  const labelRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current;
    const showError = () => {
      labelRef.current.innerText = 'Valid email required';
      input.style.backgroundColor = '#ffe8e6';
      input.style.color = 'hsl(4, 100%, 67%)';
      // https://angelika.me/2020/02/01/custom-error-messages-for-html5-form-validation/
      input.setCustomValidity("This Doesn't look like a valid Email");
    };

    const hideError = () => {
      labelRef.current.innerText = '';
      input.style = {};
      // necessary to set it to an empty string
      input.setCustomValidity('');
    };

    input.addEventListener('invalid', showError);
    input.addEventListener('input', hideError);

    return () => {
      removeEventListener('invalid', showError);
      removeEventListener('input', hideError);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get('email');
    if (email) {
      setEmail(email);
      console.log(email);
    }
  };
  return (
    <div className="container">
      <div className="img-container">
        <div className="lg-background"></div>
      </div>
      <div className="form-container">
        <div>
          <h1>Stay Updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            <span>Email address</span>
            <span className="validation-msg" ref={labelRef}></span>
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email@company.com"
            ref={inputRef}
            pattern="^[a-zA-Z0-9z_+-.]+@[a-zA-Z0-9\-]+\.[a-zA-Z]{2,}$"
          />
          <button>Subscribe to monthly newsletter</button>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
