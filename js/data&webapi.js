

class contestinfo{

    
constructor () {
 var link,name,startime,endtime,duration,status;

}};
var data = [];


//for error .catch( )
 function insertcon(contest,sitename){

        var tag=document.createElement("div");
        tag.setAttribute("class","card");
      
        var tag1=document.createElement("div");
        tag1.setAttribute("class","card-body");
      

        let element= document.createTextNode(contest.name);
        var tag2=document.createElement('h5');
        tag2.setAttribute("class","card-title");
        let element1;
        if(contest.duration<23)
         element1= document.createTextNode(" Start Date : "+ (contest.startime.substr(0,10))+ "    Duration : " + contest.duration + " hrs");
        else {
            var days= (contest.duration)/24;
            days.toPrecision(2);
            var hours=(contest.duration)%24;
            hours.toPrecision(2);
            element1= document.createTextNode(" Start Date : "+ (contest.startime.substr(0,10))+ "     Duration : " + days + " days " + hours + " hrs");

        }
        var tag3=document.createElement('p');
        tag3.setAttribute("class","card-text");
       
        let element3= document.createTextNode(contest.name);
        var tag4=document.createElement('a');
        var tag6=document.createElement('div');
        tag6.appendChild(element3);
        tag6.setAttribute("class","contest_link");
        tag4.setAttribute("href",contest.link);
        tag4.setAttribute("target","_blank");
        
       
        tag6.innerHTML="Register Here !";
        tag4.appendChild(tag6)
        
     

        tag3.appendChild(element1);
        tag2.appendChild(element);
        tag1.appendChild(tag2);
        tag1.appendChild(tag3);
        tag1.appendChild(tag4);
        if(contest.status=="CODING")
        {
          
            var isonline=document.createElement('div');
           
            isonline.innerHTML="CODING";
          
        
            
            
            isonline.setAttribute("class","online_button");
            tag1.appendChild(isonline);


        }

       
        tag.appendChild(tag1);

       var node= document.getElementById(sitename);
       node.appendChild(tag);
    };
   

//URL.creteObjectURL(data) for creating urls 
async function contestdata()
{   
    let urls=[
    'https://www.kontests.net/api/v1/codeforces',
    "https://www.kontests.net/api/v1/top_coder",
    "https://www.kontests.net/api/v1/at_coder",
    "https://www.kontests.net/api/v1/code_chef",
    "https://www.kontests.net/api/v1/hacker_rank",
    "https://www.kontests.net/api/v1/leet_code"
    ];
    sites= ["cf","tc","ac","cc","hr","lc"]
    for(let i=0 ;i<urls.length;i++)
    {
    var cf= await fetch(urls[i]).then();
    var item=await cf.json();

        if(item.length!=0)
    item.forEach(contests => {

        var item= new contestinfo();
        item.link= (contests.url);
        item.name= contests.name;
        item.startime= contests.start_time;
        item.endtime= contests.end_time;
        item.duration= contests.duration/(60*60);
        item.status= contests.status;
        insertcon(item,sites[i]);
        // document.write('<h2>'+item.name+'</h2><br>');
        console.log(item.name);
        
    });
}


}

contestdata();