import React from 'react'

export default function About(props) {
    return (
      <div className={`container my-2 p-5 bg-${props.mode.status} text-${props.mode.textColor} shadow`} style={{ marginTop: "40px" }}>
        <p>This is online news portal using ReactJs.</p>
        <p>Take help form News API: &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://newsapi.org/">
            <div class="btn-group border border-3 border-primary shadow" role="group" aria-label="Basic mixed styles example">
              <button type="button" class="btn btn-primary btn-sm bg-na-blue">News</button>
              <button type="button" class="btn btn-light btn-sm bg-na-white">API</button>
            </div>
          </a></p>
      </div>
    )
}
