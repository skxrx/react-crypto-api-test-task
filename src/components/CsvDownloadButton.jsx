import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MaterialButton from '@material-ui/core/Button'
import FileSaver from 'file-saver'

const useStyles = makeStyles(theme => ({
  button: {
    width: '45ch',
    margin: theme.spacing(1),
  },
}))

const CsvDownloadButton = ({ coins }) => {
  const classes = useStyles()

  const convertToCSV = objArray => {
    let array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray
    let str = ''

    for (let i = 0; i < array.length; i++) {
      let line = ''
      for (let index in array[i]) {
        if (line !== '') line += ','

        line += array[i][index]
      }

      str += line + '\r\n'
    }
    console.log(str)
    return str
  }

  const saveFile = () => {
    const csv = convertToCSV(coins)
    const csvData = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    FileSaver.saveAs(csvData, 'data.csv')
  }

  return (
    <div className={classes.button}>
      <MaterialButton onClick={saveFile} variant='contained' color='secondary'>
        download as CSV
      </MaterialButton>
    </div>
  )
}

export default CsvDownloadButton
