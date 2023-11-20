import { Fragment, useState } from "react"
import { Combobox, Transition } from '@headlessui/react'
import Image from "next/image"
import { Item, FieldData } from "../lib/constants"

export default function FieldSelector({ className = '', items, fieldData: {value, valid}, onChange }: {className: string, items: Item[], fieldData: FieldData, onChange: (value: Item) => void }) {
      const [query, setQuery] = useState('')
    
      const filteredPeople =
        query === ''
          ? items
          : items.filter((item) =>
              item.label
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.toLowerCase().replace(/\s+/g, ''))
            )
    
      return (
        <div className={`w-60 ${className}`}>
          <Combobox value={value} onChange={onChange}>
            <div className="relative mt-1">
              <div className="relative w-full cursor-default overflow-hidden  bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                <Combobox.Input
                  className={`w-full border border-solid ${valid ? 'border-slate-300' : 'border-orange-500'} border- py-2 rounded-lg pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0`}
                  displayValue={(item: Item) => item.label}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <Image src="/caret-up-down.svg" height={16} width={16} alt="Toggle Dropdown" />
                </Combobox.Button>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery('')}
              >
                <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-10">
                  {filteredPeople.length === 0 && query !== '' ? (
                    <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                      Nothing found.
                    </div>
                  ) : (
                    filteredPeople.map((item) => (
                      <Combobox.Option
                        key={item.id}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? 'bg-accent text-white' : 'text-gray-900'
                          }`
                        }
                        value={item}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {item.label}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? 'text-white' : 'text-accent'
                                }`}
                              >
                                ✓
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
        </div>
      )
    }