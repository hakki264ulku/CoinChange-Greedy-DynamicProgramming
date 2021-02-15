import './App.css';
import tw from 'twin.macro'

function TopContainer() {

  return (
      <MainContainer>

        <ProfileContainer>
          <Image src='ppp.jpeg' />
          <InfoAboutDeveloperContainer>
            <Title>Hakkı ÜLKÜ</Title>
            <No>172010020024</No>
            <Explanation>
              Design and Analysis of Algorithms
          </Explanation>
            <Explanation>Programming Project 2</Explanation>
          </InfoAboutDeveloperContainer>
        </ProfileContainer>



        <ApplicationExplanationContainer>
          <ApplicationTitle>Coin Change - Greedy - Dynamic Approach</ApplicationTitle>
          <AppExplanation>
            This application built to show Greedy approach and Dynamic Programming Approach on coin changings.
          </AppExplanation>
          <AppExplanation>
            Application uses the dynamic approach and greddy approach to find out exchanging coins for a specific value with the given denominations.
          </AppExplanation>
        </ApplicationExplanationContainer>
        
      </MainContainer>

  );
}

export default TopContainer;


// Styled ~ Components //

const MainContainer = tw.div`flex justify-around`

const ProfileContainer = tw.div`w-2/5 bg-blue-100 shadow-xl rounded-lg p-4
flex items-start`
const Image = tw.img`rounded-full w-32 md:w-48`
const InfoAboutDeveloperContainer = tw.div`ml-16`
const Title = tw.h2`font-bold text-gray-900 text-4xl`
const No = tw.h3`font-bold text-xl text-gray-600 mt-1 mb-4`
const Explanation = tw.p`font-bold text-blue-800 text-xl`

const ApplicationExplanationContainer = tw.div`w-2/5 bg-blue-100 shadow-xl rounded-lg p-6`
const ApplicationTitle = tw.h2`font-bold text-gray-900 text-4xl text-center mb-1`
const AppExplanation = tw.div`font-bold text-blue-800 text-base`