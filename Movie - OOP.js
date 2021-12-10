//Class Movie
class Movie{
    constructor(title,studio,rating='PG'){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    getPG(arr){
        let ans=[]
        for(let i=0;i<arr.length;i++){
            if(arr[i].rating=='PG'){
                ans.push(arr[i])
            }
        }
        return ans
    }
}
let cr = new Movie('Casino Royale','Eon Productions','PG13')