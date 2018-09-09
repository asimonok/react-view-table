# react-view-table
Small and simple react table.
## Installation
Run the following command:
`npm i --save react-view-table`

## Using
``` jsx
const data = [
    {
        name: 'John',
        age: 26,
        email: 'john@test.test',
    },
    {
        name: 'Amanda',
        age: 24,
        email: 'amanda@test.test',
    },
]

const columns = [
    {
        label: 'Name',
        accessor: 'name,
        width: 150,
    },
    {
        label: 'Age',
        accessor: 'age,
        width: 70,
    },
    {
        label: 'Email',
        accessor: 'email,
        width: 200,
    },
]

<ReactViewTable
   data={data}
   columns={columns}
/>
 
```


## Documentation

### Component Props

| Prop Name              |   Type   | Required? | Description                                                                     |
|------------------------|:--------:|:---------:|---------------------------------------------------------------------------------|
| data                   |   array  |     ✓     | Data of table                                                                   |
| columns                |   array  |     ✓     | Columns definition. See column params                                           |
| maxHeight              | number   |           | Max table height                                                                |
| noResultRenderer       | function |           | No result renderer                                                              |
| tableClassName         | string   |           | Table className. Value is default `ReactViewTable-table`                        |
| headerClassName        | string   |           | Table header className. Value is default `ReactViewTable-header`                |
| headerContentClassName | string   |           | Table header content className. Value is default `ReactViewTable-headerContent` |
| headerCellClassName    | string   |           | Table header cell className. Value is default `ReactViewTable-headerCell`       |
| bodyClassName          | string   |           | Table body className. Value is default `ReactViewTable-body`                    |
| rowClassName           | string   |           | Table row className. Value is default `ReactViewTable-row`                      |
| cellClassName          | string   |           | Table cell className. Value is default `ReactViewTable-cell`                    |

### Column params

| Name               |   Type   | Required? | Description                 |
|--------------------|:--------:|:---------:|-----------------------------|
| label              |  string  |     ✓     | Header cell label           |
| accessor           |  string  |     ✓     | Key of data                 |
| width              |  number  |           | Cell width. Value is default `100`                  |
| headerCellRenderer | function |           | Custom header cell renderer |
| cellRenderer       | function |           | Custom cell renderer        |

### Header Cell Renderer

``` jsx
const headerCellRenderer = ({ style, key, label }) => (
    <div className='headerCell' style={style} key={key}>
        {label}
    </div>
)
```

### Body Cell Renderer

``` jsx
const bodyCellRenderer = ({ style, key, accessor, row }) => (
    <div className='cell' style={style} key={key}>
        {row[accessor]}
    </div>
)
```
