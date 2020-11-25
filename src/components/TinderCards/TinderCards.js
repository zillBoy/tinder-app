import React, { useEffect, useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import axios from '../../axios'

const TinderCards = () => {
    const [people, setPeople] = useState([])

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/tinder/cards") 
            setPeople(req.data)
        }

        fetchData()
    }, [])
    
    console.log(people)

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen")
    }

    return (
        <div className="tinderCards cardContent">
            <div className="tinderCards__cardContainer">
                {
                    people.map((person) => (
                        <TinderCard
                            className="swipe"
                            key={person._id}
                            preventSwipe={["up", "down"]}
                            onSwipe={(dir) => swiped(dir, person.name)}
                            onCardLeftScreen={() => outOfFrame(person.name)}
                        >
                            <div 
                                style={{backgroundImage: `url(${person.imgUrl})`}}
                                className="card"
                            >
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>                      
                    ))
                }
            </div>
        </div>
    )
}

export default TinderCards

// [
//     {
//         id: 1,
//         name: "Jeff Bezoz",
//         url: "https://api.time.com/wp-content/uploads/2020/07/jeff-bezos.jpg?quality=85&w=1024&h=628&crop=1"
//     },
//     {
//         id: 2,
//         name: "Elon Musk",
//         url: "https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
//     },
//     {
//         id: 3,
//         name: "Astrid S",
//         url: "https://akamai.vgc.no/v2/images/42998529-1d09-42bf-8361-a326111ca4fd?fit=crop&h=1560&w=1900&s=2bc7f11b33a31e7e47ad1c33dedb33dd572bf99f"
//     },
//     {
//         id: 4,
//         name: "Sabrina Carpenter",
//         url: "https://m.media-amazon.com/images/I/41xrytGAiAL._SL1000_.jpg"
//     },
//     {
//         id: 5,
//         name: "Loren Gray",
//         url: "https://www.interviewmagazine.com/wp-content/uploads/2019/02/loren_47424361_327144321218105_1755322296804543996_n-1000x998.jpg"
//     },
//     {
//         id: 6,
//         name: "Dove Cameron",
//         url: "https://cdn.shopifycdn.net/s/files/1/2547/9696/files/1_ece79578-3173-408a-a8fb-ab23c2fc8333.png?v=1600413469"
//     }
// ]