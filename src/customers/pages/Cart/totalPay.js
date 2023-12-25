export const cartTotal=(items)=>{

   return items.reduce((accumlatore, item)=>item.menuItem.price+accumlatore,0)
}