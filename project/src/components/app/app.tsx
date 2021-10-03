import MainPage from '../main-page/main-page';

type AppProps = {
  placeCount: number,
  placeCards: {
    isPremium: boolean,
    previewImage: string,
    price: number,
    isFavorite: boolean,
    rating: number,
    title: string,
    type: string,
  }[],
}


function App({placeCount, placeCards}: AppProps): JSX.Element {
  return <MainPage placeCount={placeCount} placeCards={placeCards} />;
}


export default App;
