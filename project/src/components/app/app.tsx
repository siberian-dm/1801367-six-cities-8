import { Hotel } from '../../types/hotel';
import MainPage from '../main-page/main-page';

function App(props: JSX.IntrinsicAttributes & { hotels: Hotel[]; }): JSX.Element {
  return <MainPage {...props} />;
}

export default App;
