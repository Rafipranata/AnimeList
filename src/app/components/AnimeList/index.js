// export default function AnimeList(){
//     return (
//         <div>
//         AnimeList
//         </div>
//     )
// }
import Image from "next/image"

const AnimeList = ({title, images}) => {
    return (
        
            <div className="bg-indigo-500">
                <Image src={images} alt="kosong" width={600} height={600} />
            <h3>{title} </h3>
            </div>
        
    )
}
export default AnimeList