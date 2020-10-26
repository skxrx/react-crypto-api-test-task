import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { Button, CsvDownloadButton } from './index.js'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      //width: '45ch',
    },
  },
}))

const InitialComponent = () => {
  const classes = useStyles()

  //const items = []
  const [items, setItems] = React.useState([])

  const [urlAdress, setUrlAdress] = React.useState('')
  const [coinName, setCoinName] = React.useState('')

  const getFieldsData = () => {
    if (!document.querySelector('#url').value) {
      alert('Введите URL')
      return
    }
    if (!document.querySelector('#coinname').value) {
      alert('Введите название криптовалюты')
      return
    }

    setUrlAdress(document.querySelector('#url').value)
    setCoinName(document.querySelector('#coinname').value)

    document.querySelector('#url').value = ''
    document.querySelector('#coinname').value = ''
  }

  return (
    <div className={classes.root} noValidate autoComplete='off'>
      <form action=''>
        <TextField
          style={{ width: '50ch', marginRight: '2ch' }}
          id={'url'}
          label='Paste your URL here'
          variant='filled'
        />
        <TextField
          style={{ width: '30ch' }}
          id={'coinname'}
          label='Write name of coin here'
          variant='filled'
        />
        <Button
          items={items}
          setItems={setItems}
          onClick={getFieldsData}
          urlAdress={urlAdress}
          coinName={coinName}
        />
      </form>
      <CsvDownloadButton coins={items} />
    </div>
  )
}

export default InitialComponent
