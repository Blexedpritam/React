import './App.css';
import { Welcome   } from './Welcome';
import { Button } from './Button';
// import { Hello } from './Hello';
import { Hello,HelloWithoutJSX } from './Hello';
import { Card } from './Card';
import { UserProfile } from './UserProfile';
import { ContactForm } from './ContactForm';
import { StyleFrom } from './StyleFrom';
import { CandidateProfile } from './CandidateProfile';
import { Product } from './Product';
import { Greeting } from './Greeting';
import { CardWrapper } from './CardWrapper';
import { UserDetails } from './UserDetails';
import { ProductList } from './ProductList';
import { NameList } from './NameList';
import { TodoList } from './TodoList';
import { Alert } from './Alert';
import { NewButton } from './NewButton';



function App() {

  return (
    <div>
      <NewButton/>
      <Alert>Your chnages have been saved! </Alert>
      <Alert type='error'>Something went wrong</Alert>
      <TodoList/>
      <NameList/> 
      <ProductList/>
      <UserDetails name = "Pritam Kumar" isOnline={true} isPremium={true} isNewUser={true} role="admin"/>
      <UserDetails name = "Aman Kumar" isOnline={true} hideOffline={true} role="vip"/>
      <CardWrapper title= "user-profile" >
        <p>Pritam kumar</p>
        <p>Batman@gamil.com</p>
        <button>Edit Profile</button>
      </CardWrapper>
      
      
      
      <Greeting name="Pritam" message = "Good Morning" />
      <Greeting name ="Sumit" />
      <Greeting message = "Welcome"/>
      <Greeting/>



      <Product
      // When Passing Different Type Of Data ....
       title = "Gaming Laptop" //For Striing use = " "
       price={1299.99}  
       inStock={true}         //For everthing else we use Curly Braces ...
       categories={["Electroonics, Computer , Gaming "]} 
      />
      {/* Each Welcome Componenets recevie has props  */}
      <Welcome name = "Bruce" alias = "Batman"/>
      <Welcome name = "Clark" alias = "Superman"/>
      <Welcome name = "Diana" alias = "Wonder Woman"/>
      

      <CandidateProfile/>
      <StyleFrom/>
      <ContactForm/>
      <Hello/>
      <HelloWithoutJSX/>
      <UserProfile/>
      <Card/>
      
      <Button/>
    </div>
  )
}

export default App
