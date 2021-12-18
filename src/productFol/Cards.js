import React, { useState, useEffect } from 'react'
import './All.css';

function Cards(props) {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const res = await fetch("https://api.github.com/users");
        setUsers(await res.json());

    }
    useEffect(() => {
        getUsers();
    }, [])
    return (
        <>
            <div className={{ backgroundColor: "gray" }}>
                
                <div className="container-fluid mt-4 ">
                    <div className="row">

                        {
                            users.map((curEle) => {
                                const { avatar_url, login, type, html_url } = curEle;

                                return (
                                    
                                    <div className='cards col-lg-3 col-md-4 col-sm-6   col-12'>
                            
                                        <div className='card'>
                                            <img src={avatar_url} alt='user_Img' className='card_img' />
                                            <div className='card_info'>
                                                <span className='card_category'>{login}</span>
                                                <h2 className='card_title'>{type}</h2>
                                                <a href={html_url} target='_blank'>
                                                    <button className="bg-primary" >Check here</button>
                                                </a>
                                            </div>
                                        </div>
                            
                                    </div>
                                
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;

