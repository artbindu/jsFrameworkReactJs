import React, { Component } from 'react';
import sample_news from '../assets/images/sample_news.avif';

export class NewsItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }
    showFormattedText(_st = "", value) {
        _st = !_st ? '' : _st;
        let st = _st
        // remove last word and then special characters is exists
        st = st.slice(0, value).trim().replace(st.trim().match(/[^(\s|\w)](\s\W)?\s[a-z0-9]+$/gi), '');
        console.log(`Actual String: ${_st.length}; Current String: ${st.length}`);
        return ''.concat(st, (_st.length > value ? "..." : ''));
    }
    showAuthor(_auth, _dt) {
        let d = _dt ? new Date(_dt) : null;
        d = d.toDateString() + " " + d.toLocaleTimeString().replace(/\:\d{2}\s/g, ' ');
        return (_auth ? `By ${_auth}` : 'Publish') + (d ? ` on ${d}` : '')
    }

    render() {
        // { // Sample Data
        //     "author": "Author",
        //     "title": "News Title",
        //     "description": "News Description - News Description",
        //     "url": "http://localhost:3000/",
        //     "urlToImage": "https://artbindu.github.io/artbindu/images/profile/cc-bg-1.jpg",
        //     "publishedAt": "2023-12-19T06:29:31Z",
        //     "content": "Sample News"
        // }
        let { title, description, imageUrl, newsUrl, author, date, source, mode } = this.props;
        return (
            <div className='my-3 shadow'>
                <div className={`card bg-${this.props.mode.status} text-${this.props.mode.textColor} border border-${this.props.mode.textColor} shadow`} style={{ minHeight: "480px", maxHeight: "480px" }}>
                    <img src={imageUrl ? imageUrl : sample_news} className={`card-img-top border border-${this.props.mode.textColor}`} alt="..." style={{ height: "200px" }} />
                    <span class="badge bg-danger">{source.name ? source.name : 'NEWS'}</span>
                    <div className="card-body">
                        <div style={{ height: "200px" }}>
                            <h5 className="card-title">{this.showFormattedText(title, 50)}
                            </h5>
                            <p className="card-text">{this.showFormattedText(description, 140)}</p>
                            <p className="card-text">
                                <small className="text-muted">{this.showAuthor(author, date)}</small>
                            </p>
                        </div>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className={`btn btn-sm btn-${mode.btnColor}`}>View Details</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
