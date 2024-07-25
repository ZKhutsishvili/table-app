const columns = [
    {
      "id": 1,
      "col1": true,
      "col2": "John Doe",
      "col3": 28,
      "col4": "john.doe@example.com",
      "col5": ["Frontend Developer", "Mentor"]
    },
    {
      "id": 2,
      "col1": true,
      "col2": "Jane Smith",
      "col3": 34,
      "col4": "jane.smith@example.com",
      "col5": ["CEO", "Manager"],
      "subRows": [
        {
          "id": 3,
          "col1": false,
          "col2": "Indiana Jones",
          "col3": 50,
          "col4": "inddiana.Jones@example.com",
          "col5": ["Assistant"]
        },
        {
          "id": 4,
          "col1": true,
          "col2": "Ben Nicholson",
          "col3": 25,
          "col4": "ben.nicholson@example.com",
          "col5": ["Operator"]
        }
      ]
    },
    {
      "id": 3,
      "col1": false,
      "col2": "Alice Johnson",
      "col3": 45,
      "col4": "alice.johnson@example.com",
      "col5": ["CTO", "Team Lead", "Software Engineer"]
    },
    {
      "id": 4,
      "col1": true,
      "col2": "Bob Brown",
      "col3": 23,
      "col4": "bob.brown@example.com",
      "col5": ["Support", "Consultant"]
    },
    {
      "id": 5,
      "col1": false,
      "col2": "Charlie Davis",
      "col3": 30,
      "col4": "charlie.davis@example.com",
      "col5": ["Admin", "Manager"]
    }
  
]

export default columns