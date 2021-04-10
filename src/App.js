import {useState,useEffect} from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';
import styled from 'styled-components';
import Data from './components/Data';
import {useDataLayerValue} from './components/context';
function App() {
  const [state,dispatch] = useDataLayerValue();

  //Data will be provided by api call in reality so i am storing data(response) in context api 
  useEffect(()=>{
    dispatch({
      type:'SET_DATA',
      data: Data,
    })
   
  },[])

  const [filter,setFilter] = useState([]);
  const [sortValue,setSortValue] = useState({
    trending: false,
    price: false
  });
  const [search,setSearch] = useState('');
  

  return (
    <>
      <MainContainer>
        <Header />
        <Body>
          <SideBar filter={filter} setFilter={setFilter} sortValue={sortValue} setSortValue={setSortValue} setSearch={setSearch}/>
          <MainContent filter={filter} sortValue={sortValue} search={search}/>
        </Body>
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 50px minmax(0, 1fr);
  background-color: #dcd8d8;
  box-sizing: border-box;
  overflow: hidden;
`
const Body = styled.div`
  display: grid;
  grid-template-columns: 27vw auto;
  box-sizing: border-box;
`
