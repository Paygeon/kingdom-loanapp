import { useContext} from 'react';
import './App.css';

import { DataContext } from './context/DataContext';
import forms from './constants/forms';
import AfterSubmitting from './components/AfterSubmitting';

const App: React.FC = () => {
  const {currentStep,isSubmitted} = useContext(DataContext)

  if(isSubmitted) return <AfterSubmitting/>;
  return (
    <div className="max-w-5xl p-4 mt-12 mx-auto">
      {forms[currentStep]}
    </div>
  );
};

export default App;
