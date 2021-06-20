/**
 * @copyright Md. Sarwar Hoshen
 */

/**
 */
export const Rdx_Add_Fav = ( b_init ) =>
{
    return {
        type: 'add:list:fav',
        payload: b_init,
    }
}   // Rdx_Add_Fav

/**
 */
export const Rdx_Upd_Fav = ( cn_obj ) =>
{
    return {
        type: 'upd:list:fav',
        payload: cn_obj,
    }
}   // Rdx_Upd_Fav
