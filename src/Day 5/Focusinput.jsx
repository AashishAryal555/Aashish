import React, { useRef } from 'react'

export default function FocusInput() {

    const InputRef = useRef(null);
    const handleFocus = () => {
        InputRef.current.focus();
    };

  return (
    <div>
      <input ref={InputRef} type="text" /><br />
      <input type="text" /><br />

      <button onClick={handleFocus}>Noob</button>
    </div>
  )
}