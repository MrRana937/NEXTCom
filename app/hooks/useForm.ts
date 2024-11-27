'use client'

import { useCallback, useState } from 'react'
import { z } from 'zod'

export function useForm<T extends z.ZodSchema>(schema: T) {
  const [values, setValues] = useState<any>({})
  const [errors, setErrors] = useState<any>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues((prev: any) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    try {
      schema.parse(values)
      setErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors: any = {}
        error.errors.forEach((err) => {
          if (err.path) {
            formattedErrors[err.path[0]] = err.message
          }
        })
        setErrors(formattedErrors)
      }
      return false
    }
  }

   const resetForm = useCallback(() => {
     setValues({})
     setErrors({})
   }, [])

   const setExistingEmail = useCallback((existingEmail: string) => {
     setValues((prev: any) => ({ ...prev, email: existingEmail }))
   }, [])

  return { values, errors, handleChange, validate, resetForm,setExistingEmail }
}
