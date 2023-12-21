import  styled  from "styled-components";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { doc,getDoc } from "firebase/firestore";
import db from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { addWacthList, getWatchList } from "../feature/user/watchlistSlice";

export default function Detail()
{
    const {id}=useParams();
    const [detail,setDetail]=useState({});
    const list=useSelector(getWatchList);
    const dispatch=useDispatch();
    console.log(list);
    function watchListAdd(movieId){

        if(list===null)
        {
            const data=[detail]
            console.log('data:',data);
            dispatch(addWacthList(data))
        }
        else if(list.find(data=>data.id===movieId))
        {
            return ;
        }
        else
        {

            const data=[...list,{...detail,id:movieId}]
            console.log('updated: ',data);
            dispatch(addWacthList(data))
        }
    }

    useEffect(()=>{

        getDoc(doc(db, "movies", id)).then(docSnap => {
            
            if (docSnap.exists()) {
                console.log(docSnap.data());
                setDetail(docSnap.data())
              } else {
                console.log("No such document!");
              }
        })
        .catch(err=>console.log('error'))
    },[id])

    console.log('details: ',detail);

    return (
        <Container>
            <Background>
                <img src={detail.backgroundImg} alt={detail.title}/>
            </Background>
            <Imagetitle>
                <img src={detail.titleImg} alt=""/>
            </Imagetitle>
            <Content>
                <Control>
                    <Player>
                        <img src="/images/play-icon-black.png" alt=""/>
                        <span>Play</span>
                        </Player>
                    <Trailer>
                        <img src="/images//play-icon-white.png" alt=""/>
                        <span>Trailer</span>
                    </Trailer>
                    <Additems onClick={()=>watchListAdd(id)}>
                        <img src="/images/add-plus-svgrepo-com.svg" alt=""/>
                    </Additems>
                    <Groupwatch>
                        <img src="/images/group-icon.png" alt=""/>
                    </Groupwatch>
                </Control>
                <Subtitle>
                    <p>{detail.subTitle}</p>
                </Subtitle>
                <Description>
                    <p>{detail.description}</p>
                </Description>
            </Content>
        </Container>
    )
}

const Container=styled.div`
position: relative;

margin-top: 72px;
min-height: calc(100vh - 250px);
overflow-x: hidden;
overflow-y: hidden;
display: block;
top: 72;
padding: 0 calc(3.5vw + 5px);

`;

const Background=styled.div`


overflow: hidden;
opacity: 0.8;
z-index: -1;
position: fixed;
left: 0;
right: 0;
img{
     width: 100vw;
    height: 100vh;

    @media(max-width: 768px)
    {
        width: initial;
    }
}

`;


const Imagetitle=styled.div`
overflow: hidden;
display: flex;
align-items: flex-end;
-webkit-box-pack: start;
height: 30vw;
min-height: 170px;
justify-content: flex-start;
padding-bottom: 40px;
margin: 0px auto;

width: 100%;

img{
    max-width: 680px;
    min-width: 200px;
    width: 25vw;
}
`;


const Content=styled.div`

max-width: 874px;
`;

const Control=styled.div`
overflow: hidden;
display: flex;
align-items: center;
flex-flow: row nowrap;
margin: 24px 0;
min-height: 56px;

`;

const Player=styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.8px;
    font-size: 15px;
    margin: 0px 24px 0px 0px;
    padding: 0px 24px;
    height: 56px;
    border-radius: 4px;
    border: none;
    text-transform: uppercase;
    background: rgb(249,249,249);
    color: rgb(0,0,0);
    cursor: pointer;
    img{
        width: 32px;
    }

    &: hover{
        background: rgb(198,198,198);
    }

    @media(max-width: 768px)
    {
        height: 45px;
        padding: 0px 12px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;

        img{
            width: 25px;
        }
    }
`;


const Trailer=styled.button`

background: rgba(0,0,0,0.3);
border: none;
border-radius: 4px;
color: rgb(249,249,249);
letter-spacing: 1.8px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
padding: 0px 20px;
height: 56px;

&: hover{
    background: rgba(198,198,198,0.3);
}
`;

const Additems=styled.div`
margin-left: 16px;
height: 44px;
width: 44px;
background-color: rgba(249,249,249,0.8);
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;

&: hover{
    transform: scale(1.1);
}

img{
    width: 100%;
    height: 100%;
}
`;

const Groupwatch=styled.div`


margin-left: 16px;
height: 44px;
width: 44px;
background-color: rgba(0,0,0,0.6);
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;

&: hover{
    transform: scale(1.1);     
}
`;

const Description=styled.div`
margin-top: -10px;
line-height: ;
padding: 0px 0px;
font-size: 20px;

@media(max-width: 768px)
{
    font-size: 15px;
}
`;

const Subtitle=styled.div`

color: rgb(249,249,249);
font-size: 15px;
min-height: 20px;

@media(max-width: 768px)
{
    font-size: 12px
}

`;