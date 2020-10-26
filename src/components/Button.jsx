import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MaterialButton from '@material-ui/core/Button'

import axios from 'axios'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const API_KEYS = {
  coinmarketcap: '92c47e2e-f8f1-4017-8a29-3d27b955b2f7',
}

const Button = ({ items, setItems, onClick, urlAdress, coinName }) => {
  const classes = useStyles()

  //const [coins, setCoins] = React.useState(items)

  const getCoinData = async (url, coin) => {
    if (!url || !coin) return

    await axios
      .get(`${url}?symbol=${coin}`, {
        headers: {
          'X-CMC_PRO_API_KEY': API_KEYS.coinmarketcap,
        },
      })
      .then(res => {
        const item = {
          url,
          name: coin,
          price: 0,
        }

        item.price = res.data.data[coin].quote.USD.price

        setItems([...items, item])
      })
      .catch(e => {
        alert(e)
      })
  }

  React.useEffect(() => {
    getCoinData(urlAdress, coinName)
  }, [urlAdress, coinName])

  return (
    <div className={classes.root}>
      <MaterialButton onClick={onClick} variant='contained' color='primary'>
        <span>Get balance via URL and Coin name</span>
      </MaterialButton>
      <div className='coins'>
        Ваши валюты:
        <ul>
          {items &&
            items.map((coin, index) => (
              <li key={`${coin.name}_${index}`}>
                {coin.name} : Price = {coin.price}
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Button
