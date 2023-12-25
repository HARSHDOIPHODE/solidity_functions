# smart contract on the Ethereum blockchain
## Functions I have Created:

    InputCoursefun:
        This function handles what happens when you click the "Set Message" button in your web page.
        It takes the course code you typed in the input field, talks to your Ethereum account (assuming you're using something like MetaMask), and sends that code to your smart contract on the Ethereum blockchain.

    getData:
        When you click the "Get cource Code" button, this function gets triggered.
        It talks to your smart contract and gets the current course code stored there. Then, it shows that code in the console.

## How you Connect to my Smart Contract:

    Initializing Web3 and Contract:
        I used a library called Web3 to connect your web app with the Ethereum blockchain. This allows your app to talk to the blockchain.
        I created a Contract using Web3. This Contract object represents your smart contract on the blockchain. You told it where your smart contract is located on the blockchain using its address ("0x9e9558adE04D6C5a3abf1B8B373302047cd1B6aE").

    Interaction with the Smart Contract:
        When someone enters a course code and clicks "Set Message," your InputCoursefun function runs.
        It gets your Ethereum account (you probably use MetaMask for this), figures out how much "gas" is needed (like a transaction fee), and then sends your course code to your smart contract.
        The getData function helps you fetch the course code from your smart contract when you click the "Get cource Code" button.
