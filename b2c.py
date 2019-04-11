import africastalking

africastalking.initialize(username="", api_key="")

payments = africastalking.Payment

product_name = "ABC"

consumers = [{
    "name": "Bob Mwangi",
    "phoneNumber": "+254718769882",
    "currencyCode": "KES",
    "amount": 6766.88,
    "providerChannel": "1212",
    "reason": 'SalaryPayment',
    "metadata": {}
}]

try:
    res = payments.mobile_b2c(product_name, consumers)
    print(res)
except Exception as e:
    print(f"Houston we have a problem: {e}")
