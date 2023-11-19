import { Fragment, useState } from "react"
import { Combobox, Transition } from '@headlessui/react'
import Image from "next/image"

interface Item {
    value: string;
    name: string;
  }

  const people: Item[] = [
    { value: '1', name: 'Wade Cooper' },
    { value: '2', name: 'Arlene Mccoy' },
    { value: '3', name: 'Devon Webb' },
    { value: '4', name: 'Tom Cook' },
    { value: '5', name: 'Tanya Fox' },
    { value: '6', name: 'Hellen Schmidt' },
  ];

export default function FieldSelector({ className = '', items = people}) {
      const [selected, setSelected] = useState(people[0])
      const [query, setQuery] = useState('')
    
      const filteredPeople =
        query === ''
          ? items
          : items.filter((item) =>
              item.name
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.toLowerCase().replace(/\s+/g, ''))
            )
    
      return (
        <div className={`w-60 ${className}`}>
          <Combobox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
              <div className="relative w-full cursor-default overflow-hidden  bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                <Combobox.Input
                  className="w-full border border-solid border-slate-300 py-2 rounded-lg pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                  displayValue={(item: Item) => item.name}
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
                        key={item.value}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? 'bg-teal-600 text-white' : 'text-gray-900'
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
                              {item.name}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? 'text-white' : 'text-teal-600'
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