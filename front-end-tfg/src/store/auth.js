import {create} from 'zustand'
import {persist} from 'zustand/middleware'


export const useAuthStore = create(persist(
    (set)=>({
        token:null,
        profile:null,
        isAuth:false,
        setToken:(token) => set((state)=> ({
            token,
            isAuth:true

        })),
        setProfile:(profile)=>set(state => ({
            profile
        })),
        logOut:()=>set(state =>({
            token:'',
            isAuth:false,
            profile:null
        }))
    }),{
        name:'auth'
    }
))