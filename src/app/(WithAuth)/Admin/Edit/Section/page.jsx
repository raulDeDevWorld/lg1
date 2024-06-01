'use client';
import { useUser } from '@/context/Context'
import { onAuth, signUpWithEmail, writeUserData } from '@/firebase/utils'
import { uploadIMG } from '@/firebase/storage'
import { Suspense } from 'react'
   
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from '@/app/page.module.css'
// import Button from '@/components/Button'
import Error from '@/components/Error'
import Video from '@/components/Video'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"
import Input from '@/components/Input'
import { useRouter } from 'next/navigation';
import Subtitle from '@/components/Subtitle'
import TextEditor from '@/components/TextEditor'
// import { useSearchParams } from 'next/navigation'






export default function Home() {



    const Button = ({ children }) => {
        return <Suspense ><button className='bg-[#ffbd2f] w-[200px] p-2 rounded-[5px] inline'>
            {children}
        </button></Suspense>
    }
    const { user, introVideo, userDB, setUserProfile, setUserSuccess, success, setUserData, postsIMG, setUserPostsIMG, item, cliente, setCliente, cart, setCart } = useUser()
    const router = useRouter()

    const [counter, setCounter] = useState([''])

    //    console.log(window.location.href.split('=')[1]) 
    const [textEditor, setTextEditor] = useState("")

    // const searchParams = useSearchParams()
    const [query, setQuery] = useState('')

    const [data, setData] = useState({})
    const [data2, setData2] = useState({})

    const [dataURL, setDataURL] = useState({})
    const [check, setCheck] = useState(false)
    // const inputRefWhatsApp = useMask({ mask: '+ 591 __ ___ ___', replacement: { _: /\d/ } });
    const toggleClass = " transform translate-x-5 bg-[blue]";


    function checkHandler() {
        setCheck(!check)
    }
    function onChangeHandler(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    function onChangeHandler2(e, index) {
        setData2({ ...data2, [`item${index}`]: { ...data2[`item${index}`], [e.target.name]: e.target.value } })
    }
    console.log(data2)
    function handlerImage(e) {
        setDataURL({
            ...dataURL,
            [e.target.name]: URL.createObjectURL(e.target.files[0]),
            file: e.target.files[0]
        })
    }

    console.log(dataURL)
    function saveFrontPage(e) {
        e.preventDefault()
        if (e.target[0].files[0]) {
            uploadIMG(`/Cliente/${query}`, '/', query, dataURL.file, { ...data, tarjetas: data2 })
        } else {
            writeUserData(`/Cliente/${query}`, { ...data, tarjetas: data2 })
        }

  
    }
    function addService(e) {
        e.preventDefault()

        const filename = generateUUID()
        const obj = {
            ['servicio remoto']: check,
            [e.target[1].name]: e.target[1].value,
            [e.target[2].name]: e.target[2].value,
            [e.target[3].name]: e.target[3].value,
            [e.target[4].name]: e.target[4].value,
            [e.target[5].name]: e.target[5].value,
            [e.target[6].name]: e.target[6].value,
        }

        console.log(obj)
        e.target[0].files[0] && uploadIMG(`services/${item !== undefined ? item.uid : filename}`, 'services', filename, e.target[0].files[0], obj, setUserData, setUserSuccess, 'url')
        e.target[0].files[0] === undefined && writeUserData(`services/${item !== undefined ? item.uid : filename}`, obj, setUserData, setUserSuccess)

    }


    function addArticle(e) {
        e.preventDefault()

        const filename = generateUUID()
        const obj = {
            [e.target[1].name]: e.target[1].value,
            [e.target[2].name]: e.target[2].value,
        }
        e.target[0].files[0] && uploadIMG(`articleIMG/IMG2023`, 'articleIMG', 'IMG2023', e.target[0].files[0], {}, setUserData, setUserSuccess, 'url')
        Object.keys(obj).length > 0 && writeUserData(`articles/${item !== undefined ? item : filename}`, obj, setUserData, setUserSuccess)
    }
    


    function addTestimonies(e) {
        e.preventDefault()

        const filename = generateUUID()
        const obj = {
            [e.target[1].name]: e.target[1].value,
            [e.target[2].name]: e.target[2].value,
        }

        console.log(obj)
        e.target[0].files[0] && uploadIMG(`testimonies/${item !== undefined ? item.uid : filename}`, 'testimonies', filename, e.target[0].files[0], obj, setUserData, setUserSuccess, 'url')
        e.target[0].files[0] === undefined && writeUserData(`testimonies/${item !== undefined ? item.uid : filename}`, obj, setUserData, setUserSuccess)

    }




    function addContact(e) {
        e.preventDefault()

        // const filename = generateUUID()
        const obj = {
            [e.target[0].name]: e.target[0].value,
            [e.target[1].name]: e.target[1].value,
            [e.target[2].name]: e.target[2].value,
            [e.target[3].name]: e.target[3].value,
            [e.target[4].name]: e.target[4].value,
            [e.target[5].name]: e.target[5].value,
            [e.target[6].name]: e.target[6].value,
            [e.target[7].name]: e.target[7].value,
            [e.target[8].name]: e.target[8].value,
            [e.target[9].name]: e.target[9].value,
        }
        writeUserData(`Cliente/contactos/`, obj)
    }

    function close(e) {
        // setUserModal(false)
        // setCheck(false)
        router.back()
    }
    console.log(item)






    useEffect(() => {
        // setData(userDB)


        if (cliente && cliente[query] && cliente[query] && cliente[query].content) {
            setTextEditor(cliente[query].content)
        } else {
        }

        // if (window && typeof window !== "undefined") {
        //     setQuery(window.location.href.split('=')[1])
        // }


    }, [cliente])

    console.log(check)
















    function Item({ e1, e2 }) {
        return <ScrollAnimation animateIn='flipInX'
            afterAnimatedIn={function afterAnimatedIn(v) {
                var t = "Animate In finished.\n";
                t += 'v.onScreen: ' + v.onScreen + '\n';
                t += 'v.inViewport: ' + v.inViewport;

            }}
            initiallyVisible={true}>
            <div className='flex flex-col justify-center items-center'>
                <span className='text-[30px] text-black font-medium'>{e1}</span>
                <span className='text-center text-black'>{e2}</span>
            </div>
        </ScrollAnimation>
    }






useEffect(()=>{

},[])        



    console.log(counter)
    return (
        <Suspense >

            <div className="min-h-full"
                style={{
                    backgroundImage: 'url(/gif.gif)',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover'
                }}>


                <div className="fixed top-0 left-0 flex justify-center w-full h-auto bg-[#000000b4] p-0 z-40 " >
                    <form className="relative w-[95%] h-screen overflow-y-scroll lg:w-[50%] bg-white border-b border-gray-900/10 pt-16 pb-16 lg:pb-4 px-5" onSubmit={saveFrontPage} >
                        <div className="col-span-full">
                            <h2 className="text-base font-bold leading-7 text-gray-900  text-center p-5 ">Administrar secciones</h2>
                            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">Video de imagen de fondo</label>
                            <div className="w-full flex justify-center">
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 md:w-[250px] md:h-[200px]"
                                    style={{
                                        backgroundImage: `url('${dataURL && dataURL.frontPage && dataURL.frontPage ? dataURL.frontPage : (userDB && userDB.frontPage && userDB.frontPage.url)}')`,
                                        backgroundSize: 'contain',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }}>
                                    <div className="text-center">
                                        <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                                        </svg>
                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label htmlFor="fileUpload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                <span>Subir video</span>
                                                <input id="fileUpload" name="frontPage" onChange={handlerImage} type="file" accept="video/*" className="sr-only" />
                                            </label>
                                            <p className="pl-1">menos de 5mb</p>
                                        </div>
                                        <p className="text-xs leading-5 text-gray-600">MP4</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-center p-5'>
                                <Suspense >

                                    <video src={dataURL && dataURL.frontPage && dataURL.frontPage ? dataURL.frontPage : (cliente && cliente[query] && cliente[query].url)} className='h-[300px]' autoPlay loop muted ></video>
                                </Suspense >

                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Titulo</label>
                            <input type="text" name="titulo" onChange={onChangeHandler} className="block w-full rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={cliente && cliente[query] && cliente[query].titulo} />
                        </div>
                        <div className="border-b border-gray-900/10 pb-12">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Contenido de texto</label>

                                    <TextEditor value={textEditor ? textEditor : 'nada'} setValue={setTextEditor} edit={true} ></TextEditor>
                                </div>
                            </div>
                        </div>


                        <div className='w-full text-[white] grid grid-cols-2 gap-5 py-12'>
                            {cliente && cliente !== undefined && cliente['terrestre'].tarjetas && cliente['terrestre'].tarjetas !== undefined && Object.values(cliente['terrestre'].tarjetas).map((i, index) => <Item e1={i[`ip${index}`]} e2={i[`ic${index}`]} />)}
                            {/* <Item e1={i['ip0']} e2={i['ic0']} /> */}
                        </div>

                        <div class="inline-flex">
                            <button class="bg-red-500 text-white font-bold py-2 px-4 rounded-l">
                                -
                            </button>
                            <button class="bg-green-500 text-white font-bold py-2 px-4 rounded-r" onClick={() => setData2([...counter, ''])} >
                                +
                            </button>
                        </div>
                        {cliente && cliente !== undefined && cliente['terrestre'].tarjetas && cliente['terrestre'].tarjetas !== undefined && Object.values(cliente['terrestre'].tarjetas).map((i, index) => {
                            return <div className="sm:col-span-3 mb-5 pb-5 border-b-[.5px] border-[#666666]">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Item principal</label>
                                <input type="text" name={`ip${index}`} onChange={(e) => onChangeHandler2(e, index)} className="block w-full rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={data && data.contactos && data.contactos['departamento']} />

                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Item contenido</label>
                                <input type="text" name={`ic${index}`} onChange={(e) => onChangeHandler2(e, index)} className="block w-full rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={data && data.contactos && data.contactos['departamento']} />
                            </div>
                        })
                        }






                        <div className="mt-6 flex items-center justify-center gap-x-6">
                            <Button type="submit" theme="Primary">Guardar</Button>
                        </div>
                        <div className="absolute w-[50px] top-5 right-5 text-white p-1 rounded-tl-lg rounded-br-lg text-center bg-red-600" onClick={close}>
                            X
                        </div>
                    </form>
                </div>
                {
                    query === 'contactos' && <div className="fixed top-0 flex justify-center w-full h-auto bg-[#000000b4] p-0 z-40">
                        <form className="relative w-[95%] h-screen overflow-y-scroll lg:w-[50%] bg-white border-b border-gray-900/10 pt-16 pb-4 px-5" onSubmit={addContact}>
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Administrar contactos</h2>

                            <div className="border-b border-gray-900/10 pb-12">
                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Departamento</label>
                                        <input type="text" name="departamento" className="block w-full rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={data && data.contactos && data.contactos['departamento']} />
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Dirección 1</label>
                                        <input type="text" name="direccion 1" className="block w-full rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={data && data.contactos && data.contactos['direccion 1']} />
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Dirección 2</label>
                                        <input type="text" name="direccion 2" className="block w-full rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={data && data.contactos && data.contactos['direccion 2']} />
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Telefono</label>
                                        <input type="text" name="telefono" className="block w-full rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={data && data.contactos && data.contactos['telefono']} />
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Celular</label>
                                        <input type="text" name="celular" className="block w-full rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={data && data.contactos && data.contactos['celular']} />
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Facebook</label>
                                        <input type="text" name="facebook" className="block w-full rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={data && data.contactos && data.contactos['facebook']} />
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">TiK Tok</label>
                                        <input type="text" name="twiter" className="block w-full rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={data && data.contactos && data.contactos['twiter']} />
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="first-name" className="block 
                                  text-sm font-medium leading-6 text-gray-900">Gmail</label>
                                        <input type="text" name="gmail" className="block w-full rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={data && data.contactos && data.contactos['gmail']} />
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Instagram</label>
                                        <input type="text" name="instagram" className="block w-full rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={data && data.contactos && data.contactos['instagram']} />
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Linkedin</label>
                                        <input type="text" name="linkedin" className="block w-full rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={data && data.contactos && data.contactos['linkedin']} />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                <Button type="submit" theme="Primary" >Guardar</Button>
                            </div>
                            <div className="absolute w-[50px] top-5 right-5 text-white p-1 rounded-tl-lg rounded-br-lg text-center bg-red-600" onClick={close}>
                                X
                            </div>
                        </form>
                    </div>}









            </div>
        </Suspense>
    )
}











{/* <div className="col-span-full">
                        <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">Imagen de portada</label>
                        <div className="w-full flex justify-center">
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 md:w-[250px] md:h-[200px]" style={{ backgroundImage: `url('${dataURL && dataURL.frontIMG && dataURL.frontIMG ? dataURL.frontIMG : (userDB && userDB.frontPage && userDB.frontPage.urlIMG)}')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                                <div className="text-center">
                                    <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                                    </svg>
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label htmlFor="fileUploadIMG" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                            <span>Upload a file</span>
                                            <input id="fileUploadIMG" name="frontIMG" onChange={handlerImage} type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
