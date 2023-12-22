import React, { Component } from 'react'

export default class Spinner extends Component {
    render() {
        return (
            <div>
                <div className="d-flex justify-content-center">
                    <button className={`btn btn-${this.props.mode.btnColor}`} type="button" disabled>
                        <span className="spinner-border spinner-border-lg" role="status" aria-hidden="true"></span>
                        &nbsp;&nbsp;<h1>Loading...</h1>
                    </button>
                </div>
            </div>
        )
    }
}
