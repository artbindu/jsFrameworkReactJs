import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import sample_news from '../assets/images/sample_news.avif';
import apiConfig from '../config/apiConfig';

import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {
    static defaultProps = {
        country: 'in',
        page: 1,
        pageSize: 8,
        category: 'general'
    }
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            pageSize: 9,
            totalPage: 0,
            loading: true,
            // articles: this.createTestingData(10), // dummy data
            articles: [],
        };
    }

    createTestingData = (n) => {
        let x = [];
        for (let i = 0; i < n; i++) {
            x.push({
                "author": "Author",
                "title": "News Title",
                "description": "News Description - News Description - News Description - News Description - News Description - News Description - News Description",
                "url": `http://localhost:3000/home/${i}`,
                "urlToImage": sample_news,
                "publishedAt": "2023-12-19T06:29:31Z",
                "content": "Sample News"
            });
        }
        return x;
    }

    async componentDidMount(pageInfo = { page: 1, pageSize: this.state.pageSize }) {
        let apiDetails = apiConfig.apiInfo.getNews;
        // update query details
        let queryDetails = apiDetails.query;
        queryDetails.apiKey = apiConfig.apiKey.onlineBindu;
        queryDetails.country = apiConfig.countries[this.formatText(this.props.country)];
        queryDetails.language = apiConfig.languages[this.formatText(this.props.lang)];
        queryDetails.category = this.props.category;
        queryDetails.page = pageInfo.page;
        queryDetails.pageSize = pageInfo.pageSize;
        console.log('queryDetails: ', queryDetails);
        // API call
        let reqUrl = `${apiDetails.url}?${new URLSearchParams(queryDetails).toString()}`;
        console.log('reqUrl: ', reqUrl);
        let data = null;
        let parseData = null;
        data = await fetch(reqUrl, apiDetails.reqOption);
        parseData = await data.json()
        if (parseData) {
            localStorage.setItem('data', JSON.stringify(parseData));
        } else if (localStorage.getItem('data')) {
            parseData = JSON.parse(localStorage.getItem('data'));
        } else {
            parseData = {
                "status": "ok",
                "totalResults": this.state.articles.length,
                "articles": this.state.articles
            }
        }
        let totalPage = (parseData && parseData.totalResults) ? (Math.ceil(parseData.totalResults / this.state.pageSize)) : 1;
        this.setState({
            loading: false,
            page: pageInfo.page,
            pageSize: pageInfo.pageSize,
            totalPage: totalPage,
            articles: parseData.articles //.filter(x => x.urlToImage && x.title && x.description && x.url)
        });
        console.log(`current page: ${pageInfo.page} & totalPage: ${totalPage}, totalResults: ${parseData.totalResults}`);
        console.log('all Data: ', parseData.articles);
    }
    componentWillUnmount() {
        this.setState({
            loading: true,
            page: 0,
            pageSize: 0,
            totalPage: 0,
            articles: []
        });
        console.log('Update ')
    }
    handlePrevClick = () => {
        this.setState({
            loading: false
        });
        this.componentDidMount({ page: this.state.page - 1, pageSize: this.state.pageSize });
    }
    handleNextClick = () => {
        this.setState({
            loading: false
        });
        this.componentDidMount({ page: this.state.page + 1, pageSize: this.state.pageSize });
    }
    isDisablePage(_st) {
        return _st === 'prev' ? (this.state.page <= 1) : (this.state.page >= this.state.totalPage);
    }
    formatText = (st) => { return st.replace(/^[a-z]/gi, x => x.toUpperCase()); }

    render() {
        let { mode } = this.props;
        return (
            <div className={`container my-2 p-5 bg-${mode.status} text-${mode.textColor} shadow`}>
                {/* {(this.state.loading || !this.state.articles) && <Spinner mode={mode} />} */}
                <h1 className="text-center">Top Headline of {this.formatText(this.props.country)} {this.formatText(this.props.category)} NEWS</h1>
                
                <div className="row my-3">
                    {!this.state.loading && this.state.articles && this.state.articles.map((ele) => {
                        return <div className="col-md-4" key={ele.url}>
                            <NewsItem title={ele.title} description={ele.description}
                                newsUrl={ele.url} imageUrl={ele.urlToImage} 
                                author={ele.author} date={ele.publishedAt} 
                                source={ele.source} mode={mode} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button className={`btn btn-${mode.btnColor} shadow`} onClick={this.handlePrevClick} disabled={this.isDisablePage('prev')}>&#11164; Previous</button>
                    <button className={`btn btn-${mode.btnColor}`} disabled>{this.state.page}</button>
                    <button className={`btn btn-${mode.btnColor} shadow`} onClick={this.handleNextClick} disabled={this.isDisablePage('next')}>Next &#11166;</button>
                </div>
            </div>
        )
    }
}

export default News
