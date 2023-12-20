import React, { Component } from 'react'

export class NewsItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }
    showFormattedText(st, value) {
        return ''.concat(st.slice(0, value).trim(), " . . .");
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
        let { title, description, imageUrl, newsUrl, mode } = this.props;
        return (
            <div className='my-3'>
                <div className={`card bg-${this.props.mode.status} text-${this.props.mode.textColor} border border-${this.props.mode.textColor}`} style={{ minHeight: "500px", maxHeight: "500px" }}>
                    <img src={imageUrl ? imageUrl : '/assets/images/sample_news.avif'} className={`card-img-top border border-${this.props.mode.textColor}`} alt="..." style={{ height: "200px" }} />
                    <div className="card-body">
                        <div style={{ height: "230px" }}>
                            <h5 className="card-title">{this.showFormattedText(title, 80)}</h5>
                            <p className="card-text">{this.showFormattedText(description, 180)}</p>
                        </div>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className={`btn btn-sm btn-${mode.btnColor}`}>View Details</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
