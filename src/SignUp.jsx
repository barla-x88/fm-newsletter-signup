const SignUp = ({ setEmail }) => {
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
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@company.com"
          />
          <button>Subscribe to monthly newsletter</button>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
