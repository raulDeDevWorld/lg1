'use client';

import { useRouter } from 'next/navigation';
import { useState, useRef } from 'react'
import { useUser } from '@/context/Context'


export default function Button({ data, node, focusTxt, id }) {
    const { focus, setFocus } = useUser()

    const router = useRouter()
    const [showPassword, setShowPassword] = useState(true)
    const inputRef = useRef()


    function handlerOnChange(e) {
        e.stopPropagation();
    
        inputRef.current.value = e.target.value
      }
    function stopPropagation(e) {
        e.stopPropagation();
    
      }

    return (
        <>

            <div class="relative z-0 w-full mt-5 group ">
                <input type="email" name={id} onFocus={() => setFocus(focusTxt)} onClick={stopPropagation} autocomplete="off" onChange={handlerOnChange} ref={inputRef} id={id} class="block shadow-xl  py-2.5  w-full text-sm text-gray-900 bg-transparent  px-5 border border-[#dddddd] appearance-none  focus:outline-none focus:ring-0  peer rounded-[5px]" placeholder=" " required />
                <label for={id} class="z-50 peer-focus:font-medium absolute text-sm bg-white px-5 mx-2 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{node}</label>
            </div>

            {<div className={`  border overflow-auto  shadow-2xl transition-all ${focus === focusTxt ? 'h-[80px] mb-5' : 'h-[0]'}`}>


                {data.reduce((acc, i, index) => {
                    return acc.includes(i[node.toUpperCase()]) ? acc : [...acc, i[node.toUpperCase()]]
                }, []).map((i, index) => {
                    return <div class="relative z-0 w-full  group border-t border-[#dddddd] px-5 py-2  " onClick={() => inputRef.current.value = i}>
                        {i}
                    </div>
                })}


            </div>}
        </>

    )
}
