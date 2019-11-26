import { h } from 'preact';
import style from './style';
import TodoList from '../../components/todo-list';

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<TodoList />
	</div>
);

export default Home;
