import React, { Component } from 'react'
import NewsItem from './NewsItem'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import GotoTop from './GotoTop'

export class News extends Component {
    constructor(){
        super()
        this.state={
            articles: [],
            loading: false
        }
    }
     async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apikey=dbe57b028aeb41e285a226a94865f7a7";
        let data = await fetch(url);
        let parsedData=await data.json()
        this.setState({articles:parsedData.articles})
    }
    render() {
        return (
            <div className="container my-5"style={{zIndex:"0"}} >
                <div className="row" style={{justifyContent:"space-around"}}>
                    {this.state.articles.map((elem)=> {
                   
                   
                     return(
                        
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12" style={{ display:"flex"}} key={elem.url}>
                    <NewsItem title={elem.title}
                    description={elem.description} 
                    imageUrl={elem.urlToImage} 
                    newsUrl={elem.url}/>
                      
                    
                    </div>)
                    
                    
                     } )}
                     
                </div>
                <GotoTop/>
            </div>
        )
    }
}

export default News





//https://newsapi.org/v2/top-headlines?country=in&apikey=dbe57b028aeb41e285a226a94865f7a7