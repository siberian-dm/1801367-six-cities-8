import style from './loading.module.css';

function Loading(): JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        padding: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',
        fontStyle: 'oblique',
        fontSize: '24px',
        fontWeight: 700,
        gap: '10px',
      }}
    >
      <div>Loading...</div>
      <div
        className={style['lds-spinner']}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;
