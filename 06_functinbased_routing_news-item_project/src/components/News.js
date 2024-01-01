import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
// import sample_news from '../assets/images/sample_news.avif';
import apiConfig from '../config/apiConfig';

// Infinite Scroll: V35
import InfiniteScroll from 'react-infinite-scroll-component';

// import PropTypes from 'prop-types'

function News(props) {
    const [apiState, updateApiState] = useState({
        loading: true,
        page: 0,
        pageSize: 13,
        totalPage: 0,
        totalResult: 1
    });
    const [articles, updateArticles] = useState([]);

    // 'componentDidMount' function based react implementation 'useEffect' 
    useEffect(() => {
        getApiData();
        // eslint-disable-next-line
    }, []);

    const setLoadingBarProgress = (_status = 10) => {
        props.setProgress(_status);
    }
    const getApiData = async (pageInfo = { page: 1, pageSize: apiState.pageSize }) => {
        console.warn('APIKEY: ', props.apiKey);
        setLoadingBarProgress(10); // Progress 10%
        let apiDetails = apiConfig.apiInfo.getNews;
        // update query details
        let queryDetails = apiDetails.query;
        queryDetails.apiKey = props.apiKey;
        queryDetails.country = apiConfig.countries[formatText(props.country)];
        queryDetails.language = apiConfig.languages[formatText(props.lang)];
        queryDetails.category = props.category;
        queryDetails.page = pageInfo.page;
        queryDetails.pageSize = pageInfo.pageSize;
        console.log('queryDetails: ', queryDetails);
        // API call
        let reqUrl = `${apiDetails.url}?${new URLSearchParams(queryDetails).toString()}`;
        console.log('reqUrl: ', reqUrl);
        let parseData = null;
        let data = await fetch(reqUrl, apiDetails.reqOption);
        parseData = await data.json();
        setLoadingBarProgress(50); // Progress 50%
        let removedData = 0;
        if (parseData) {
            removedData = parseData.articles.filter(x => x.content === "[Removed]")?.length
            parseData.articles = articles.concat(parseData.articles.filter(x => x.content !== "[Removed]"));
            localStorage.removeItem("data");
            localStorage.setItem('data', JSON.stringify(parseData));

        } else if (localStorage.getItem('data')) {
            parseData = JSON.parse(localStorage.getItem('data'));
        } else {
            parseData = {
                "status": "ok",
                "totalResults": articles.length,
                "articles": articles
            };
        }
        setLoadingBarProgress(80); // Progress 80%

        let totalPage = (parseData && parseData.totalResults) ? (Math.ceil((parseData.totalResults - removedData) / apiState.pageSize)) : 1;
        updateApiState({
            loading: false,
            page: pageInfo.page,
            pageSize: pageInfo.pageSize,
            totalPage: totalPage,
            totalResult: parseData.totalResults
        });
        updateArticles(parseData.articles);
        console.log(`current page: ${pageInfo.page} & totalPage: ${totalPage}, totalResults: ${parseData.totalResults}`);
        console.warn('all Data: ', parseData.articles);
        setLoadingBarProgress(100); // Progress 100%
    }
    const fetchMoreData = () => {
        console.warn('fetchMoreData call to getApiData');
        getApiData({ page: apiState.page + 1, pageSize: apiState.pageSize });
    }
    const formatText = (st) => { return st.replace(/^[a-z]/gi, x => x.toUpperCase()); }

    return (
        <>
            <h1 className={`text-center my-1 p-5 bg-${props.mode.status} text-${props.mode.textColor} shadow`}>
                Top Headline of {formatText(props.country)} {formatText(props.category)} NEWS
            </h1>

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== apiState.totalResult}
                loader={<Spinner mode={props.mode} />}
                endMessage={
                    <p className="p-3" style={{ textAlign: 'center', backgroundColor: "green" }}>
                        <b>All News are covered</b>
                    </p>
                }
            >
                <div className={`container p-4 bg-${props.mode.status} text-${props.mode.textColor} shadow`}>
                    <div className="row my-3">
                        {articles && articles.map((ele) => {
                            return <div className="col-md-4" key={ele.url}>
                                <NewsItem title={ele.title} description={ele.description}
                                    newsUrl={ele.url} imageUrl={ele.urlToImage}
                                    author={ele.author} date={ele.publishedAt}
                                    source={ele.source} mode={props.mode} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>

        </>
    )
}

export default News

