import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactViewTable from './apps/ReactViewTable'

const getRandomData = (rows) => {
  const res = []
  for (let i = 0; i < rows; i++) {
    const number = i + 1
    res.push({
      number,
      firstName: `Alex ${number}`,
      lastName: `Simonok ${number}`,
      phone: '+12345678',
      email: 'test@test.test',
      age: 22,
      role: 'Senior Frontend Developer',
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
    headerCellRenderer: ({ style, key, label, accessor }) => <div style={style} key={key}>{label}: {accessor}</div>
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
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div style={{ width: 700, }}>
          <ReactViewTable
            data={data}
            columns={columns}
            maxHeight={500}
          />
        </div>
        <div style={{ width: 1000, }}>
          <ReactViewTable
            data={data}
            columns={columns2}
            maxHeight={500}
          />
        </div>
        <div style={{ width: 700, }}>
          <ReactViewTable
            columns={columns}
            maxHeight={500}
          />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
