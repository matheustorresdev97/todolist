import { CirclePlus } from "lucide-react";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { ListHeader } from "./components/ListHeader";
import { Empty } from "./components/Empty";
import { Item } from "./components/Item";
import { useEffect, useState } from "react";
import { TaskProps } from "./interfaces/Task";


export default function App() {
  const [description, setDescription] = useState('')
  const [tasks, setTasks] = useState<TaskProps[]>([])

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.complete) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  async function handleAddTask() {
    try {
      const response = await fetch('http://localhost:8080/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          description,
          complete: false
        }),
      });
      const newTask = await response.json();
      setTasks([...tasks, newTask]);
      setDescription('');
    } catch (error) {
      console.error('Erro ao criar tarefa:', error);
      throw error;
    }
  }

  async function handleRemoveTask(id: number) {
    try {
      await fetch(`http://localhost:8080/tasks/${id}`, {
        method: 'DELETE'
      });

      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Erro ao remover tarefa:', error);
      throw error;
    }
  }

  async function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    try {
      const response = await fetch(`http://localhost:8080/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          complete: value
        }),
      });


      const updatedTask = await response.json();

      setTasks(tasks.map(task =>
        task.id === id ? { ...task, complete: updatedTask.complete } : task
      ));
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
      throw error;
    }
  }

  async function loadTasks() {
    try {
      const response = await fetch('http://localhost:8080/tasks');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Erro ao carregar tarefas:', error);
      throw error;
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <main>
      <Header />

      <section className="container mx-auto px-4">
        <div className="flex flex-1 justify-between gap-2">
          <Input className="-translate-y-1/2 mb-[2.3125rem]" value={description} onChange={(e) => setDescription(e.target.value)} />
          <Button className="-translate-y-1/2 mb-[2.3125rem]" onClick={handleAddTask}>
            Criar
            <CirclePlus className="text-base font-bold" color="#f2f2f2" />
          </Button>
        </div>

        <div className="flex flex-col gap-6">
          <ListHeader
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />

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

