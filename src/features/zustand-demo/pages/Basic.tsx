import { useBearStore } from "@/features/zustand-demo/stores/bear";
import {
  inc,
  setText,
  useBoundStore,
} from "@/features/zustand-demo/stores/bound";
import { usePersonStore } from "@/features/zustand-demo/stores/person";

const Basic: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <BearCounter />
        <Controls />
      </div>
      <HumanName />
      <BoundPage />
    </div>
  );
};

function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  return <h1>{bears} around here...</h1>;
}

function Controls() {
  const { increasePopulation, removeAllBears, updateBears } = useBearStore(
    (state) => state,
  );
  return (
    <>
      <button
        className="border p-1 bg-slate-700 text-white hover:bg-slate-800"
        onClick={increasePopulation}
      >
        one up
      </button>
      <button
        className="border p-1 bg-slate-700 text-white hover:bg-slate-800"
        onClick={removeAllBears}
      >
        remove all
      </button>
      <button
        className="border p-1 bg-slate-700 text-white hover:bg-slate-800"
        onClick={() => updateBears(3)}
      >
        set to 3
      </button>
    </>
  );
}

function HumanName() {
  // "select" the needed state and actions, in this case, the firstName value
  // and the action updateFirstName
  const firstName = usePersonStore((state) => state.firstName);
  const lastName = usePersonStore((state) => state.lastName);
  const updateFirstName = usePersonStore((state) => state.updateFirstName);
  const updateLastName = usePersonStore((state) => state.updateLastName);

  return (
    <div>
      <label>
        First name
        <input
          className="border p-1"
          onChange={(e) => updateFirstName(e.currentTarget.value)}
          value={firstName}
        />
      </label>

      <label>
        Last name
        <input
          className="border p-1"
          onChange={(e) => updateLastName(e.currentTarget.value)}
          value={lastName}
        />
      </label>

      <p>
        Hello,{" "}
        <strong>
          {firstName} {lastName}!
        </strong>
      </p>
    </div>
  );
}

function BoundPage() {
  const count = useBoundStore((state) => state.count);
  const text = useBoundStore((state) => state.text);

  return (
    <div className="flex flex-col">
      <p>{count}</p>
      <button
        className="border p-1 bg-slate-700 text-white hover:bg-slate-800"
        onClick={inc}
      >
        one up
      </button>

      <hr />

      <input onChange={(e) => setText(e.target.value)} value={text} />
      <p>{text}</p>
    </div>
  );
}

export default Basic;
