import '../App.css';
import cover1 from "../assets/cover1.png";
import cover2 from "../assets/cover 2.png";
import cover3 from "../assets/cover3.png";
import cover4 from "../assets/cover4.png";


const HomePage =() => {
    return(
   <main>
            <div className="titles">
        <h1>Good morning</h1>
       </div>
       <div className="morning-wrapper ">
       <div className="row">
         <div className="column">
           <div className="red-column glow">
             <img src={cover1} alt=""/>
             <p>Rufus do Sol</p>
           </div>
         </div>
         <div className="column">
           <div className="red-column">
            <img src={cover2} alt=""/>
             <p>Deep Techno</p>
           </div>
         </div>
         <div className="column">
           <div className="red-column">
            <img src={cover3} alt=""/>
             <p>Blue Sheeps</p>
           </div>
         </div>
         <div className="column">
           <div className="red-column">
            <img src={cover4} alt=""/>
             <p>Sax - Best of</p>
           </div>
         </div>
        
             
           </div>
         </div>
       
   
   </main>
    )
}

export default HomePage