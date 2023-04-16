export const formatPrice =(num)=>{
 const options = {
   style: 'currency',
   currency: 'USD',
   minimumFractionDigits: 2,
 }
 return num.toLocaleString('en-Us', options)
}