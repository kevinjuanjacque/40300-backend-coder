
class UserDaoMemory{
    constructor(){
        this.user = []
    }

    get = ()=>{
        return this.user
    }

    
    insert =(user)=>{
        this.user.push(user)
    }


    update=(user,id)=>{
        this.user[id]=user;
        return user
    }

    delete =(id)=>{         
        const array = this.user.filter((v,i)=>i!==id);
        console.log(JSON.stringify(array))
        this.user = array
    }
    
}


module.exports =new UserDaoMemory() 