import classNames from 'classnames';
import 'nes.css/css/nes.min.css'; 
import '../css/Style.css';
export const ToDo = (props) => {
  // stateを作成
  const { todo, onCheck } = props;
  // チェックボックス押下時、ToDoAppクラスの「handleCheck」関数を実行
  const handleChange = () => {
    onCheck(todo);
  };
  return (
    <label className="panel-block">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={handleChange}
        className='nes-checkbox'
      />
      <span
        className={classNames({
          'has-text-grey-light': todo.done
        }, 'todo')}
      >
        {todo.text}
      </span><br/>
    </label>
  );
}
export default ToDo;