const App = () => {
  return (
    <div className="container">
      <div className="img-container"></div>
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
        <form>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" placeholder="email@company.com" />
          <button>Subscribe to monthly newsletter</button>
        </form>
      </div>
    </div>
  );
};
export default App;
