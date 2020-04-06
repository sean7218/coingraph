import fetch from 'node-fetch';

const Transactions = () => {


  return (<div>transactions</div>)
}

Transactions.getInitialProps = async ctx => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  console.log(json)
  return { stars: json.stargazers_count }
}



export default Transactions;