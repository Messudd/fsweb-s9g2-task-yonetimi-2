import React from "react";
import { differenceInDays, formatDistanceToNow } from "date-fns";
import {tr} from 'date-fns/locale';

const Task = ({ taskObj, onComplete }) => {
  const diff = differenceInDays(new Date(taskObj.deadline), new Date());
  const readDeadLineToNow = formatDistanceToNow(new Date(taskObj.deadline), {
    addSuffix: true,
    locale: tr,
  });

  return (
    <div className="px-6 py-6 bg-white border rounded-md leading-3 mt-4 shadow-md">
      <h3 className="text-lg text-[#c8781a]">{taskObj.title}</h3>
      <div className="text-lg pt-1">
        son teslim:
        <span className= {diff < 3 && 'bg-[#ffd9d4] py-1 px-2 rounded-sm inline-block'}>
          {readDeadLineToNow}
        </span>
      </div>
      <p className="pt-2 pr-0 pb-3 text-sm text-stone-700">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="inline-block py-1 px-3 text-sm border-2 border-solid border-neutral-300 mr-1 mb-1.5 rounded-3xl" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button  className = 'block py-2 px-3 ml-auto bg-orange-200 border-0 cursor-pointer rounded shadow-sm' onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
