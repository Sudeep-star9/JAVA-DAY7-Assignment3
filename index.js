function getme(num){
    for(let i=0;i<=num;i++){
        if(i%3==0){
            console.log('fizz')
        }
        else if(i%15==0){
            console.log('fizbuz')
        }
        if(i%5==0){
            console.log('buzz')
        }
      
        else {
            console.log(i)
        }
    }
}
getme(15)