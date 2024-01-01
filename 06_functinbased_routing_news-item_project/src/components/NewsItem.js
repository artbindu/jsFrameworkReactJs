import React from 'react';
import sample_news from '../assets/images/sample_news.avif';

export default function NewsItem(props) {
    const showFormattedText = (_st = "", value = 0) => {
        _st = !_st ? '' : _st;
        let st = _st
        // remove last word and then special characters is exists
        st = st.slice(0, value).trim().replace(st.trim().match(/[^(\s|\w)](\s\W)?\s[a-z0-9]+$/gi), '');
        // console.log(`Actual String: ${_st.length}; Current String: ${st.length}`);
        return ''.concat(st, (_st.length > value ? "..." : ''));
    }
    const showAuthor = function (_auth, _dt) {
        let d = _dt ? new Date(_dt) : null;
        d = d.toDateString() + " " + d.toLocaleTimeString().replace(/\:\d{2}\s/g, ' ');
        // Remove URL from Author
        _auth = _auth ? _auth.replace(/(www|http:|https:)+[^\s]+[\w]/gi, '') : '';
        // Short Multiple Authors
        _auth = (_auth && (_auth.split(/\,/g)?.length > 1 || _auth.split(/\s/g)?.length > 2)) ? _auth.split(/\,/g).map(x => x.replace(/(?<=[a-z])[a-z]+\s/gi, '. ')).join(',') : _auth;
        return (_auth ? `By ${_auth}` : 'Publish') + (d ? ` on ${d}` : '')
    }

    // { // Sample Data
    //     "author": "Author",
    //     "title": "News Title",
    //     "description": "News Description - News Description",
    //     "url": "http://localhost:3000/",
    //     "urlToImage": "https://artbindu.github.io/artbindu/images/profile/cc-bg-1.jpg",
    //     "publishedAt": "2023-12-19T06:29:31Z",
    //     "content": "Sample News"
    // }
    let { title, description, imageUrl, newsUrl, author, date, source, mode } = props;
    return (
        <div className='my-3 shadow'>
            <div className={`card bg-${props.mode.status} text-${props.mode.textColor} border border-${props.mode.textColor} shadow`} style={{ minHeight: "480px", maxHeight: "480px" }}>

                <img src={imageUrl ? imageUrl : sample_news} className={`card-img-top border border-${props.mode.textColor}`} alt="..." style={{ height: "200px" }} />
                {/* <span className="badge bg-danger">{source.name ? source.name : 'NEWS'}</span> */}
                <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}>
                    <span class="badge rounded-pill bg-danger">
                        {source.name ? source.name : 'NEWS'}
                    </span>
                </div>
                <div className="card-body">
                    <div style={{ height: "200px" }}>
                        <h5 className="card-title">{showFormattedText(title, 50)}
                        </h5>
                        <p className="card-text">{showFormattedText(description, 140)}</p>
                        <p className="card-text">
                            <small className="text-muted">{showAuthor(author, date)}</small>
                        </p>
                    </div>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className={`btn btn-sm btn-${mode.btnColor}`}>View Details</a>
                </div>
            </div>
        </div>
    )
}
