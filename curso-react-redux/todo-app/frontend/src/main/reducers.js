import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todo: () => ({
    description: "Ler livro",
    list: [
      {
        _id: 1,
        description: "Cangaceiro Javascript",
        done: true
      },
      {
        _id: 2,
        description: "Mean",
        done: true
      },
      {
        _id: 3,
        description: "React Javascript",
        done: true
      }
    ]
  })
})

export default rootReducer
