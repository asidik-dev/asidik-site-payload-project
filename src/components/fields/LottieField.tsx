'use client'
import React from 'react'
import { FieldLabel, TextareaInput, useField } from '@payloadcms/ui'
import { TextareaFieldClientComponent } from 'payload'
import LottieView from '@/components/fields/LottieView'

const LottieField: TextareaFieldClientComponent = (props) => {
  const {value, setValue} = useField<string>();


  return (


    <div>
      <FieldLabel
        htmlFor={props.path}
        label={props.field.label}
        required={props.field.required}
      />
      <div style={{
        display: "flex"
      }}>
        <TextareaInput style={{
          flex: 1,
          maxHeight: '150px',
          overflow: "scroll",
        }} path={props.path}  value={value} onChange={e => setValue(e)}  />

        <div style={{
          flex: 1,
          maxHeight: '150px',
          padding: 10
        }}>

          <LottieView json={value || ""}/>

        </div>
      </div>



    </div>
  )
}

export { LottieField }
