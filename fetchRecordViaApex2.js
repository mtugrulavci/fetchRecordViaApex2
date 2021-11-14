import { LightningElement,track } from 'lwc';
import getAllContacts from '@salesforce/apex/ContactManager.getContact2'
export default class FetchRecordViaApex2 extends LightningElement {
    @track numberOfRecords;
    @track contacts;

    get responseRecieved(){
        if(this.contacts){
            return true;
        }
        return false;

    }
    numberOfContactChangeHandler(event){
        this.numberOfRecords = event.target.value;
    }
    getContacts(){
        getAllContacts({numberOfRecords:this.numberOfRecords}).then(response=>{
            this.contacts =response;}).catch(error=> {
                console.log("error in retrieving the records", error.body.message)})
    }
}