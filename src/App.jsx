import { useState } from 'react';
import SignUp from './SignUp';

const App = () => {
  const [email, setEmail] = useState(false);

  return <SignUp setEmail={setEmail} />;
};
export default App;
