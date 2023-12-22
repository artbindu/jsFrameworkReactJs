import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import sample_news from '../assets/images/sample_news.avif';
import apiConfig from '../config/apiConfig';

// Infinite Scroll: V35
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            pageSize: 5,
            totalPage: 0,
            loading: true,
            // articles: this.createTestingData(10), // dummy data
            articles: [],
            totalResult: 1
        };
        this.getApiData();
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

    componentDidMount() {
        // this.getApiData();
    }

    setLoadingBarProgress(_status = 10) {
        this.props.setProgress(_status);
    }

    async getApiData(pageInfo = { page: 1, pageSize: this.state.pageSize }) {
        console.warn('APIKEY: ', this.props.apiKey);
        this.setLoadingBarProgress(10); // Progress 10%
        let apiDetails = apiConfig.apiInfo.getNews;
        // update query details
        let queryDetails = apiDetails.query;
        queryDetails.apiKey = this.props.apiKey;
        queryDetails.country = apiConfig.countries[this.formatText(this.props.country)];
        queryDetails.language = apiConfig.languages[this.formatText(this.props.lang)];
        queryDetails.category = this.props.category;
        queryDetails.page = pageInfo.page;
        queryDetails.pageSize = pageInfo.pageSize;
        console.log('queryDetails: ', queryDetails);
        // API call
        let reqUrl = `${apiDetails.url}?${new URLSearchParams(queryDetails).toString()}`;
        console.log('reqUrl: ', reqUrl);
        let parseData = null;
        let data = await fetch(reqUrl, apiDetails.reqOption);
        parseData = await data.json();
        this.setLoadingBarProgress(50); // Progress 50%
        let removedData = 0;
        if (parseData) {
            removedData = parseData.articles.filter(x => x.content === "[Removed]")?.length
            parseData.articles = this.state.articles.concat(parseData.articles.filter(x => x.content !== "[Removed]"));
            localStorage.removeItem("data");
            localStorage.setItem('data', JSON.stringify(parseData));

        } else if (localStorage.getItem('data')) {
            parseData = JSON.parse(localStorage.getItem('data'));
        } else {
            parseData = {
                "status": "ok",
                "totalResults": this.state.articles.length,
                "articles": this.state.articles
            };
        }
        this.setLoadingBarProgress(80); // Progress 80%

        let totalPage = (parseData && parseData.totalResults) ? (Math.ceil((parseData.totalResults - removedData) / this.state.pageSize)) : 1;
        this.setState({
            loading: false,
            page: pageInfo.page,
            pageSize: pageInfo.pageSize,
            totalPage: totalPage,
            articles: parseData.articles,
            totalResult: parseData.totalResults
        });
        console.log(`current page: ${pageInfo.page} & totalPage: ${totalPage}, totalResults: ${parseData.totalResults}`);
        console.warn('all Data: ', parseData.articles);
        this.setLoadingBarProgress(100); // Progress 100%
    }
    fetchMoreData = () => {
        console.warn('fetchMoreData call to getApiData');
        this.getApiData({ page: this.state.page + 1, pageSize: this.state.pageSize });
    }
    isDisablePage = (_st) => { return _st === 'prev' ? (this.state.page <= 1) : (this.state.page >= this.state.totalPage); }
    formatText = (st) => { return st.replace(/^[a-z]/gi, x => x.toUpperCase()); }

    render() {
        let { mode } = this.props;
        return (
            <>
                <h1 className={`text-center my-1 p-5 bg-${mode.status} text-${mode.textColor} shadow`}>
                    Top Headline of {this.formatText(this.props.country)} {this.formatText(this.props.category)} NEWS
                </h1>

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResult}
                    loader={<Spinner mode={mode} />}
                    endMessage={
                        <p className="p-3" style={{ textAlign: 'center', backgroundColor: "green" }}>
                            <b>All News are covered</b>
                        </p>
                    }
                >
                    <div className={`container p-4 bg-${mode.status} text-${mode.textColor} shadow`}>
                        <div className="row my-3">
                            {this.state.articles && this.state.articles.map((ele) => {
                                return <div className="col-md-4" key={ele.url}>
                                    <NewsItem title={ele.title} description={ele.description}
                                        newsUrl={ele.url} imageUrl={ele.urlToImage}
                                        author={ele.author} date={ele.publishedAt}
                                        source={ele.source} mode={mode} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

            </>
        )
    }
}

export default News
