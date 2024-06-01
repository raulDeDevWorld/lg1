'use client';
import { useUser } from '@/context/Context'
import { onAuth, signUpWithEmail } from '@/firebase/utils'
import { useEffect } from 'react'
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








const Button = ({ url, children,src }) => {
  return <button className='bg-[#ffbd2f] w-[200px] flex flex-col justify-center items-center  p-2 rounded-[5px]  m-3'>
    <img src={src} className='w-[100px]' alt="" />
    <a href={`/Admin/Edit/Section?item=${url}`} className='font-medium'> {children}</a>
  </button>
}
export default function Home() {

  const { user, introVideo, userDB, setUserProfile, setUserSuccess, success, setUserData, postsIMG, setUserPostsIMG } = useUser()
  const router = useRouter()


  const signUpHandler = (e) => {

  }

  useEffect(() => {

  }, [user, success]);


  console.log(user)
  return (

    <div className="min-h-full"
      style={{
        backgroundImage: 'url(/gif.gif)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
      }}>






      {/* <video  className='absolute top-0  w-full min-h-[100vh] object-cover z-10' autoPlay loop muted>
      <source src='underwater.mp4' type="video/mp4" />
    </video>  */}
      {/* <img src="/truck.png" className='absolute  w-screen h-screen bg-[#01A7EB] object-cover lg:hidden' alt="" /> */}

      <img src="/airplane-bg.jpg" className='absolute  w-screen h-screen bg-[#01A7EB] object-cover ' alt="" />

      <div className='relative  min-h-screen z-10 flex flex-col justify-center items-center'>

        <Button url='terrestre' src="/icons/TERRESTRE.png" > Transporte Terrestre  </Button>
        <Button url='maritimo' src="/icons/MARITIMO.png" > Transporte Maritimo  </Button>
        <Button url='aereo' src="/icons/AEREO.png" > Transporte Aereo  </Button>
        <Button url='proyecto' src="/icons/DESPACHO ADUANERO.png" > Carga Proyecto  </Button>
        <Button url='contactos' src="/icons/CARGA REFRIGERADA.png" > Contactos  </Button>

     
      </div>






      {/* <Section subtitle='TRANSPORTE TERRESTRE' video='/highway2.mp4' degrade='#00000067' id="terrestre"></Section>
      <Section subtitle='TRANSPORTE AEREO' video='/avion.mp4' degrade='#00000018' id="aereo"></Section>
      <Section subtitle='TRANSPORTE MARITIMO' video='/barco.mp4' degrade='#00529657' id="maritimo"></Section> */}


    </div>
  )
}
