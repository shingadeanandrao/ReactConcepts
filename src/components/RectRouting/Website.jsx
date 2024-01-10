import { BrowserRouter as Router, Routes,Route, NavLink } from "react-router-dom";
import HomeComp from "./Home";
import ServiceComp from "./Services";
import ContactUs from "./ContactUs";
import ClassCompo from "../CompoCommunication/ClassCompo";
import FuncCompoCommu from "../CompoCommunication/FuncCompoCommu";
import StateInClassComp from "../stateInComponent/StateInClassComp";
import UseStateHook from "../stateInComponent/useStateHook";
import ConditionalRendComp from "../CondRenderingOfCompo/ConditionalRendComp";
import StylingComp from "../CondRenderingOfCompo/StylingComp";
import EventBinding from "../CondRenderingOfCompo/EventBinding";
import CompLifeCycle from "../CompoLifeCycle/CompLifeCycle";

const MainComp = ()=>{
  let name='Anandrao';
  let employee = {
    name:"Anand",
    age:28,
    add:"Pune"
  }

    return(
        <>
            <h1>MainPage</h1>
            <Router>
                {/* <ul type="none" style={{display:'flex',columnGap:'10px'}}>
                    <li > <NavLink to='/' ><b>HOME</b></NavLink></li>
                    <li> <NavLink to='/services'><b>SERVICES</b></NavLink></li>
                    <li><NavLink to='/contactus'><b>CONTACT US</b></NavLink></li>
                </ul>  */}
<nav class="navbar navbar-expand-lg bg-body-tertiary">

<div class="container-fluid">

  <NavLink class="navbar-brand" to="/">

   <b> CODEMIND TECHNOLOGY </b>

  </NavLink>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">

    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

      <li class="nav-item">

        <NavLink className="nav-link active"  to="/services">

         Services

        </NavLink>

      </li>

      <li class="nav-item">

        <NavLink className="nav-link" to="/contactus">

         Contact US

        </NavLink>

      </li>
      <li class="nav-item">

<NavLink className="nav-link" to="/classCompo">

 Class Communication

</NavLink>

</li>
<li class="nav-item">

<NavLink className="nav-link" to="/funcCompoCommu">

 Func Compo Communication

</NavLink>

</li>
<li class="nav-item">

<NavLink className="nav-link" to="/stateInClassCompo">

 State In Compo Class

</NavLink>

</li>
<li class="nav-item">

<NavLink className="nav-link" to="/stateInFuncCompo">

 State In Func Compo

</NavLink>

</li>
<li class="nav-item">

<NavLink className="nav-link" to="/condRendCompo">

 Conditional Rend Compo

</NavLink>

</li>
<li class="nav-item">

<NavLink className="nav-link" to="/stylingComp">

 Styling Comp

</NavLink>

</li>
<li class="nav-item">

<NavLink className="nav-link" to="/eventBinding">

 Event Binding

</NavLink>

</li>
<li class="nav-item">

<NavLink className="nav-link" to="/compLifeCycle">

 Compo Life Cycle

</NavLink>

</li>


    </ul>

  </div>

</div>

</nav>
                <Routes>
                    <Route exact path="/" element={<HomeComp/>}> </Route>
                    <Route exact path="/services" element={<ServiceComp/>}> </Route>
                    <Route exact path="/contactus" element={<ContactUs/>}> </Route>
                    <Route exact path="/classCompo" element={<ClassCompo myname={name} company='Infosys' employeeObj={employee}/>}> </Route>
                    <Route exact path="/funcCompoCommu" element={<FuncCompoCommu myname={name} company='Infosys' employeeObj={employee}/>}> </Route>
                    <Route exact path="/stateInClassCompo" element={<StateInClassComp myname={name} company='Infosys' employeeObj={employee}/>}> </Route>
                    <Route exact path="/stateInFuncCompo" element={<UseStateHook />}> </Route>
                    <Route exact path="/condRendCompo" element={<ConditionalRendComp />}> </Route>
                    <Route exact path="/stylingComp" element={<StylingComp />}> </Route>
                    <Route exact path="/eventBinding" element={<EventBinding />}> </Route>
                    <Route exact path="/compLifeCycle" element={<CompLifeCycle />}> </Route>
                </Routes>
            </Router>
        </>
    )
}

export default MainComp;
