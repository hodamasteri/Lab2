import TodoItem from "./TodoItem";
export default function TodoList({ todoitems = [] }) {
  return (
    <div>
      {todoitems.map((item, i) => {
        return (
          <div>
            <TodoItem {...item} key={item.id} />
            <input
              type="checkbox"
              checked={item.complete}
              onChange={(e) => {
                item.complete = !item.complete;
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
