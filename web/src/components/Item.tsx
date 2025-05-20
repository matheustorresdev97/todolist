import { Check, Trash } from "lucide-react";
import { ITask } from "../App";

interface Props {
  data: ITask;
  removeTask: (id: number) => void;
  toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void;
}

export function Item({ data, removeTask, toggleTaskStatus }: Props) {
  function handleTaskToggle() {
    toggleTaskStatus({ id: data.id, value: !data.isChecked });
  }

  function handleRemove() {
    removeTask(data.id);
  }

  return (
    <div className="flex flex-1 gap-3 items-center justify-between p-4 rounded-lg bg-gray-500 border border-gray-400">
      <div className="flex">
        <label htmlFor="checkbox" className="flex p-[3px] items-center gap-3" onClick={handleTaskToggle}>
          <input type="checkbox" className="hidden" readOnly checked={data.isChecked} />
          <span className={`
            rounded-full h-[1.125rem] w-[1.125rem] transition-all duration-200 flex items-center justify-center
            ${data.isChecked 
              ? "border-2 border-purple-dark bg-purple-dark hover:border-purple hover:bg-purple" 
              : "border-2 border-blue hover:bg-opacity-20 hover:bg-blue"
            }
          `}>
            {data.isChecked && <Check size={12} />}
          </span>
          <p className={`
            text-sm leading-[140%] select-none transition-all duration-200
            ${data.isChecked ? "line-through text-gray-300" : ""}
          `}>
            {data.text}
          </p>
        </label>
      </div>
      <button 
        onClick={handleRemove} 
        className="border-none bg-transparent rounded p-[5px_4px_2px_4px] transition-colors duration-200 hover:bg-gray-400 group"
      >
        <Trash 
          size={16} 
          color="#808080" 
          className="transition-all duration-200 group-hover:fill-danger" 
        />
      </button>
    </div>
  );
}