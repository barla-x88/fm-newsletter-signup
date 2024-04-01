import { useState } from 'react';
import SignUp from './SignUp';
import Success from './Success';

const App = () => {
  const [email, setEmail] = useState(false);

  return (
    <>{email ? <Success email={email} /> : <SignUp setEmail={setEmail} />}</>
  );
};
export default App;
