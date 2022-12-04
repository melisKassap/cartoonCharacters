export function reducer(state, action) {
    switch (action.type) {
        

        case "ADD_NEW_CHARACTER_DATA":
            console.log(action.charactersData)
            state.characterData = action.charactersData
            return { ...state }

        case "GET_CHARACTER_DATA":
          
            state.characterData = action.posts
            return { ...state }

        default:
            return state
    }
}