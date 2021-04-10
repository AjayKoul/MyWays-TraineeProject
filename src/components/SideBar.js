import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import {useDataLayerValue} from './context';
import Switch from '@material-ui/core/Switch';

const SideBar = ({filter,setFilter,sortValue,setSortValue,setSearch}) => {
    const [state,dispatch] = useDataLayerValue();
    const uniqueProviders = [...new Set(state.map((item,index) => item.Provider))];

    const handleChange=(e)=>{
        if(e.target.checked){
            setFilter([...filter,e.target.value]);
            
        }
        else{
            setFilter(filter.filter(item=>item!==e.target.value));
        }
        
    }

    const handleSearch=(e)=>{
        setSearch(e.target.value);
    }

    return (
        <>
        <Container>
            <SearchContainer>
                <h4>Search Courses</h4>
                <SearchBar>
                    <input  placeholder="Keywords, skills etc" onChange={e=>handleSearch(e)}/>
                    <SearchIcon/>
                </SearchBar>
            </SearchContainer>
            <CourseProviderFilter>
                <h4>Filter by Course Provider</h4>
                {
                    uniqueProviders.map((item,index)=>{
                        return(
                            <div style={{padding:'6px'}}>
                                <input type="checkbox" name={`Provider${index}`} value={item} onChange={e=>handleChange(e)}/>
                                <label htmlFor={`Provider${index}`}>{item}</label>
                            </div>
                    )})
                }
            </CourseProviderFilter>
            <SortDataSwitches>
                    <h4>Quick Filters</h4>
                    <div style={{display:'flex',alignItems:'center', justifyContent:'space-between'}}>
                        <p>Trending Courses</p>
                        <Switch
                            checked={sortValue.trending}
                            onChange={e=>setSortValue({ ...sortValue, [e.target.name]: e.target.checked })}
                            color="primary"
                            name="trending"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </div>
                    <div style={{display:'flex',alignItems:'center', justifyContent:'space-between'}}>
                        <p>Sort By Price</p>
                        
                        <Switch
                            checked={sortValue.price}
                            onChange={e=>setSortValue({ ...sortValue, [e.target.name]: e.target.checked })}
                            color="primary"
                            name="price"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </div>
            </SortDataSwitches>
        </Container>
        </>
    )
}

export default SideBar
const Container = styled.div`
    overflow: hidden;
    padding: 20px;
`
const SearchContainer = styled.div`
    
`
const SearchBar = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    width: 15vw;
    border-radius: 5px;
    padding: 10px;

    input{
        border: none;
        outline: none;
        width: 100%;
    }
`
const CourseProviderFilter = styled.div`
    
`
const SortDataSwitches = styled.div`
    
`