import './App.css';
import tw from 'twin.macro'
import TopContainer from './TopContainer'
import { useEffect, useState } from 'react';

import { Greedy, DP } from './Utils'

function App() {

  const [coinsList, setCoinsList] = useState([])
  const [coin, setCoin] = useState(0)
  const [target, setTarget] = useState(0)

  const [greed, setGreed] = useState([])
  const [greedStatistic, setGreedStatistic] = useState([0,0,0])
  
  
  const [dp, setDP] = useState([])
  const [dpStatistic, setDPStatistic] = useState([0,0,0])



  useEffect(() => {
    //let N = prompt("Please enter the upper limit value (N): ")
  }, [])

  const handleGreedy = () => {
    let t0 = performance.now()
    let res = Greedy(target, coinsList)
    let t1 = performance.now()

    let count = 0
    let avgCoinUsage = 0
    let time = t1-t0

    res.forEach(e => {
      if(e==-1){
      } else {
        count++
        avgCoinUsage += e.length
      }
    });
    setGreed(res)
    let arr = []
    arr.push(count/res.length)
    arr.push(avgCoinUsage/count)
    arr.push(time)
    setGreedStatistic(arr)
  }

  const handleDP = () => {
    let t0 = performance.now()
    let res = DP(target, coinsList)
    let t1 = performance.now()
    let time = t1-t0

    let count = 0
    let avgCoinUsage = 0
    
    res.forEach(e=>{
      if(e.length !== 0) {
        count++
        avgCoinUsage += e.length
      }
    })

    let arr = []
    arr.push(count/res.length)
    arr.push(avgCoinUsage/count)
    arr.push(time)
    setDPStatistic(arr)

    setDP(res)
  }


  return (
    <Container>
      <TopContainer />

      <MainContainer>
        <InputsContainer>
          <CoinsContainer>
            <Input type="number" placeholder="coin" value={coin} onChange={(e) => setCoin(e.target.value)} />
            <Button onClick={() => setCoinsList([...coinsList].concat(coin))} >Add Coin</Button>
          </CoinsContainer>

          <CoinsContainer>
            <Info>Current Coins List: [ {coinsList.toString()} ]</Info>
          </CoinsContainer>

          <CoinsContainer>
            <Input type="number" placeholder="target" value={target} onChange={(e) => setTarget(e.target.value)} />
            <Button onClick={() => setTarget(target)} >Set Target</Button>
          </CoinsContainer>

          <CoinsContainer>
            <Info>Current Target (Upper Bound) : {target}</Info>
          </CoinsContainer>
        </InputsContainer>

        <AlgorithmButtons>

          <ButtonAlgol onClick={()=>handleGreedy()} >Calculate with Greedy Approach</ButtonAlgol>
          <ButtonAlgol onClick={()=>handleDP()}>Calculate with DP Approach</ButtonAlgol>
          ---
          <ResetButton onClick={()=>window.location.reload(false)}>Reset All</ResetButton>

        </AlgorithmButtons>

        <StatisticContainer>
          <Title>Statistics Table</Title>
          <UnderContainer>
            <Statistic>
              <Title>Greedy</Title>
              <Info>Success Ratio: {greedStatistic[0].toFixed(5)}</Info>
              <Info>Avg. Coin Usage: {greedStatistic[1]}</Info>
              <Info>Computation Time: {greedStatistic[2].toFixed(5)}</Info>
            </Statistic>

            <Statistic>
              <Title>DP</Title>
              <Info>Success Ratio: {dpStatistic[0].toFixed(5)}</Info>
              <Info>Avg. Coin Usage: {dpStatistic[1]}</Info>
              <Info>Computation Time: {dpStatistic[2].toFixed(5)}</Info>
            </Statistic>
          
          </UnderContainer>

        </StatisticContainer>


      </MainContainer>

      <CONTAINER>

        <ResultContainer>
          <Title>Greedy Approach</Title>
          <ResultsTable>
            <TableHead>
              <TableRow>
                <TableHeader>Value</TableHeader>
                <TableHeader>Exchanging Coins</TableHeader>
                <TableHeader>Length</TableHeader>
              </TableRow>
            </TableHead>

            <ResultContainer>
              {greed.map(g=>(
                <TableRow>
                  <TableData>{greed.indexOf(g)+1}</TableData>
                  <TableData>{g.toString()}</TableData>
                  <TableData>{g.length}</TableData>
                </TableRow>
              ))}
            </ResultContainer>

          </ResultsTable>
        </ResultContainer>

        <ResultContainer>
          <Title>Dynamic Programming Approach</Title>
          <ResultsTable>
            <TableHead>
              <TableRow>
                <TableHeader>Value</TableHeader>
                <TableHeader>Exchanging Coins</TableHeader>
                <TableHeader>Length</TableHeader>
              </TableRow>
            </TableHead>

            <ResultContainer>
              {dp.map(g=>(
                <TableRow>
                  <TableData>{dp.indexOf(g)+1}</TableData>
                  <TableData>{g.toString()}</TableData>
                  <TableData>{g.length}</TableData>
                </TableRow>
              ))}
            </ResultContainer>

          </ResultsTable>
        </ResultContainer>

      </CONTAINER>

    </Container>
  );
}

const Container = tw.div`font-sans`

const MainContainer = tw.div`flex justify-around mt-12 px-5 items-center`

const InputsContainer = tw.div`w-1/5 p-8 bg-gray-100 rounded-lg shadow ml-12 `
const CoinsContainer = tw.div`ml-8 mt-8 m-4 mb-6`
const Info = tw.div`mb-2`

const Button = tw.button`px-2 py-1 ml-3 font-bold text-white text-lg bg-gray-400 hover:bg-gray-500
 hover:cursor-pointer border-none rounded-lg focus:outline-none`
const Input = tw.input`rounded-lg p-2 focus:outline-none
shadow rounded text-gray-700`

const AlgorithmButtons = tw.div`flex flex-col bg-gray-100 rounded-lg shadow ml-8 p-5 text-center font-bold`
const ButtonAlgol = tw.button`bg-green-500 border-none shadow mb-2 font-bold p-2 rounded-lg
text-lg text-white hover:bg-green-600 hover:cursor-pointer focus:outline-none`
const ResetButton = tw.button`bg-red-600 border-none shadow mb-2 font-bold p-2 rounded-lg
text-lg text-white hover:bg-red-500 hover:cursor-pointer focus:outline-none mt-2`

const StatisticContainer = tw.div`py-2 px-4 bg-gray-100 rounded-lg shadow w-1/4`
const UnderContainer = tw.div`flex justify-between`
const Statistic = tw.div`flex flex-col`


const CONTAINER = tw.div`flex justify-around ml-12 mt-12 mb-2 pl-5 w-4/5`

const Title = tw.h2`font-bold text-xl text-center mb-2`

const ResultContainer = tw.tbody``
const ResultsTable = tw.table`table-auto text-center`
const TableHead = tw.thead`bg-gray-200`
const TableHeader = tw.th`font-bold text-yellow-200 text-xl bg-gray-400 p-2 border-solid border-2 border-gray-300`
const TableRow = tw.tr`bg-gray-100 border-solid border-2 border-gray-300`
const TableData = tw.td`text-base items-start align-middle border-solid border-2 border-gray-300`

export default App;
