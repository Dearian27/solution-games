'use client'
import styled from 'styled-components';
import FlappyBG from '@/assets/flappy-bob.png';
import Image from 'next/image';

const Container = styled.aside`
  border: #deff67 5px solid;
  grid-row-start: 2;

  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr; */
  /* grid-auto-rows: 340px; */

  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  /* justify-content: center; */
`
const GameWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

const Div = styled.div`
  margin: 30px;
  width: 380px;
  height: 280px;
  background-color: rgb(250, 107, 255);
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 42px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 700;
  text-shadow: 0px 0px 1px #000,
  0px 0px 3px #000;
  
  border: 2px solid black;
  background: url(${FlappyBG.src});
  background-size: contain;
`

const ImgBackground = styled.img`
  
`

export default function GamesContainer() {
 
  console.log(FlappyBG)
  return (
    <Container>
      {/* <GameWrapper> */}
      <Div>Flappy bird</Div>
      {/* </GameWrapper> */}
      {/* <GameWrapper> */}
      <Div>fds</Div>
      {/* </GameWrapper> */}
      {/* <GameWrapper> */}
      <Div>fds</Div>
      {/* </GameWrapper> */}
      {/* <GameWrapper> */}
      <Div>fds</Div>
      {/* </GameWrapper> */}
      {/* <GameWrapper> */}
      <Div>fds</Div>
      <Div>fds</Div>
      <Div>fds</Div>
      {/* </GameWrapper> */}
    </Container>
  )
}