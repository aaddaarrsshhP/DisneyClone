import  styled  from "styled-components"
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { aut,provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import {selectUserName,selectUserPhoto,setSignOutState,setUserLoginDetails} from '../feature/user/userSlice'
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";

export default function Header()
{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const userName=useSelector(selectUserName);
    const userPhoto=useSelector(selectUserPhoto);
    
   
   
    async function handleAuth(){
        console.log('inside');
        if(!userName)
        {
          await signInWithPopup(aut,provider)
          .then(result=>setUser(result.user))
          .catch(err=>alert(err.message))
        }
    else if(userName){
        signOut(aut)
        .then(()=>{
            dispatch(setSignOutState())
            navigate('/')
        })
        .catch(err=>alert(err.message))
    }
}
    const setUser=(user)=>{

        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };


    useEffect(()=>{

        onAuthStateChanged(aut,async(user)=>{
        if(user)
        {
            setUser(user);
            navigate('/home')
        }
        })
    },[userName])

    return (
        <nav className="header">
            <a href="/">
            <img src="/images/logo.svg" alt="" width="75px" height="75px"/>
            </a>
            {!userName ? <Log onClick={()=>handleAuth()}>LOG IN</Log> : 
            <>
            <nav className="menu">
                <a className="home" href="/home">
                    <img className="home-logo" src="/images/home-icon.svg" alt="home" />
                    <span className="home-title">HOME</span>
                </a>
                <a className="home" href="/home">
                    <img className="home-logo" src="/images/search-icon.svg" alt="home" />
                    <span className="home-title">SEARCH</span>
                </a>
                <a className="home" href="/home">
                    <img className="home-logo" src="/images/watchlist-icon.svg" alt="home" />
                    <span className="home-title">WATCHLIST</span>
                </a>
                <a className="home" href="/home">
                    <img className="home-logo" src="/images/original-icon.svg" alt="home" />
                    <span className="home-title">ORIGINALS</span>
                </a>
                <a className="home" href="/home">
                    <img className="home-logo" src="/images/movie-icon.svg" alt="home" />
                    <span className="home-title">MOVIE</span>
                </a>
                <a className="home" href="/home">
                    <img className="home-logo" src="/images/series-icon.svg" alt="home" />
                    <span className="home-title">SERIES</span>
                </a>
            </nav>
            <Signout>
                    <UserIMg src={userPhoto} alt={userName}/>
                    <Dropdown>
                       <span onClick={handleAuth}>Sign Out</span>
                    </Dropdown>
                    
                </Signout>
            </>}
        </nav>
    )
}

const Log=styled.a`

background-color: rgba(0,0,0,0.6);
padding: 8px 16px;
border: 1px solid #f9f9f9;
border-radius: 4px;
letter-spacing: 1.5px;
transition: all 0.2s ease 0s;


&:hover
{
  background-color: #f9f9f9;
  color: #000;  
  cursor: pointer;
}
`;



const Dropdown=styled.div`

position: absolute;
bottom: 0;
background-color:rgb(19,19,19);
border: 1px solid rgb(0,0,0);
border-radius: 5px;
box-shadow: 0 0 0 18px 0;
letter-spacing: 3px;
padding:7px;
font-size: small;
opacity: 0;

`;


const Signout=styled.div`

position: relative;
cursor: pointer;
box-sizing: border-box;
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100px;
height: 100px;

&:hover{
    ${Dropdown}{
        opacity:1;
        transition-duration: 1s;
    }
}

}
`;


const UserIMg=styled.img`
margin-top: 5px;
height: 40%;
margin-left: 8px;
border-radius: 20px;
z-index: 1;



`;