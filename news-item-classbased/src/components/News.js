import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            pageSize: 9,
            totalPage: 0,
            // articles: this.createTestingData(10), // dummy data
            articles: [],
            // isDisablePrevPage: true,
            // isDisableNextPage: true
        };
    }

    createTestingData = (n) => {
        let x = [];
        for (let i=0; i<n; i++) {
            x.push({
                "author": "Author",
                "title": "News Title",
                "description": "News Description - News Description - News Description - News Description - News Description - News Description - News Description",
                "url": `http://localhost:3000/home/${i}`,
                "urlToImage": "/favicon.ico",
                "publishedAt": "2023-12-19T06:29:31Z",
                "content": "Sample News"
            });
        }
        return x;
    }

    async componentDidMount(pageInfo = {page: 1, pageSize: this.state.pageSize}) {
        let url = `https://newsapi.org/v2/top-headlines`;
        let query = {
            q: 'in',
            language: 'en',
            apiKey: '77a7e9ccfa3b45ab9ad0de094d743442'
        }
        let reqOption = {
            method: 'GET',
        };
        let reqUrl = `${url}?${new URLSearchParams(query).toString()}&${new URLSearchParams(pageInfo).toString()}`;
        console.log('reqUrl: ', reqUrl);
        let data = await fetch(reqUrl, reqOption);
        let parseData = await data.json();
        let totalPage = (parseData.totalResults) ? (Math.ceil(parseData.totalResults / this.state.pageSize)) : 1;
        this.setState({ 
            page: pageInfo.page,
            pageSize: pageInfo.pageSize,
            totalPage: totalPage,
            articles: parseData.articles //.filter(x => x.urlToImage && x.title && x.description && x.url)
        });
        console.log(`current page: ${pageInfo.page} & totalPage: ${totalPage}, totalResults: ${parseData.totalResults}`)
    }
    handlePrevClick = () => {
        this.componentDidMount({page: this.state.page - 1, pageSize: this.state.pageSize});
    }
    handleNextClick = () => {
        this.componentDidMount({page: this.state.page + 1, pageSize: this.state.pageSize});
    }
    isDisablePage(_st) {
        return _st === 'prev' ? (this.state.page <= 1) : (this.state.page >= this.state.totalPage);
    }

    render() {
        let { mode } = this.props;
        return (
            <div className={`container my-2 p-5 bg-${mode.status} text-${mode.textColor}`}>
                <h1 className="text-center">NewsMonkey - Top Headline</h1>
                <div className="row my-3">
                    {this.state.articles.map((ele) => {
                        return <div className="col-md-4" key={ele.url}>
                            <NewsItem title={ele.title} description={ele.description} 
                                newsUrl={ele.url} imageUrl={ele.urlToImage} mode={mode}/>
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button className={`btn btn-${mode.btnColor}`} onClick={this.handlePrevClick} disabled={this.isDisablePage('prev')}>&#11164; Previous</button>
                    <button className={`btn btn-${mode.btnColor}`} disabled>{this.state.page}</button>
                    <button className={`btn btn-${mode.btnColor}`} onClick={this.handleNextClick} disabled={this.isDisablePage('next')}>Next &#11166;</button>
                </div>
            </div>
        )
    }
}

export default News
