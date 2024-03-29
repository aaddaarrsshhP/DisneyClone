import  styled  from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function ImageSlider(){

    const setting={

        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        sildesToScroll: 1,
        autoplay: true,
    };

    return (
    
            <Carousel {...setting}>
                <Wrap>
                    <a href=".">
                        <img src="/images/slider-badging.jpg" alt=""/>
                    </a>
                </Wrap>
                <Wrap>
                    <a href=".">
                        <img src="/images/slider-scale.jpg" alt=""/>
                    </a>
                </Wrap>
                <Wrap>
                    <a href=".">
                        <img src="/images/slider-scales.jpg" alt=""/>
                    </a>
                </Wrap>
                <Wrap>
                    <a href=".">
                        <img src="/images/slider-badag.jpg" alt=""/>
                    </a>
                </Wrap>
            </Carousel>
        
    )
}

const Carousel=styled(Slider)`

margin-top: 15px;

& > button{

    z-index: 1;
    opacity: 0;
    height: 100%;
    width: 5vw;

    &:hover{
        opacity: 1;
        transition: opacity 0.4s ease 0.1s;
    }
}

ul li button{
    &:before{
    font-size: 10px;
    color: rgb(150,158,171);
 }
}

li.slick-active button:before{
    color: white;
}

.slick-list{
    overflow:  initial;
}

.slick-prev {

    left: -75px;
}

.slick-next{
    right: -75px;
}

`;

const Wrap=styled.div`

border-radius: 4px;
cursor: pointer;
position: relative;

a {
    border-radius: 4px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
            rgb(0 0 0 / 73%) 0px 16px 10px -10px;

cursor: pointer;
display: block;
position: relative;
padding: 4px;

img {
    width: 100%;
    height: 100%;
}

&: hover{
    padding: 0;
    border: 4px solid rgba(249,249,249,0.8);
    transition-duration: 300ms;
}
}
}
`;