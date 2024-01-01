import React from 'react'

export default function Spinner(props) {
        return (
            <div>
                <div className="d-flex justify-content-center">
                    <button className={`btn btn-${props.mode.btnColor}`} type="button" disabled>
                        <span className="spinner-border spinner-border-lg" role="status" aria-hidden="true"></span>
                        &nbsp;&nbsp;<h1>Loading...</h1>
                    </button>
                </div>
            </div>
        )
}
