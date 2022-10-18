// Style your components here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 100vh;
  padding: 100px;
  @media screen and (max-width: 560px) {
    padding: 30px;
    flex-direction: column;
  }
`
export const Heading = styled.h1`
  font-size: 35px;
  font-family: 'Roboto';
  font-weight: 600;
  color: #35469c;
`

export const InputImage = styled.input`
  height: 40px;
  width: 400px;
  @media screen and (max-width : 560px) {
      width : 100%;
  }
  padding: 10px;
  border: 1px solid #5a7184;
  color: : #7e858e;
  font-family: 'Roboto';
  font-weight: 500;
`

export const LabelElement = styled.label`
  color: #5a7184;
  font-family: 'Roboto';
  margin-bottom: 10px;
  margin-top: 20px;
`

export const SelectElement = styled.select`
  height: 40px;
  width: 400px;
  padding: 10px;
  border: 1px solid #5a7184;
  font-family: 'Roboto';
  font-weight: 500;
  outline: #5a7184;
  @media screen and (max-width: 560px) {
    width: 100%;
  }
`
export const Button = styled.button`
  height: 40px;
  width: 120px;
  padding: 10px;
  border-radius: 8px;
  border: none;
  background-color: #0b69ff;
  color: white;
  font-family: 'Roboto';
  margin-top: 25px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`
export const Card = styled.div`
  display: flex;
  background-image: url('${props => props.img}');
  background-size: cover;
  border-radius: 15px;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  width: 500px;
  margin-left: 100px;
  margin-top: 50px;
  text-align: center;
  @media screen and (max-width: 560px) {
    width: 90%;
    height: 200px;
    margin-left: 10px;
    margin: 10px;
  }
`
export const Para = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: ${props => props.font}px;
  color: white;
`
