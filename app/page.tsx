'use client'

import FieldMapping from "./components/field-mapping"

export default function Home() {
  return (
    <main>
      <div className="grid place-items-center mt-20">
        <div className="grid grid-cols-layout">
          <div>rift</div>
          <div></div>
          <div>CRMs</div>
        </div>
        <FieldMapping className="grid grid-cols-layout mt-6" />
        <div className="grid grid-cols-layout mt-6">
          <div className="flex justify-start">
            <button className="rounded-lg border border-solid border-slate-300 py-2 px-5 leading-5 text-sm" type="button">Add</button>
          </div>
          <div />
          <div />
        </div>
        <div className="grid grid-cols-layout mt-6" >
          <div />
          <div />
          <div className="flex justify-end">
            <button className="rounded-lg text-white bg-accent py-2 px-12 leading-5 text-sm" type="button">Submit</button>
          </div>
        </div>
      </div>
    </main>
  );
}
