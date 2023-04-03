
import React from "react";

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        async function getMemes() {
            const response = await fetch("https://api.imgflip.com/get_memes")
            const data = await response.json()
            setAllMemes(data)
        }
        getMemes()
        return () => {
            // cleanup
        }
        // fetch("https://api.imgflip.com/get_memes")
        //  .then(res => res.json())
        //  .then(data => setAllMemes(data))
    }, [])


    function GetMemeImage(){
        const memesArray = allMemes.data.memes
        const randomImage = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomImage].url

        setAllMemes(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
       
    }

    function HandleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
        <div className="form">
            <input 
                type="text" 
                className="form-input" 
                placeholder="Top text"
                onChange={HandleChange}
                name="topText"
                value={meme.topText}
            />
            <input 
                type="text" 
                className="form-input" 
                placeholder="bottom text"
                onChange={HandleChange}
                name="bottomText"
                value={meme.bottomText}
            />
            <button onClick={GetMemeImage}  className="form-button" >
                Get a new meme image  🖼
            </button>
        </div>
       <div className="meme-img">
         <img src={allMemes.randomImage || meme.randomImage} alt="meme" />
         <h2 className="meme--text top">{meme.topText}</h2>
         <h2 className="meme--text bottom">{meme.bottomText}</h2>
       </div>

    </main>
    )
}