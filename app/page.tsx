'use client'

import axios from "axios";
import AddButton from "./components/add-button";
import FieldMappings from "./components/field-mappings"
import SubmitButton from "./components/submit-button";
import { FieldMap } from "./lib/constants";
import prepareStateForSubmission from "./lib/prepare-state-for-submission";

import useFieldMappingReducer from "./lib/use-field-mapping-reducer";
import { useRouter } from "next/navigation";

export default function Home() {
  const [{ formIsValid, fieldMaps }, dispatch] = useFieldMappingReducer();
  const router = useRouter();

  function fieldMappingChangeHandler(index: number, value: FieldMap) {
    dispatch({ type: "update", index, value });
  };

  function fieldMappingDeleteHandler(index: number) {
    dispatch({ type: "delete", index });
  }

  async function handleSubmission() {
    await axios.post('https://www.httpbin.org/post', {data: prepareStateForSubmission(fieldMaps)})
    console.log("SUCCESS");
    router.push("/submitted");
  }

  return (
    <div className="grid grid-cols-layout gap-y-6">
      <div className="col-span-2">rift</div>
      <div>CRMs</div>
      <FieldMappings fieldMaps={fieldMaps} onChange={fieldMappingChangeHandler} onDelete={fieldMappingDeleteHandler} />
      <div className="col-span-3 flex justify-start">
        <AddButton onClick={() => dispatch({ type: "add" })} />
      </div>
      <div className="col-span-3 flex justify-end">
        <SubmitButton onClick={handleSubmission} disabled={!formIsValid} />
      </div>
    </div>
  );
}
