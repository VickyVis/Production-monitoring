"use client"

import { Fragment, useState, useEffect } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const timestamp = [
    { id: 1, name: 'Tango 1', field: 'Alpha 1', timestamp: '2024-02-01', production_1D: '35.4733002', production_7D: '45.55006413', production_target: '32.66973369', average_cycle_time: '7451' },
    { id: 2, name: 'Tango 2', field: 'Alpha 2', timestamp: '2024-02-02', production_1D: '35.1233002', production_7D: '45.55006413', production_target: '32.66973369', average_cycle_time: '7451' },
    { id: 3, name: 'Tango 3', field: 'Alpha 3', timestamp: '2024-02-03', production_1D: '35.4733002', production_7D: '45.55006413', production_target: '32.66973369', average_cycle_time: '7451' },
    { id: 4, name: 'Tango 4', field: 'Alpha 4', timestamp: '2024-02-04', production_1D: '35.1233002', production_7D: '45.55006413', production_target: '32.66973369', average_cycle_time: '7451' },
   
]

function sendData(data) {
  
  console.log('Sending data:', data);
}

export default function FieldSelection() {
  const [selectedToDate, setSelectedToDate] = useState(timestamp[0])
  const [query, setQuery] = useState('')

  useEffect(() => {
   
    sendData(selectedToDate);
  }, [selectedToDate]);

  const filteredtimestamp =
    query === ''
      ? timestamp
      : timestamp.filter((fieldname) =>
          fieldname.timestamp
            .toString()
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  return (
    <div>
      <div className='p-1'>
        <p>To:</p>
      </div>
    <div className="fixed w-60 border-2 rounded-lg">
      <Combobox value={selectedToDate} onChange={setSelectedToDate}>
        <div className="relative mt-1">
         
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(fieldItem) => fieldItem.timestamp}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {filteredtimestamp.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredtimestamp.map((fieldItem) => (
                  <Combobox.Option
                    key={fieldItem.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-blue-700 text-white' : 'text-gray-900'
                      }`
                    }
                    value={fieldItem}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {fieldItem.timestamp}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-blue-700'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
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
    </div>
  )
}
