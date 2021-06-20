/**
 * @copyright Md. Sarwar Hoshen
 */

export default( state = {
    favList: [],
}, action ) =>
{
    switch( action.type )
    {
        case 'add:list:fav':
            return {...state, favList: action.payload}
        case 'upd:list:fav':
            return {...state, favList: action.payload}

        default:
            return state
    }   // switch ...

}   // export default


