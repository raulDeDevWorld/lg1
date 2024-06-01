'use client'
import { useUser } from '@/context/Context'
import { onAuth, signInWithEmail } from '@/firebase/utils'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Error from '@/components/Error'
import BottomNavigation from '@/components/BottomNavigation'

import { useRouter } from 'next/navigation';


export default function Home() {
    const { user, introVideo, userDB, setUserProfile, setUserSuccess, success, setUserData, postsIMG, setUserPostsIMG } = useUser()

    const router = useRouter()

    const [data, setData] = useState({})




    function onChangeHandler(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }



    const signInHandler = (e) => {
        e.preventDefault()
        let email = e.target[0].value
        let password = e.target[1].value
        email.length !== 0 && password.length !== 0 ? signInWithEmail(email, password, setUserSuccess) : setUserSuccess('Complete')
    }



    useEffect(() => {
        user === undefined && onAuth(setUserProfile)
        if (user !== undefined && user !== null) router.replace('/')
    }, [user])

    return (
        <div className="h-full "
            style={{
                backgroundImage: 'url(/gif.gif)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover'
            }}>

            <div className=' w-screen pt-[50px] min-h-screen bg-gradient-to-t from-[#00061860] to-[#000618d1] flex flex-col justify-center items-center  z-10'>

                {/* <video  className='absolute top-0  w-full min-h-[100vh] object-cover z-10' autoPlay loop muted>
      <source src='underwater.mp4' type="video/mp4" />
    </video>  */}

                <img src="/truck.png" className='fixed top-0 w-screen h-screen bg-[#01A7EB] object-cover lg:hidden' alt="" />
                <img src="/airplane-bg.jpg" className='fixed top-0  w-screen h-screen bg-[#01A7EB] object-cover hidden md:block' alt="" />
                <div className='w-full text-center flex justify-center'>
                    <img src="/logo.svg" className='w-[300px] z-10' alt="User" />
                </div>
                <form className={`space-y-6 lg:space-y-3 w-[100%] rounded-[30px] max-w-[350px] z-10 lg:scale-110`} onSubmit={signInHandler} >

                    <br />



                    <div className='space-y-4 bg-[#00061860] p-5  rounded-[10px] lg:space-y-3 bg-white'>

                        <h5 className="text-[16px] text-center font-bold text-[#636363] z-[50]">CALCULO POR PESO VOLUMETRICO POR DIMENSIONES</h5>
                        <p>aquí solo debes remplazar los datos en centimetros mas la cantidad para que se calcule automaticamente el peso volumetrico



                        </p>
                        <div class="relative z-0 w-full mb-5 group ">
                            <input type="number" name="f1" onChange={onChangeHandler} id="floating_email" class="block shadow-xl  py-2.5  w-full text-sm text-gray-900 bg-transparent  px-5 border border-[#dddddd] appearance-none  focus:outline-none focus:ring-0  peer rounded-[5px]" placeholder=" " required />
                            <label for="floating_email" class="z-50 peer-focus:font-medium absolute text-sm bg-white px-5 mx-2 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Largo cm</label>
                        </div>
                        <div class="relative z-0 w-full mb-5 group ">
                            <input type="number" name="f2" onChange={onChangeHandler} id="floating_email" class="block shadow-xl  py-2.5  w-full text-sm text-gray-900 bg-transparent  px-5 border border-[#dddddd] appearance-none  focus:outline-none focus:ring-0  peer rounded-[5px]" placeholder=" " required />
                            <label for="floating_email" class="z-50 peer-focus:font-medium absolute text-sm bg-white px-5 mx-2 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ancho cm</label>
                        </div>
                        <div class="relative z-0 w-full mb-5 group ">
                            <input type="number" name="f3" onChange={onChangeHandler} id="floating_email" class="block shadow-xl  py-2.5  w-full text-sm text-gray-900 bg-transparent  px-5 border border-[#dddddd] appearance-none  focus:outline-none focus:ring-0  peer rounded-[5px]" placeholder=" " required />
                            <label for="floating_email" class="z-50 peer-focus:font-medium absolute text-sm bg-white px-5 mx-2 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Alto cm</label>
                        </div>
                        <div class="relative z-0 w-full mb-5 group ">
                            <input type="number" name="f4" onChange={onChangeHandler} id="floating_email" class="block shadow-xl  py-2.5  w-full text-sm text-gray-900 bg-transparent  px-5 border border-[#dddddd] appearance-none  focus:outline-none focus:ring-0  peer rounded-[5px]" placeholder=" " required />
                            <label for="floating_email" class="z-50 peer-focus:font-medium absolute text-sm bg-white px-5 mx-2 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cantidad</label>
                        </div>
                        <div class="relative z-0 w-full mb-5 group ">
                            <input type="number" value={data.f1 && data.f2 && data.f3 && data.f4 && ((data.f1*data.f2*data.f3)*data.f4)/6000} name="floating_email" id="floating_email" class="block shadow-xl  py-2.5  w-full text-sm text-gray-900 bg-transparent  px-5 border border-[#dddddd] appearance-none  focus:outline-none focus:ring-0  peer rounded-[5px]" placeholder=" " required />
                            <label for="floating_email" class="z-50 peer-focus:font-medium absolute text-sm bg-white px-5 mx-2 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Peso volumetrico</label>
                        </div>


                        <Button type="submit" theme="Primary">CALCULAR</Button>
                        <div className="text-[14px] text-center font-medium text-white">No tienes una cuenta? <Link href="/SignUp" className="text-gray-100 hover:underline">Registrate</Link ></div>

                    </div>
                </form>

                <form className={`space-y-6 lg:space-y-3 w-[100%] rounded-[30px] max-w-[350px] z-10 lg:scale-110`} onSubmit={signInHandler} >

                    <br />
                    <div className='space-y-4 bg-[#00061860] p-5  rounded-[10px] lg:space-y-3 bg-white'>

                        <h5 className="text-[16px] text-center font-bold text-[#636363] z-[50]">CALCULO DEL PESO VOLUMETRICO POR M3</h5>
                        <p>aquí solo debes poner los m3 de tu(s) cajas o paquetes mas la cantidad y automaticamente se calculara el peso volumetrico


                        </p>
                        <div class="relative z-0 w-full mb-5 group ">
                            <input type="number" name="f21" onChange={onChangeHandler} id="floating_email" class="block shadow-xl  py-2.5  w-full text-sm text-gray-900 bg-transparent  px-5 border border-[#dddddd] appearance-none  focus:outline-none focus:ring-0  peer rounded-[5px]" placeholder=" " required />
                            <label for="floating_email" class="z-50 peer-focus:font-medium absolute text-sm bg-white px-5 mx-2 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">m3</label>
                        </div>
                        <div class="relative z-0 w-full mb-5 group ">
                            <input type="number" name="f22" onChange={onChangeHandler} id="floating_email" class="block shadow-xl  py-2.5  w-full text-sm text-gray-900 bg-transparent  px-5 border border-[#dddddd] appearance-none  focus:outline-none focus:ring-0  peer rounded-[5px]" placeholder=" " required />
                            <label for="floating_email" class="z-50 peer-focus:font-medium absolute text-sm bg-white px-5 mx-2 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cantidad</label>
                        </div>
                        <div class="relative z-0 w-full mb-5 group ">
                            <input type="number" name="f23" value={data.f21 && data.f22 && Math.round(((data.f21*1000000)*data.f22)/6000)} id="floating_email" class="block shadow-xl  py-2.5  w-full text-sm text-gray-900 bg-transparent  px-5 border border-[#dddddd] appearance-none  focus:outline-none focus:ring-0  peer rounded-[5px]" placeholder=" " required />
                            <label for="floating_email" class="z-50 peer-focus:font-medium absolute text-sm bg-white px-5 mx-2 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Peso volumetrico</label>
                        </div>



                        <Button type="submit" theme="Primary">CALCULAR</Button>
                        <div className="text-[14px] text-center font-medium text-white">No tienes una cuenta? <Link href="/SignUp" className="text-gray-100 hover:underline">Registrate</Link ></div>

                    </div>
                </form>

                <form className={`space-y-6 lg:space-y-3 w-[100%] rounded-[30px] max-w-[350px] z-10 lg:scale-110`} onSubmit={signInHandler} >

                    <br />
                    <div className='space-y-4 bg-[#00061860] p-5  rounded-[10px] lg:space-y-3 bg-white'>

                        <h5 className="text-[16px] text-center font-bold text-[#636363] z-[50]">PESO CARGABLE TRANSPORTE AEREO</h5>
                        <p>aquí se debe poner el peso de la carga y el peso cargable para transporte aereo sera el mayor de los 2


                        </p>
                        <div class="relative z-0 w-full mb-5 group ">
                            <input type="number" name="f1" onChange={onChangeHandler} id="floating_email" class="block shadow-xl  py-2.5  w-full text-sm text-gray-900 bg-transparent  px-5 border border-[#dddddd] appearance-none  focus:outline-none focus:ring-0  peer rounded-[5px]" placeholder=" " required />
                            <label for="floating_email" class="z-50 peer-focus:font-medium absolute text-sm bg-white px-5 mx-2 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Peso kg</label>
                        </div>
                        <div class="relative z-0 w-full mb-5 group ">
                            <input type="number" name="f2" id="floating_email" class="block shadow-xl  py-2.5  w-full text-sm text-gray-900 bg-transparent  px-5 border border-[#dddddd] appearance-none  focus:outline-none focus:ring-0  peer rounded-[5px]" placeholder=" " required />
                            <label for="floating_email" class="z-50 peer-focus:font-medium absolute text-sm bg-white px-5 mx-2 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Peso volumetrico</label>
                        </div>




                        <Button type="submit" theme="Primary">CALCULAR</Button>
                        <div className="text-[14px] text-center font-medium text-white">No tienes una cuenta? <Link href="/SignUp" className="text-gray-100 hover:underline">Registrate</Link ></div>

                    </div>
                </form>
            </div>

            {success == 'AccountNonExist' && <Error>Cuenta inexistente</Error>}
            {success == 'Complete' && <Error>Complete el formulario</Error>}
        </div>
    )
}





