import { beautyImage } from "./assets";


function Card(){
    return(
 <div className="card">
   
    <img src={beautyImage} alt="profile card"></img>
  
    <h2>Ayeesh Dev</h2>
  <p> i am Web Developer and Fashion Desinger</p>
 </div>
    );
}

export default Card