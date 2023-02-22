import React from "react"
import { useState, useEffect } from "react"

type ReturnType<T> = [
    T | undefined,
    React.Dispatch<React.SetStateAction<T | undefined>>
]

export const useLocalStorage = <T>(
    key: string,
    initialValue?: T,
    track = false
): ReturnType<T> => {
    const [state, setState] = useState<T | undefined>(() => {
        if (!initialValue) return
        try {
            const value = localStorage.getItem(key)
            return value ? JSON.parse(value) : initialValue
        } catch (error) {
            return initialValue
        }
    })

    useEffect(() => {
        if (state) {
            try {
                localStorage.setItem(key, JSON.stringify(state))
            } catch (error) {
                console.log(error)
            }
        }
    }, [state, key])

    if (track) {
        const storageListener = () => {
            const value = localStorage.getItem(key)
            if (!value) return
            try {
                setState(JSON.parse(value))
            } catch (error) {
                console.error(
                    `The ${key} cannot track at this moment from the local storage.`
                )
            }
        }
        useEffect(() => {
            window.addEventListener("storage", storageListener)
            return () => window.removeEventListener("storage", storageListener)
        }, [])
    }

    return [state, setState]
}
