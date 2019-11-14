import React, {useState} from 'react';
import Axios from 'axios';


// https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=react;

const Search = () => {

    // state = {
    //     text: '',
    //     results: [] 
    // }

    const [text, setText] = useState('');
    const [results, setResults] = useState([]);

    
    function change(evt){
        setText(evt.target.value);
    }
    async function search(){

        const url = "https://en.wikipedia.org/w/api.php";
        const params = {
            action: "opensearch",
            origin: "*",
            limit: 30,
            search: text
        };
        // Axios
        //     .get(url, {params: params})
        //     .then((resp) => {
        //         console.log(resp);
        //     }, 
        //     (resp) => {
        //         console.log("error: ", resp);
        //     });

        try {
            const response = await Axios.get(url, {params: params});
            console.log("result:", response.data);
            setResults(response.data[1]);
        } catch (error) {
            alert("error fetching data");
        }
        
    }


    return (
        <div>
            <h3>Wiki Serach</h3>
            <div>
                <input type="search" placeholder="Search" value={text} onChange={change}/>
                &nbsp;
                <button onClick={search}>Wiki Search</button>
            </div>
            <div>
                {/* Results */}
                <h4>Search Results for {text}</h4>
                {results.map((item, index) => {
                    return (
                        <div key={index}>
                            <p>{item}</p>
                        </div>
                    );
                })}
            </div>
        </div>

    );
}


export default Search;