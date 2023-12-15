import  styled  from "styled-components";

export default function Viewers(){

    return (
        <Container>
            <Wrap>
               
                    <img src="/images/viewers-disney.png" alt="" width="100%" height="100%"/>        
                    <video  autoPlay={true} loop={true} playsInline={true}>
                        <source src="/video/1564674844-disney.mp4" type="video/mp4"/>
                        </video>                  
             </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" alt=""/>
                <video autoPlay={true} loop={true} playsInline={true}>
                        <source src="/video/1564676115-marvel.mp4"/>
                        </video>                    
            </Wrap>

            <Wrap>
               <img src="/images/viewers-national.png" alt=""/>
               <video  autoPlay={true} loop={true} playsInline={true}>
                      <source src="/video/1564676296-national-geographic.mp4"/>  
                        </video>                  
            </Wrap>
            <Wrap>
               <img src="/images/viewers-pixar.png" alt="" />
               <video  autoPlay={true} loop={true} playsInline={true}>
                      <source src="/video/1564676714-pixar.mp4"/>  
                        </video>                  
            </Wrap>
            <Wrap>
     
                        <img src="/images/viewers-starwars.png" alt=""/>
                        <video  autoPlay={true} loop={true} playsInline={true}>
                            <source src="/video/1608229455-star-wars.mp4"/>
                        </video>                  

            </Wrap>
        </Container>
    )
}

const Container=styled.div`

margin-top: 30px;
padding: 30px 0px 26px;
display: grid;
grid-gap: 26px;
grid-template-columns: repeat(5,minmax(0,1fr));


@media (max-width: 768px)
{
    grid-template-columns: repeat(2,minmax(0,1fr));
    
}
`;



const Wrap=styled.div`
padding-top: 56.25%;
position: relative;
border: 3px solid rgb(249,249,249,0.1);
    border-radius: 10px;
    display: block;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
            rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    cursor: pointer;        
    overflow: hidden;
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;



    img{
        display: block;
        inset: 0px;
        position: absolute;
        height: 100%;
        width: 100%;
        object-fit: cover;
        opacity: 1;
        
        transition: opacity 500ms ease-in-out 0s;
        top: 0;
    }

    video{
        
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        opacity: 0;
        z-index: 0;
    }

&: hover{

    
    border: 3px solid rgba(249,249,249,0.8);
    transition-duration: 300ms;
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
            rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    video{
        opacity: 1;
    }

}

}

}



`;