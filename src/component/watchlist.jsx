import React from 'react'
import { useSelector } from 'react-redux'
import { getWatchList } from '../feature/user/watchlistSlice'
import { styled } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

export default function Watchlist() {

    const navigate=useNavigate()
    const watchList=useSelector(getWatchList);
    console.log(watchList.length);
    
  return (
    <Container>
        <h2>Watchlist</h2>
        <Content>
          {!watchList.length ? <h3>Please Add Movies To Watch...</h3> : watchList.map(data=><Wrap>
            
            <Link to={`/detail/${data.id}`}>
              <img src={data.cardImg} alt=''/>
            </Link>
            
            
            </Wrap>)}
        </Content>
    </Container>
  )
}

const Container=styled.div`

padding: 14vh calc(3.5vw + 5px);
min-height: calc(100vh - 0px);
position: relative;

&:after{
    
    background: url('/images/home-background.png') center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    z-index: -1;
}

@media (max-width: 768px){
  h2{
    font-size: 20px;
  }
}

`;

const Content=styled.div`

display: grid;
grid-gap: 4vw;
grid-template-columns: repeat(4,minmax(0,1fr));

h2{

}


@media (max-width: 768px)
{
    grid-template-columns: repeat(2,minmax(0,1fr));
}
`;


const Wrap=styled.div`
padding-top: 56.25%;
border-style: solid;
position: relative;
overflow: hidden;
border: 3px solid rgb(249,249,249,0.1);
border-radius: 10px;
cursor: pointer;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
              rgb(0 0 0 / 73%) 0px 16px 10px -10px;
              
transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;

img{
    inset: 0px;
    position: absolute;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
    
}

&: hover{
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0  / 72%) 0px 30px 22px -10px;

    transform: scale(1.05);
    border-color: rgb(249,249,249,0.8);    
}
`;