import  styled  from "styled-components";
import ImageSlider from "./imageslider";
import Viewers from "./viewers";
import Recomended from "./recomended";
import NewAtDisney from "./newAtDisney";
import Originals from "./originals";
import Trending from "./trending";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../feature/user/movieSlice";
import { selectUserName } from "../feature/user/userSlice";
import { collection,onSnapshot } from "firebase/firestore";
import Footer from "./footer";


export default function Home(){

    const dispatch=useDispatch();
    const userName=useSelector(selectUserName);
    

    useEffect(()=>{
        let recommends=[];
       let newDisney=[];
       let originals=[];
        let trending=[];
      onSnapshot(collection(db, "movies"),(doc)=>{
            const ar=doc.docs.map(item=>{
                
                switch(item.data().type){
                case 'recommend':
                    console.log("recomm",item.data());
                    recommends=[...recommends,{id:item.id,...item.data()}]
                    return 1;
                    break;

                case 'new':
                    newDisney=[...newDisney,{id:item.id,...item.data()}]
                    return 1;
                    break;
                    
                    case 'original':
                        originals=[...originals,{id:item.id,...item.data()}]
                        return 1;
                        break;
 
                         case 'trending':
                            trending=[...trending,{id:item.id,...item.data()}]
                            return 1;
                            break;

                        default: 
                                return 1;
                                console.log('default');
                            
            }
        }
                
                )
            
        dispatch(
            setMovies({
            recommend: recommends,
            newDisney: newDisney,
            original: originals,
            trending: trending
        }));
            
            });
        }
    ,[userName])

        

    return (
        <Container>
            <ImageSlider />
            <Viewers />
            <Recomended />
            <NewAtDisney />
            <Originals />
            <Trending />
            <Footer />
        </Container>
    )

}

const Container=styled.div`

margin-top: 70px;
min-height: calc(100vh - 250px);
position: relative;
overflow-x: hidden;
display: block;
padding: 0 calc(3.5vw + 5px);


&:after{
    background: url('/images/home-background.png') center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
}

`