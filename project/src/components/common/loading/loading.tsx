import styles from './loading.module.css';
import SvgSpinner from './svg-spinner';

function Loading(): JSX.Element {
  return (
    <div
      className={styles.container}
    >
      <div>Loading...</div>
      <SvgSpinner/>
    </div>
  );
}

export default Loading;
