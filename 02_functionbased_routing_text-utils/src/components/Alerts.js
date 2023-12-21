import React from 'react'

export default function Alerts(props) {
    const formatSentenceCase = (st) => {
        return typeof st === 'string' ? st.replace(/[A-Z]/g, x => x.toLowerCase())
        .replace(/(^|(?<=\.\s))[a-z]/g, x => x.toUpperCase()) : st;
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{formatSentenceCase(props.alert.msg)}</strong>
            {/* If we click on close btn, then "Alert" Component will deleted in UI. So, User should not dismiss the alert  */}
            {/* <button type="button" className="btn-close" aria-label="Close" data-bs-dismiss="alert"></button> */}
        </div>
    )
}
