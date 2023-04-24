    const listMembers = async () => {
    
        const url = "http://localhost:3000/Info";
    

        const response = await fetch(url);
    
    
        if (response.status == 200) {
    
            const data = await response.json();
            console.log(data);
        
            data.forEach((member) => {
            member.insertAdjacentHTML(
            
            )
            })
        }
    };
    listMembers();