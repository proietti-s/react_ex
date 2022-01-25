import Card from "../UI/Card";
import Button from "../UI/Button";



const AddCustomers = (props) => {

    const logButton = (event)=>{
        event.preventDefault()
        console.log('okay')
    }
    return <Card>
        <form>
            <label>Name</label>
            <input type="text"/>
            <label>Surname</label>
            <input type="text"/>
            <label>Email</label>
            <input type="text"/>
            <Button onClick={logButton}/>
        </form>
    </Card>
}

export default AddCustomers;