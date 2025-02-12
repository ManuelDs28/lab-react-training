import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import { Random } from './components/Random';
import { BoxColor } from './components/BoxColor';
import { CreditCard } from './components/CreditCard';
import { Rating } from './components/Rating';
import { DriverCard } from './components/DriverCard';
import { LikeButton } from './components/LikeButton';
import { ClickablePicture } from './components/ClickablePicture';
import { Dice } from './components/Dice';
import { Carousel } from './components/Carousel';
import { NumbersTable } from './components/NumbersTable';
import { FaceBook } from './components/FaceBook';
import { SignupPage } from './components/SignupPage';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <div>
        <Greetings lang="es">Manuel</Greetings>
        <Greetings lang="en">Julia</Greetings>
      </div>

      <div>
        <Random min={2} max={301} />
        <Random min={2} max={500} />
      </div>

      <div>
        <BoxColor r={200} g={50} b={40} />
        <BoxColor r={300} g={100} b={30} />
      </div>

      <div className="CreditApp">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />

        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />

        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="OpenBank"
          owner="Manuel Da Silva"
          bgColor="#120101"
          color="white"
        />
      </div>

      <div className="RatingApp">
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>

      <div className="DriverCardApp">
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: 'Toyota Corolla Altis',
            licensePlate: 'CO42DE',
          }}
        />

        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: 'Audi A3',
            licensePlate: 'BE33ER',
          }}
        />
      </div>

      <div className="LikeButtonApp">
        <LikeButton /> <LikeButton />
      </div>

      <div className="ClickablePictureApp">
        <ClickablePicture img="maxence.png" imgClicked="maxence-glasses.png" />
      </div>

      <div className="DiceApp">
        <Dice />
      </div>
      <div className="CarouselApp">
        <Carousel
          images={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg',
          ]}
        />
      </div>

      <div className="NumbersTableApp">
        <NumbersTable limit={15} />
      </div>

      <div className="FacebookApp">
        <FaceBook />
      </div>

      <div className='signUpApp'>
      <SignupPage/>
      </div>
    </div>
  );
}

export default App;
