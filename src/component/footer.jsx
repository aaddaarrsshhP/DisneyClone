import { styled } from "styled-components";

export default function Footer()
{
    return (
    <OuterContainer>        
        <Container>
            <Content1>
                <h4>Company</h4>
                <div>
                    <h5>About Us</h5>
                    <h5>Careers</h5>
                </div>
            </Content1>
            <Content2>
            <h4>View Website In</h4>
                <div>
                    <h5><span>&#x2714;</span> English</h5>
                
                </div>
            </Content2>
            <Content3>
            <h4>Need Help ?</h4>
                <div>
                    <h5>Visit Helpcenter</h5>
                    <h5>Share Feedback</h5>
                </div>
            </Content3>
            <Content4>
            <h4>Connect With Us</h4>
                <div>
                    <img src="/images/174528_bird_flying_media_social_tweet_icon.svg" alt=""/>
                    <img src="/images/1916008_instagram_logo_media_social_icon.svg" alt=""/>
                </div>
            </Content4>
        </Container>
        <Bottomfooter>
            <h5>© 2023 STAR. All Rights Reserved.</h5>
            <div>
                <h5>Terms Of Use</h5>
                <h5>Privacy Policy</h5>
                <h5>FAQ</h5>
            </div>
        </Bottomfooter>
        </OuterContainer>
    )
}


const Container=styled.div`

display: flex;
justify-content: space-between;
align-items: center;
padding-top: 50px;

`;

const Content1=styled.div`

h4{
    margin-bottom: 35px;
}
`;

const Content2=styled.div`
margin-top: -30px;

h4{
    margin-bottom: 35px;
}`;

const Content3=styled.div`
margin-top: 9px;
h4{
    margin-bottom: 35px;
}`;

const Content4=styled.div`

margin-top: -36px;

h4{
    margin-bottom: 35px;
}

div{
 img{
    width: 3vw;
    height: 5vh;
 }

}
`;

const OuterContainer=styled.div`

`;

const Bottomfooter=styled.div`

div
{
margin-top: -5vh;
display: flex;
column-gap: 1.5vw;
}




`;