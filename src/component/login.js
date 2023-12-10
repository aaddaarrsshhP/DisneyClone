import  styled  from "styled-components"



export default function Login()
{
    return (
         <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt=''/>
                    <Sign>All Get Here</Sign>
                    <CTALogoTwo src='/images/cta-logo-two.png' alt=''/>
                </CTA>
                <BgImage />
            </Content>
        </Container>

            
        
        
    )
}

const Container=styled.section`
overflow:hidden;
display:flex;
flex-direction:column;
text-align:center;
height:100vh;

`;

const Content=styled.div`

min-height:100vh;
width:100%;
box-sizing:border-box;
display:flex;
flex-direction:column;
justify-content:center;
align-items-center;
padding:80px 40px;
position:relative;
`;

const BgImage=styled.div`

background-image:url('/images/login-background.jpg');
height:100%;
background-size:cover;
background-position:top;
background-repeat:no-repeat;
position:absolute;
top:0;
left:0;
right:0;
z-index:-1;

`;

const CTA=styled.div`

margin-bottom:10vw;
max-width:650px;
flex-wrap:wrap;
display:flex;
flex-direction:column;
justify-content:center;
margin-top:110px;
align-items: center;
text-align: center;
margin-left:auto;
margin-right: auto;
width:100%;

`;

const CTALogoOne=styled.img`
    max-width:500px;
    min-height:1px;
    margin-bottom:12px;
    display:block;    
    width:100%;
    
`;

const CTALogoTwo=styled.img`

margin-top: 12px;
max-width:500px;
min-height:1px;
margin-bottom:12px;
display:block;    
width:100%;
`;

const Sign=styled.a`
font-weight: bold;
color: #f9f9f9;
background-color: #0063e5;
width: 80%;
letter-spacing: 1.5px;
font-size: 18px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius: 4px;

&:hover{
    background-color: #0483ee;
    cursor: pointer;
}
`;