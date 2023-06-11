import { useEffect } from 'react'

export const usePersistentScroll = (searchParams: any) => {
  useEffect(() => {
    const persistentScroll = localStorage.getItem('persistentScroll')
    if (persistentScroll === null) return
    window.scrollTo({ top: Number(persistentScroll) })
    if (Number(persistentScroll) === window.scrollY)
      localStorage.removeItem('persistentScroll')
  }, [searchParams]);
}