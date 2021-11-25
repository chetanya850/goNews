import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {

        let { title, description, imageUrl, newsUrl } = this.props;  //Object destructuring where props is in the form of an object (bs this.props.title pura na likhna padhe isiliye)
        return (
            <div className="container my-3">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageUrl} className="card-img-top" alt="Shakal" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
