import { CirclePlus } from "lucide-react";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { ListHeader } from "./components/ListHeader";
import { Empty } from "./components/Empty";
import { Item } from "./components/Item";

export interface ITask {
  id: number
  text: string
  isChecked: boolean
}

const tasks = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    isChecked: false,
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    isChecked: true,
  },
];

export default function App() {

   function handleAddTask() {}

  function handleRemoveTask(id: number) { }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) { }

  return (
    <main>
      <Header />

      <section className="container mx-auto px-4">
        <div className="flex flex-1 justify-between gap-2">
          <Input className="-translate-y-1/2 mb-[2.3125rem]" />
          <Button className="-translate-y-1/2 mb-[2.3125rem]">
            Criar
            <CirclePlus className="text-base font-bold" color="#f2f2f2" />
          </Button>
        </div>

        <div className="flex flex-col gap-6">
          <ListHeader checkedTasksCounter={0} tasksCounter={0} />

          {tasks.length > 0 ? (
            <div className="flex flex-col gap-3">
              {tasks.map((task) => (
                <Item
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </section>
    </main>
  )
}

