export function showId(id,t){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      alert(id);
      resolve(id)
    },t)
  })
}