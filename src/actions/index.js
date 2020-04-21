import cities from '../components/app';

function setCities() {
  return {
    type: 'SET_CITIES',
    payload: cities
  };
}

export default setCities();
