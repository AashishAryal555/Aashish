import React from 'react'

export default function Array() {

 let Arrayy = ["BMW","RR","BYD"];



  return (
    <div style={{textAlign:'center',marginTop:"50px"}}>
      <strong>Array Elements:</strong>
      <ul style={{listStyle: 'none', padding: 0}}>
        {Arrayy.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
