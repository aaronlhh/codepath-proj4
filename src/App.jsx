import { useState, useSyncExternalStore } from 'react'
import './App.css'
import Container from '../components/Container';
import BanList from '../components/BanList';

function App() {
    const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
    const [banList, setBanList] = useState([]);

    const [catInfo, setCatInfo] = useState({
        name: "",
        category: "",
        origin: "",
        life_span: "",
        weights: "",
    });

    const [imgInfo, setimgInfo] = useState({
        url: "",
        width: "",
        height: "",
    })

    const handleDiscover = () => {
        let limit = '1';
        let has_breeds = '1';
        let query = `https://api.thecatapi.com/v1/images/search?limit=${limit}&has_breeds=${has_breeds}&size=small&api_key=${ACCESS_KEY}`
        callAPI(query).catch(console.error);
    };

    const callAPI = async (query) => {
        let noConflict = false;
        while (noConflict == false){
            const response = await fetch(query);
            const json_list = await response.json();
            const json = json_list[0];
            if (json.url == null) {
                alert("Oops! Something went wrong with that query, let's try again!");
                console.log(response);
                console.log(json);
            }else{
                let category = json['breeds'][0]['name'];
                let origin = json['breeds'][0]['origin'];
                let life_span = json['breeds'][0]['life_span'] + " years";
                let weights = json['breeds'][0]['weight']['imperial'] + " pounds";

                if ( banList.includes(category) || 
                        banList.includes(origin) || 
                        banList.includes(life_span) ||
                        banList.includes(weights) ){
                    continue;
                }
                noConflict = true;

                setCatInfo({
                    name: json['breeds'][0]['name'],
                    category: category,
                    origin: origin,
                    life_span: life_span,
                    weights: weights,
                });
                setimgInfo({
                    url: json['url'],
                    height: json['height'],
                    width: json['width'],
                })
                console.log(json);
            }
        }
    };

    const handleBan = (value) => {
        setBanList((prevBanList) => [
            ...prevBanList,
            value
        ]);
        console.log(value);
    };

    const handleBanBtn = (value) => {
        setBanList((prevBanList) => {
            return prevBanList.filter((element) => {
                return element !== value;
            })
        })
        console.log(value);
    }


    return (
        <>
            <div className='whole-page'>
                <h1>Trippin' on Cats</h1>
                <h3> Discover cats from your wildest dreams! </h3>
                😺😸😹😻😼😽🙀😿😾
                <br />
                <br />
                <Container handleClick={handleDiscover} 
                            catInfo={catInfo}
                            imgInfo={imgInfo}
                            handleBan={handleBan}
                />
            </div>
            <BanList bans={banList} handleClick={handleBanBtn}/>
        </>
    )
}

export default App
