'use client'

import AddButton from "./components/add-button";
import FieldMappings from "./components/field-mappings"
import SubmitButton from "./components/submit-button";
import { FieldMap } from "./lib/constants";

import useFieldMappingReducer from "./lib/use-field-mapping-reducer";

export default function Home() {
  const [{ formIsValid, fieldMaps }, dispatch] = useFieldMappingReducer();

  function fieldMappingChangeHandler(index: number, value: FieldMap) {
    dispatch({ type: "update", index, value });
  };

  function fieldMappingDeleteHandler(index: number) {
    dispatch({ type: "delete", index });
  }

  const submitEnabled = formIsValid;

  return (
    <div className="grid grid-cols-layout gap-y-6">
      <div className="col-span-2">rift</div>
      <div>CRMs</div>
      <FieldMappings fieldMaps={fieldMaps} onChange={fieldMappingChangeHandler} onDelete={fieldMappingDeleteHandler} />
      <div className="col-span-3 flex justify-start">
        <AddButton onClick={() => dispatch({ type: "add" })} />
      </div>
      <div className="col-span-3 flex justify-end">
        <SubmitButton onClick={handleSubmission} disabled={!submitEnabled} />
      </div>
    </div>
  );
}
