import React,{useState} from 'react';
import styled from 'styled-components';
import {useDataLayerValue} from './context';
import StarIcon from '@material-ui/icons/Star';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const CourseCard = ({ProductId}) => {
    const [state,dispatch] = useDataLayerValue();
    const [isExpanded,setIsExpanded] = useState(false);
    const courseDetails=state.filter(course=>course.ProductId===ProductId);
     const ProviderTagColors={Coursera:'#1b86a9',Edureka:'#147392',Udemy:'#6d8e47'};
    return (
        <>
            <Container onClick={()=>setIsExpanded(!isExpanded)}>
                    <ProviderTag style={{backgroundColor:`${ProviderTagColors[courseDetails[0].Provider]}`}}>
                        {courseDetails[0].Provider}
                    </ProviderTag>
                    <CourseInfo>
                            <img src={courseDetails[0].URL.productImage} alt="Course"/>
                            <h3>{courseDetails[0].Name}</h3>
                    </CourseInfo>
                    <Rating>
                            <p>{courseDetails[0].Params.avg_rating}</p>
                            <StarIcon style={{color:"yellow", fontSize:'24px'}}/>
                    </Rating>
                    <Duration>
                            <ScheduleIcon style={{paddingRight: '25px'}}/>
                            {courseDetails[0].duration}
                    </Duration>
                    <Price>
                            <AttachMoneyIcon style={{paddingRight: '25px',paddingTop:'2px'}}/>
                            {courseDetails[0].Price.retail}
                    </Price>
                    <KeywordContainer>
                            {
                                courseDetails[0].Keywords!==null?courseDetails[0].Keywords.split(',').map((item,index)=>(
                                    <Keywords>{item}</Keywords>
                                )):''
                            }
                    </KeywordContainer>
                    {
                        isExpanded?
                        <div>
                            <DescContainer>
                                <h4>About the Course</h4>
                                {courseDetails[0].Description.long}
                            </DescContainer>
                            <ButtonContainer>
                                <button>Save for Later</button>
                                <a href={courseDetails[0].URL.product}>Enroll Now</a>
                            </ButtonContainer>
                        </div>:''
                    }
            </Container>
        </>
    )
}

export default CourseCard

const Container = styled.div`
    background-color: white;
    border-radius: 10px;
    width: 33vw;
    margin-bottom: 25px;
    transition: transform .4s;
    :hover {
        transform: scale(1.1); 
      }

    p{
        margin: 5px 0px 5px 30px;
    }
`
const ProviderTag = styled.div`
    border-radius: 10px 10px 10px 0px;
    width: 10vw;
    text-align: center;
    color: white;
`
const CourseInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 15px;

    img{
        width: 9vw;
        height: 10vh;
    }
`
const Rating = styled.div`
    display: flex;
    align-items: center;
`
const Duration = styled.div`
    display: flex;
    align-items: center;
    margin-left: 30px;
`
const Price = styled.div`
    display: flex;
    align-items: center;
    margin-left: 30px;
`
const KeywordContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px;
`
const Keywords = styled.div`
    background-color: gray;
    color: white;
    padding: 3px;
    margin-right: 5px;
    border-radius: 5px;
`
const DescContainer = styled.div`
    padding: 10px;
`
const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 5px;
    

    button{
        outline: none;
        cursor: pointer;
        background-color: white;
        border: none;
        color: blue;
        font-weight: 600;
    }
    a{
        text-decoration: none;
        cursor: pointer;
        background-color: #3e3056;
        color: white;
        padding: 5px;
        border-radius: 8px;
    }
`