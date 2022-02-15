import styled from 'styled-components'

export const BodyContent = styled.div`
  background-color:#343B39;
  width: 99vmax;
  height: 99vh;
  top:0;
  padding-top: 20px;
`;

export const DivApp = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width:80%;
  height: 8%;
  margin:auto;
  background-color: #2AC684;
  border-radius: 5px;
  color:white;
`;

export const DivTasks = styled.div `
  border: 1px solid orange;
  display:flex;
  flex-direction: row
  flex-wrap: nowrap;
  align-content: space-around;
  justify-content: center;
  width:80%;
  margin:auto;
  margin-top: 1%;
  background-color: #33EEDF;
  border-radius: 5px;
  color:white;
`;

export const UlTask = styled.ul`
width: 80%;
`

export const LiTask = styled.li`
  display:flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: space-between;
  justify-content: space-around;
  align-items: center;
`;