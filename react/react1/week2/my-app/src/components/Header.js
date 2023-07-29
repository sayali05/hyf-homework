function Header({ toDo }) {
  const count = toDo.length;
  return (
    <header>
      <h1>TODO LIST</h1>
      <p>You have {count} many todo list</p>
    </header>
  );
}
export default Header;
