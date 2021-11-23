import Header from '../../common/header/header';
import Property from './property';
import { fetchRoomDataById } from '../../../store/api-action';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

type RoomParams = {
  id: string;
}

function Room(): JSX.Element {
  const { id }: RoomParams = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRoomDataById(+id));
  }, [dispatch, id]);

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <Property/>
      </main>
    </div>
  );
}

export default Room;
