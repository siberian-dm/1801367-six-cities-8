import Header from '../../common/header/header';
import Loading from '../../common/loading/loading';
import Property from './property';
import { fetchRoomDataById } from '../../../store/api-action';
import { getIsRoomDataLoaded } from '../../../store/reducers/room-data/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

type RoomParams = {
  id: string;
}

function Room(): JSX.Element {
  const { id }: RoomParams = useParams();
  const isRoomDataLoaded = useSelector(getIsRoomDataLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRoomDataById(id));
  }, [dispatch, id]);

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        {!isRoomDataLoaded
          ? <Loading/>
          : <Property/>}
      </main>
    </div>
  );
}

export default Room;
