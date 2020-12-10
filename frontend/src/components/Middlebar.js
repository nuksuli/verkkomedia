import React from 'react';
import './middlebar.css';
import NewsCard from './NewsCard';

const Middlebar = ({ data }) => {
    return (
        <div className="middlebar">
            {data
                .slice(0)
                .reverse()
                .map((news) => (
                    <NewsCard
                        key={news.id}
                        id={news.id}
                        title={news.header}
                        ingress={news.lead}
                        image={news.image}
                    />
                ))}
        </div>
    );
};

export default Middlebar;
