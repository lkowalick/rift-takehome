'use client'

import FieldMapping from "./components/field-mapping"
import { FieldMap } from "./lib/constants";

import useFieldMappingReducer from "./lib/use-field-mapping-reducer";

export default function Home() {
  const [{valid, fieldMaps}, dispatch] = useFieldMappingReducer();

  function fieldMappingOnChange(index: number) {
    return (value: FieldMap) => {
      dispatch({ type: "update", index, value })
    }
  };

  // const fieldMappingOnDelete = (i: number) {
  //   setFieldMaps([...fieldMaps.slice(0,i), ...fieldMaps.slice(i+1)]);
  // }

  const submitEnabled = valid;

  return (
    <main>
      <div className="grid place-items-center mt-20">
        <div className="grid grid-cols-layout">
          <div>rift</div>
          <div></div>
          <div>CRMs</div>
        </div>
        {fieldMaps.map((fieldMap, i) => <FieldMapping className="grid grid-cols-layout mt-6" fieldMap={fieldMap} onChange={fieldMappingOnChange(i)} key={i} />)}
        <div className="grid grid-cols-layout mt-6">
          <div className="flex justify-start">
            <button className="rounded-lg border border-solid border-slate-300 py-2 px-5 leading-5 text-sm" type="button" onClick={() => dispatch({type: "add"})}>Add</button>
          </div>
          <div />
          <div />
        </div>
        <div className="grid grid-cols-layout mt-6" >
          <div />
          <div />
          <div className="flex justify-end">
            <button className="rounded-lg text-white bg-accent py-2 px-12 leading-5 text-sm disabled:bg-slate-300" disabled={!submitEnabled} type="button">Submit</button>
          </div>
        </div>
      </div>
    </main>
  );
}
