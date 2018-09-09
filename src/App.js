import React, { Component } from 'react'
import './App.css'
import ReactViewTable from './lib/ReactViewTable'

const getRandomData = (rows) => {
  const res = []
  for (let i = 0; i < rows; i++) {
    const number = i + 1
    res.push({
      number,
      firstName: `John ${number}`,
      lastName: `Smith ${number}`,
      phone: '+12345678',
      email: 'test@test.test',
      age: 22,
      role: 'Engineer',
    })
  }
  return res
}

const columns = [
  {
    label: '#',
    accessor: 'number',
    width: 50,
  },
  {
    label: 'First Name',
    accessor: 'firstName',
    width: 150,
  },
  {
    label: 'Last Name',
    accessor: 'lastName',
    width: 200,
  },
  {
    label: 'Phone',
    accessor: 'phone',
  },
  {
    label: 'Email',
    accessor: 'email',
  },
  {
    label: 'Age',
    accessor: 'age',
  },
  {
    label: 'Role',
    accessor: 'role',
  },
]

const columns2 = [
  {
    label: '#',
    accessor: 'number',
    width: 50,
  },
  {
    label: 'First Name',
    accessor: 'firstName',
    width: 300,
  },
  {
    label: 'Last Name',
    accessor: 'lastName',
    width: 200,
  },
]

const data = getRandomData(1000)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React View Table</h1>
          <p>Small, simple and fast react table component.</p>
        </header>
        <div style={{ width: 700, margin: '20px auto' }}>
          <h2>Horizontal and vertical scroll</h2>
          <p>Render 1000 items</p>
          <ReactViewTable
            data={data}
            columns={columns}
            maxHeight={500}
          />
        </div>
        <hr />
        <div style={{ width: 1000, margin: '20px auto' }}>
          <h2>Columns smaller than table width</h2>
          <ReactViewTable
            data={data}
            columns={columns2}
            maxHeight={500}
          />
        </div>
        <hr />
        <div style={{ width: 700, margin: '20px auto' }}>
          <h2>No result</h2>
          <ReactViewTable
            columns={columns}
            maxHeight={500}
          />
        </div>
        <footer className='App-footer'>
          <a href='https://github.com/asimonok/react-view-table'>GitHub</a>
        </footer>
      </div>
    )
  }
}

export default App
