import classNames from 'classnames';
import 'nes.css/css/nes.min.css'; 
import '../css/Style.css';
export const Filter = (props) => {
  // propsを定義
  const { value, onChange } = props;
  // フィルターの切り替え
  const handleClick = (key, event) => {
    event.preventDefault();
    onChange(key);
  };
  return (
    <div className="panel-tabs">
      <a
        href="#"
        onClick={handleClick.bind(null, 'ALL')}
        className={classNames({ 'is-active': value === 'ALL' }, 'nes-btn')}
      >全て</a>
      <a
        href="#"
        onClick={handleClick.bind(null, 'TODO')}
        className={classNames({ 'is-active': value === 'TODO' }, 'nes-btn')}
      >未完了</a>
      <a
        href="#"
        onClick={handleClick.bind(null, 'DONE')}
        className={classNames({ 'is-active': value === 'DONE' }, 'nes-btn')}
      >完了</a>
    </div>
  );
}
export default Filter;