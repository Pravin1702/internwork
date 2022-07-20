import React from 'react'

class HomePage extends React.Component{

}

const MenuHeader=()=>{
    return(
        <header>
        <NavLink to='login'>Login</NavLink>
        </header>
    )

}
function RedirectTo(props){
window.location.replace(props.url);
return null;
}

const routes=(
    <BrowserRouter>
    <MenuHeader/>
    <Routes>
    <Rout paath='/login'element
    </Routes>
    </BrowserRouter>
)

