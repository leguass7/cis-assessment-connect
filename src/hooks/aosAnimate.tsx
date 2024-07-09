import React, { useCallback, useEffect, useRef } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

type Callback = (...args: any[]) => Promise<any> | any | void

export function useOnceCall(cb: Callback, condition = true) {
  const isCalledRef = useRef(false)

  useEffect(() => {
    if (condition && !isCalledRef.current) {
      isCalledRef.current = true
      cb()
    }
  }, [cb, condition])
}

export const useAOSAnimation = (options = {}) => {
  const initializeAOS = useCallback(() => {
    AOS.init({
      delay: 100,
      duration: 600,
      easing: 'ease-in-out',
      offset: 200,
      ...options,
    })
    AOS.refresh()
  }, [options])

  useOnceCall(initializeAOS)

  return { aos: initializeAOS }
}
