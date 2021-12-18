import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {

        let {title, description, imageUrl, url} = this.props
        return (
        
            <div className="my-3">
                <div className="card col-lg-3 col-md-4 col-sm-6 col-12" style={{justifyContent:"space-around", width: "auto", padding:"10%"}}>
                    <img src={imageUrl} className="card-img-top" alt="Crash Images..."/>
                    <div className ="card-body">
                    <h5 className ="card-title">{title}</h5>
                    <p className ="card-text">{description}</p>
                    <a href={url} className ="btn btn-sm btn-primary">Read Here</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
