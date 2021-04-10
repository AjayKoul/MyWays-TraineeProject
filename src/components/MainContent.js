import React,{useEffect,useState} from 'react';
import {useDataLayerValue} from './context';
import styled from 'styled-components';
import CourseCard from './CourseCard';
import Scrollbar from 'react-scrollbars-custom';

const MainContent = ({filter,sortValue,search}) => {
    let [state,dispatch] = useDataLayerValue();
    const sortedState=[...state];
    const sortPrice =()=>{
        return sortedState.sort((a,b)=>a.Price.retail-b.Price.retail)
    }
    const sortTrending =()=>{
        return sortedState.sort((a,b)=> b.Params.avg_rating-a.Params.avg_rating
        
        )
    }
        if(sortValue.price){
            console.log('hhhh')
            sortPrice()
        }
        if(sortValue.trending){
            console.log('ttt')
            sortTrending()
        }
        
    
    return (
        <>
        <Scrollbar style={{ width: '73vw', height: '44vw' }}>
            <Container>
                <h4>
                    Courses to enhance your skill-set
                </h4>
                <CardContainer>
                {
                    sortValue.price||sortValue.trending?
                    sortedState.map((course,index)=>(
                        filter.length===0?<CourseCard key={index} ProductId={course.ProductId} />:filter.find(element=>element===course.Provider)!==undefined&&<CourseCard key={index} ProductId={course.ProductId}/>
                    )):
                    state.filter(item=>item.Name&&item.Name.toLowerCase().includes(search)||item.Keywords&&item.Keywords.toLowerCase().includes(search)).map((course,index)=>(
                        filter.length===0?<CourseCard key={index} ProductId={course.ProductId}/>:filter.find(element=>element===course.Provider)!==undefined&&<CourseCard key={index} ProductId={course.ProductId}/>
                    ))
                }
                </CardContainer>
            </Container>
        </Scrollbar>
        </>
    )
}

export default MainContent

const Container = styled.div`
    overflow: overlay;
    ::-webkit-scrollbar {
        display: none;
      }
      
`
const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
`