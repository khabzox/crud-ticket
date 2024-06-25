import { Flame } from "lucide-react";
export default function PriorityDisplay({ priority }) {
  return (
    <>
      <div className="flex justify-start align-baseline">
        <Flame
          className={`pr-1 ${
            priority > 1 ? "text-red-400" : "text-slate-400"
          } `}
        />
        <Flame
          className={`pr-1 ${
            priority > 2 ? "text-red-400" : "text-slate-400"
          } `}
        />
        <Flame
          className={`pr-1 ${
            priority > 3 ? "text-red-400" : "text-slate-400"
          } `}
        />
        <Flame
          className={`pr-1 ${
            priority > 4 ? "text-red-400" : "text-slate-400"
          } `}
        />
      </div>
    </>
  );
}
