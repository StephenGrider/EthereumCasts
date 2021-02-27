First of all, open a terminal at the root folder and run "npm i".

BEFORE running the tests or using the command "node compile":
Open the ".env" file and replace the values:
* RPC_URL - Get it for the testnet you want to use from your infura.io account.
* ACCOUNT - Open Metamask and by clicking on e.g. "Account 1", you will copy the value to the clipboard.
* PRIVATE_KEY - Open Metamask, click the 3 dots next to "Account 1" -> Account details -> Export Private Key. You will get your key after typing your password. Paste it in this field in .env but prefix the copied value with "0x", e.g. "0xbe1e21dasd21ds...."