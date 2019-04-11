//Set up app credentials
const credentials = {
    apiKey: "YOUR_API_KEY_GOES_HERE",
    username: "YOUR_USERNAME_GOES_HERE"
}

//Initialize SDK
const AfricasTalking = require("africastalking")(credentials)

//Get the payments service
const payments = AfricasTalking.PAYMENTS

const initiateB2C = async () => {
    
    //Set the name of the AT Payments product
    const productName = ""

    //Set up the recipients
    const recipients = [{
        //The phone number of the recipient
        phoneNumber: "YOUR_PHONE_NUMBER_GOES_HERE",
        //Set the 3-letter ISO currency code and amount
        currencyCode: "KES",
        //Set the amount to be sent to the recipient
        amount: "100",
        //You can add addiitional metadata about the transaction
        metadata: {
            foo: "bar",
            bar: "foo"
        },
        //Optional reason field to identify various payments
        reason: "Reason for payment"
    }]

    //That's it. We'll take care of the rest
    try {
        const result = await payments.mobileB2C({productName, recipients})
        console.log(result)
    } catch {
        console.log(err)
    }

}

initiateB2C();