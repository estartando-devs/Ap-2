import { useState } from 'react';
import { RankImages } from './RankObject.js';
import TrueKeyImg from '../../assets/icons/TrueKey.png';

export default function UserRank(Rank) {
    let RankNumber = Object.values(Rank);
    const NewRankImages = RankImages.map(element => {
        if (RankNumber > 0) {
            element.img = TrueKeyImg;
            RankNumber -= 1;
        }
        return element;
    })
    const rank = useState(NewRankImages);

    const RankImg = rank.map(element => {
        return (
            <img src={element.img} alt=''></img>
        )
    })
    return (
        <div>
            {RankImg}
        </div>
    )
}