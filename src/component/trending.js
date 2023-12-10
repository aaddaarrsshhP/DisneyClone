import  styled  from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTrending } from "../feature/user/movieSlice";

export default function Trending()
{
    const movies=useSelector(selectTrending)
    return (
        <Container>
            <h4>Trending</h4>
            <Content>
            {movies && 
                  movies.map((movie,key)=>( <Wrap key={key}>
                    <Link to={`/detail/${movie.id}`}>
                        <img src={movie.cardImg} alt={movie.title}/>
                    </Link>
                </Wrap>
                    ))
                }
                
            </Content>
        </Container>
    )
}

const Container=styled.div`

padding-bottom: 26px;

`;

const Content=styled.div`

display: grid;
grid-gap: 25px;
gap: 26px;
grid-template-columns: repeat(4,minmax(0,1fr));


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

