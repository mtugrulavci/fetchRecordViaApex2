# fetchRecordViaApex2

# fetchRecordViaApex1

Apex class:

public with sharing class ContactManager {

@AuraEnabled(cacheable=true)

    public static List<Contact> getContact(){
    
        return [select id, LastName, Phone from Contact LIMIT 20];
        
    }
    
@AuraEnabled(cacheable=true)

    public static List<Contact> getContact2(Integer numberOfRecords){
    
        return [select id, LastName, Phone from Contact LIMIT:numberOfRecords];
        
    }
    
}
