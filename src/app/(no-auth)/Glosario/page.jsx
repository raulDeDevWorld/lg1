'use client';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react'
import { useUser } from '@/context/Context'
import Link from 'next/link'
import { handleSignOut } from '@/firebase/utils'
import Modal from '@/components/Modal'
import { glosario } from '@/db'



export default function BottomNavigation({ rol }) {
    const { user, userDB, modal, setModal, setUserProfile, setUserData, setUserProduct, setRecetaDB, setUserCart, setUserDistributorPDB, filter, setFilter, nav, setNav, navItem, setNavItem } = useUser()
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    // const [filter, setFilter] = useState('')
    const router = useRouter()
    const pathname = usePathname()
    function openNav(e) {
        e.preventDefault()
        e.stopPropagation()
        setNav(!nav)
    }

    function handlerNavItem(item) {
        navItem === item
            ? setNavItem('')
            : setNavItem(item)
    }
    const controlNavbar = () => {
        if (window.scrollY > lastScrollY) {
            setShow(false);
            setFilter('')

        } else {
            setFilter('')
            setShow(true);
        }
        setLastScrollY(window.scrollY);
    };


    console.log(filter)
    function handlerFilter(e) {
        setFilter(e.target.value)
        console.log(filter)
    }


    console.log()


    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY, show, filter]);
    return <div className='bg-[#fffffff8] w-screen p-5 mt-[80px] '>
        {
            Object.entries(glosario).map((i, index) => {
                return i[0].toUpperCase().includes(filter.toUpperCase()) && <div className='pb-[10px]'><span className='block font-bold'>{i[0]}</span>{i[1]}<span></span> </div>
            })
        }
    </div>

}








// {
//     filter.length > 1 &&
//     <div className='bg-[#fffffff8] w-screen fixed top-[60px] left-0 p-5 max-h-[50vh]'>
//          {Object.entries(glosario).map((i, index) => {
//              return i[0].toUpperCase().includes(filter.toUpperCase()) && <div className='pb-[10px]'><span className='block font-bold'>{i[0]}</span>{i[1]}<span></span>
//              </div>
//          })
//          }

//     }
