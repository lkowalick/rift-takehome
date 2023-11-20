'use client'

import FieldMappings from "./components/field-mappings"
import { FieldMap } from "./lib/constants";

import useFieldMappingReducer from "./lib/use-field-mapping-reducer";

export default function Home() {
  const [{ valid, fieldMaps }, dispatch] = useFieldMappingReducer();

  function fieldMappingChangeHandler(index: number, value: FieldMap) {
    dispatch({ type: "update", index, value });
  };

  function fieldMappingDeleteHandler(index: number) {
    dispatch({ type: "delete", index });
  }

  const submitEnabled = valid;

  return (
    <main>
      <div className="grid place-items-center mt-20">
        <div className="grid grid-cols-layout gap-y-6">
          <div className="col-span-2">rift</div>
          <div>CRMs</div>
          <FieldMappings fieldMaps={fieldMaps} onChange={fieldMappingChangeHandler} onDelete={fieldMappingDeleteHandler} />
          <div className="col-span-3 flex justify-start">
            <button className="rounded-lg border border-solid border-slate-300 py-2 px-5 leading-5 text-sm" type="button" onClick={() => dispatch({ type: "add" })}>Add</button>
          </div>
          <div className="col-span-3 flex justify-end">
            <button className="rounded-lg text-white bg-accent py-2 px-12 leading-5 text-sm disabled:bg-slate-300" disabled={!submitEnabled} type="button">Submit</button>
          </div>
        </div>
      </div>
    </main>
  );
}
