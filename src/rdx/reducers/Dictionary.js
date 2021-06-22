/**
 * @copyright Md. Sarwar Hoshen
 */

export default( state = {
    favList: [],
    ts: 0
}, action ) =>
{
    switch( action.type )
    {
        case 'add:list:fav':
            const _word = state.favList.find( x => x.word.toLowerCase() === action.payload.word.toLowerCase() )

            if(!_word )
            {
                state.favList.push(action.payload)
            }
            return { ...state, ts: Date.now() }

        case 'upd:list:fav':
            const idx = state.favList.findIndex( x => x.word.toLowerCase() === action.payload.word.toLowerCase() )

            if(idx !== -1)
            {
                state.favList.splice(idx,1)
            }
            return {...state, ts: Date.now()}

        default:
            return state
    }   // switch ...

}   // export default


