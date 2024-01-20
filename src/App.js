import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ParentCompUseMemo from './components/Memo/ParentCompUseMemo';
import ErrorBoundries from './components/ErrorBoundries/ErrorBoundries';
import ShoppingUseReducer from './components/UseReducerHook/ShoppingUseReducer';
import ControlledComp from './components/ControlledAndUncontrolledComp/ControlledComp';
import UncontrolledComp from './components/ControlledAndUncontrolledComp/UncontrolledComp';
import ChartsTest from './components/ApexCharts/ChartsTest';
import ControlledCompAssig from './components/ControlledAndUncontrolledComp/ControlledCompAssig';
import ParentCompUseContext from './components/useContextHook/ParentCompUseContext';
import { EmployeeProvider } from './components/CRUD_using_context_api/EmployeeStore';
import EmployeeList from './components/CRUD_using_context_api/EmployeeList';
import AddEmployee from './components/CRUD_using_context_api/AddEmployee';
import EditEmployee from './components/CRUD_using_context_api/EditEmployee';
// import ParentCompUseContext from './components/useContextHook/ParentCompUseContext';

// import ClassComponentExample from './components/FormHandling/ClassComponentExample';
// import PureComp from './components/PureCompAndCPComm/PureComp';
// import ParentFCComp from './components/PureCompAndCPComm/ParentFCComp';
// import FormBasics from './components/FormHandling/FormBasics';
// import AdvanceForm from './components/FormHandling/AdvanceForm';
// import FormAllInputs from './components/FormHandling/FormAllInputs';
// import ParentComm from './components/PureCompAndCPComm/ParentComm';
// import ChildComm from './components/PureCompAndCPComm/ChildComm';
// import MainComp from './components/RectRouting/Website';
// import ApiIntegration from './components/ApiIntegration/ApiIntegration';
// import Container from './components/CompoLifeCycle/Container';
// import ApiIntegrationProducts from './components/ApiIntegration/ApiIntegrationProducts';
// import UseEffectHook from './components/ApiIntegration/UseEffectHook';
// import ApiCallUsinguseEffect from './components/ApiIntegration/APICallUsinguseEffect';
// import ApiCallUsinguseEffectHook from './components/ApiIntegration/ApiCallUsinguseEffectHook';
// import Container from './components/CompoLifeCycle/Container';
// import ContextProvider from './components/useContextHook/useContext/ContextProvider';
function App() {
  return (
    <div className="App">
      {/* <Home/>
      <Personal/>
      <Education/> */}
      {/* <h2>Welcome to React JS.</h2> */}
      {/* <Footer/> */}
      {/* <TestClassComponent/> */}
      {/* <FunctionalComp/> */}
      {/* <JsxComp/> */}
      {/* <FragmntComp/> */}
      {/* <MainComp/> */}
          {/* <Container/> */}
      {/* <ApiIntegration/> */}
      {/* <ApiIntegrationProducts/> */}
      {/* <UseEffectHook/> */}
      {/* <ApiCallUsinguseEffect/> */}
        {/* <ApiCallUsinguseEffectHook/> */}
        {/* <Container/> */}
        {/* <ParentComm/> */}
        {/* <PureComp/> */}
        {/* <ParentFCComp/> */}
        {/* <FormBasics/> */}
        {/* <AdvanceForm/> */}
        {/* <FormAllInputs/> */}
        {/* <ClassComponentExample/> */}
        {/* <ParentCompUseContext/> */}
        {/* <ContextProvider/> */}
        {/* <ParentCompUseMemo/> */}
        {/* <ErrorBoundries/> */}
        {/* <ShoppingUseReducer/> */}
        {/* <ControlledComp/> */}
        {/* <UncontrolledComp/> */}
        {/* <ChartsTest/> */}
        {/* <ControlledCompAssig/> */}

        <Router>
          <EmployeeProvider>
          <Routes>
            <Route exact path='/' element={<EmployeeList/>}></Route>
            <Route exact path='/addEmployee' element={<AddEmployee/>}></Route>
            <Route exact path='/editEmployee/:id' element={<EditEmployee/>}></Route>
          </Routes>
          </EmployeeProvider>
        </Router>
    </div>
  );
}

export default App;
