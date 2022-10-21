import { useEffect, useState } from "react";
import axios from "axios";

const Api = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get("https://random-data-api.com/api/users/random_user?size=10").then((response) => {
            console.log(response.data);
            setPost(response.data);
        });

    }, [])

    const handleRandomChange = () => {
        window.location.reload(false);
    }

    return(
        <div>
            <div className="container">
                { post && post.map((val) => {
                    return(
                        <div className="content">
                        
                            <div className="front">
                            <li>
                                <img src={val.avatar} alt="Avatar"/>
                            </li>
                            </div>
                        
                            <div className="heading">Created by Arunima</div>
                            <div className="back">
                            <li>
                                {val.first_name} {val.last_name}
                
                            </li>
                            </div>
                        
                        </div>
                    )
                })}
            </div>  
            <button className="btn" onClick={handleRandomChange}>Click Here</button>
        </div>
    )
}

export default Api;

// git add, commit, push 