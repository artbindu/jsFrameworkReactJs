import React from 'react'

export default function ToasterMsg(props) {
    const formatSentenceCase = (st) => {
        return typeof st === 'string' ? st.replace(/[A-Z]/g, x => x.toLowerCase())
            .replace(/(^|(?<=\.\s))[a-z]/g, x => x.toUpperCase()) : st;
    }
    const setDarkMode = (mode) => {
        return {
            position: 'absolute', 
            top: 0, right: 0, 
            display: 'inline-block', 
            color: mode === 'dark' ? 'White' : 'Black',
            backgroundColor: mode === 'dark' ? 'Black' : 'White'
        }
    }
    return (
        props.toaster && <div aria-live="polite" aria-atomic="true" style={{position: 'relative'}}>
        <div className="toast" style={setDarkMode(props.toaster.mode)}>
          <div className="toast-body">
          <strong>{formatSentenceCase(props.toaster.msg)}</strong>
          </div>
        </div>
      </div>
    )
}
